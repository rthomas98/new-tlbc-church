'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { writeFile, mkdir } from 'fs/promises';
import { randomUUID } from 'crypto';
import path from 'path';
import { eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';
import {
  events, services, ministries, testimonials, siteSettings,
  sermons, leaders, beliefs, givingFunds, givingMethods, users, ministryPages, announcements,
} from '@/lib/db/schema';
import { RESOURCES, isResourceKey, JSON_FIELD_TYPES, type ResourceKey } from '@/lib/admin/fields';
import { signIn, signOut, auth } from '@/auth';

const TABLES = {
  events, services, ministries, testimonials,
  sermons, leaders, beliefs, givingFunds, givingMethods, ministryPages, announcements,
} as const;

async function requireAuth() {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');
  return session;
}

async function requireAdmin() {
  const session = await requireAuth();
  if (session.user.role !== 'admin') redirect('/admin?error=forbidden');
  return session;
}

function buildValues(resource: ResourceKey, formData: FormData) {
  const cfg = RESOURCES[resource];
  const values: Record<string, unknown> = {};
  for (const field of cfg.fields) {
    const raw = formData.get(field.name);
    if (field.type === 'checkbox') {
      values[field.name] = raw === 'on' || raw === 'true';
    } else if (field.type === 'number') {
      values[field.name] = raw ? Number(raw) : 0;
    } else if (JSON_FIELD_TYPES.includes(field.type)) {
      // Repeater/group fields arrive as a JSON string from a hidden input.
      try {
        values[field.name] = raw ? JSON.parse(String(raw)) : field.type === 'group' ? {} : [];
      } catch {
        values[field.name] = field.type === 'group' ? {} : [];
      }
    } else {
      values[field.name] = typeof raw === 'string' ? raw : '';
    }
  }
  return values;
}

export async function saveResource(formData: FormData) {
  await requireAuth();
  const resource = String(formData.get('__resource'));
  const idRaw = formData.get('__id');
  if (!isResourceKey(resource)) throw new Error(`Unknown resource: ${resource}`);

  const table = TABLES[resource];
  const values = buildValues(resource, formData);

  if (idRaw && String(idRaw) !== '') {
    const id = Number(idRaw);
    await db.update(table).set(values).where(eq(table.id, id));
  } else {
    await db.insert(table).values(values as typeof table.$inferInsert);
  }

  revalidatePath('/');
  revalidatePath(`/admin/${resource}`);
  redirect(`/admin/${resource}?flash=saved`);
}

export async function deleteResource(formData: FormData) {
  await requireAuth();
  const resource = String(formData.get('__resource'));
  const id = Number(formData.get('__id'));
  if (!isResourceKey(resource)) throw new Error(`Unknown resource: ${resource}`);

  const table = TABLES[resource];
  await db.delete(table).where(eq(table.id, id));

  revalidatePath('/');
  revalidatePath(`/admin/${resource}`);
  redirect(`/admin/${resource}`);
}

export async function togglePublished(resource: ResourceKey, id: number, next: boolean) {
  await requireAuth();
  if (!isResourceKey(resource)) throw new Error(`Unknown resource: ${resource}`);
  const table = TABLES[resource];
  await db.update(table).set({ published: next }).where(eq(table.id, id));
  revalidatePath('/');
  revalidatePath(`/admin/${resource}`);
}

export async function reorderResource(resource: ResourceKey, orderedIds: number[]) {
  await requireAuth();
  if (!isResourceKey(resource)) throw new Error(`Unknown resource: ${resource}`);
  const table = TABLES[resource];
  await Promise.all(
    orderedIds.map((id, index) =>
      db.update(table).set({ sort: index }).where(eq(table.id, id)),
    ),
  );
  revalidatePath('/');
  revalidatePath(`/admin/${resource}`);
}

export async function deleteResourceById(resource: ResourceKey, id: number) {
  await requireAuth();
  if (!isResourceKey(resource)) throw new Error(`Unknown resource: ${resource}`);
  const table = TABLES[resource];
  await db.delete(table).where(eq(table.id, id));
  revalidatePath('/');
  revalidatePath(`/admin/${resource}`);
}

export async function saveSettings(formData: FormData) {
  await requireAuth();
  const fields = [
    'address', 'phone', 'email', 'livestreamUrl',
    'facebookUrl', 'instagramUrl', 'youtubeUrl', 'marqueeText',
  ];
  const values: Record<string, unknown> = { updatedAt: new Date() };
  for (const f of fields) values[f] = String(formData.get(f) ?? '');

  const existing = await db.select().from(siteSettings).limit(1);
  if (existing[0]) {
    await db.update(siteSettings).set(values).where(eq(siteSettings.id, existing[0].id));
  } else {
    await db.insert(siteSettings).values(values as typeof siteSettings.$inferInsert);
  }
  revalidatePath('/');
  redirect('/admin/settings?flash=saved');
}

// Allowlist of safe raster image types. SVG is deliberately excluded — it can
// carry embedded <script> and would be served as active content from /public.
const ALLOWED_IMAGE_TYPES: Record<string, string> = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/webp': 'webp',
  'image/gif': 'gif',
};
const MAX_UPLOAD_BYTES = 8 * 1024 * 1024; // 8 MB

// Saves an uploaded image to /public/uploads/cms and returns its public path.
// On Vercel (read-only FS) swap this for @vercel/blob `put()`.
export async function uploadImage(formData: FormData): Promise<{ url: string } | { error: string }> {
  await requireAuth();
  const file = formData.get('file') as File | null;
  if (!file || file.size === 0) return { error: 'No file provided' };
  if (file.size > MAX_UPLOAD_BYTES) return { error: 'File too large (max 8 MB)' };

  // Validate by declared MIME type against an allowlist (no SVG/HTML).
  const ext = ALLOWED_IMAGE_TYPES[file.type];
  if (!ext) return { error: 'Unsupported file type. Use PNG, JPG, WebP, or GIF.' };

  // Verify the magic-byte signature so the bytes match the claimed type.
  const bytes = Buffer.from(await file.arrayBuffer());
  if (!hasImageSignature(bytes)) return { error: 'File does not appear to be a valid image.' };

  // Generate the stored name ourselves — never echo the client filename.
  const filename = `${randomUUID()}.${ext}`;
  const dir = path.join(process.cwd(), 'public', 'uploads', 'cms');
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, filename), bytes);

  return { url: `/uploads/cms/${filename}` };
}

// Checks the leading bytes against known raster-image magic numbers.
function hasImageSignature(buf: Buffer): boolean {
  if (buf.length < 12) return false;
  // PNG: 89 50 4E 47
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) return true;
  // JPEG: FF D8 FF
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return true;
  // GIF: "GIF8"
  if (buf[0] === 0x47 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x38) return true;
  // WEBP: "RIFF"...."WEBP"
  if (
    buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x46 &&
    buf[8] === 0x57 && buf[9] === 0x45 && buf[10] === 0x42 && buf[11] === 0x50
  ) {
    return true;
  }
  return false;
}

// Lists uploaded images in /public/uploads/cms (newest first).
export async function listMedia(): Promise<string[]> {
  await requireAuth();
  const { readdir } = await import('fs/promises');
  const dir = path.join(process.cwd(), 'public', 'uploads', 'cms');
  try {
    const files = await readdir(dir);
    return files
      .filter((f) => /\.(png|jpe?g|webp|gif)$/i.test(f))
      .sort()
      .reverse()
      .map((f) => `/uploads/cms/${f}`);
  } catch {
    return [];
  }
}

// ---------- Team & accounts ----------

export async function createUser(formData: FormData) {
  await requireAdmin();
  const email = String(formData.get('email')).trim().toLowerCase();
  const name = String(formData.get('name')).trim();
  const role = String(formData.get('role')) === 'admin' ? 'admin' : 'editor';
  const password = String(formData.get('password'));

  if (!email || !name || password.length < 8) {
    redirect('/admin/users/new?error=invalid');
  }
  const existing = await db.query.users.findFirst({ where: eq(users.email, email) });
  if (existing) redirect('/admin/users/new?error=exists');

  const passwordHash = await bcrypt.hash(password, 10);
  await db.insert(users).values({ email, name, role, passwordHash });
  redirect('/admin/users?flash=created');
}

export async function updateUser(formData: FormData) {
  await requireAdmin();
  const id = Number(formData.get('id'));
  const name = String(formData.get('name')).trim();
  const role = String(formData.get('role')) === 'admin' ? 'admin' : 'editor';
  const newPassword = String(formData.get('password') ?? '');

  const values: Record<string, unknown> = { name, role };
  if (newPassword) {
    if (newPassword.length < 8) redirect(`/admin/users/${id}?error=short`);
    values.passwordHash = await bcrypt.hash(newPassword, 10);
  }
  await db.update(users).set(values).where(eq(users.id, id));
  redirect('/admin/users?flash=saved');
}

export async function deleteUserById(id: number) {
  const session = await requireAdmin();
  // Never let an admin delete their own account (avoids lockout).
  if (String(session.user.id) === String(id)) return;
  const allUsers = await db.select().from(users);
  if (allUsers.length <= 1) return; // keep at least one account
  await db.delete(users).where(eq(users.id, id));
  revalidatePath('/admin/users');
}

export async function changeOwnPassword(formData: FormData) {
  const session = await requireAuth();
  const current = String(formData.get('current'));
  const next = String(formData.get('next'));
  const confirm = String(formData.get('confirm'));

  if (next.length < 8) redirect('/admin/account?error=short');
  if (next !== confirm) redirect('/admin/account?error=mismatch');

  const me = await db.query.users.findFirst({ where: eq(users.id, Number(session.user.id)) });
  if (!me) redirect('/admin/account?error=notfound');

  const valid = await bcrypt.compare(current, me.passwordHash);
  if (!valid) redirect('/admin/account?error=wrong');

  const passwordHash = await bcrypt.hash(next, 10);
  await db.update(users).set({ passwordHash }).where(eq(users.id, me.id));
  redirect('/admin/account?flash=saved');
}

export async function doSignIn(formData: FormData) {
  const email = String(formData.get('email'));
  const password = String(formData.get('password'));
  try {
    await signIn('credentials', { email, password, redirectTo: '/admin' });
  } catch (err) {
    // NextAuth throws a redirect on success; rethrow those.
    if (err && typeof err === 'object' && 'digest' in err) throw err;
    redirect('/admin/login?error=1');
  }
}

export async function doSignOut() {
  await signOut({ redirectTo: '/admin/login' });
}
