import { asc, eq } from 'drizzle-orm';
import { db } from './index';
import {
  events, services, ministries, testimonials,
  sermons, leaders, beliefs, givingFunds, givingMethods, ministryPages, announcements,
} from './schema';
import type { ResourceKey } from '@/lib/admin/fields';

const TABLES = {
  events, services, ministries, testimonials,
  sermons, leaders, beliefs, givingFunds, givingMethods, ministryPages, announcements,
} as const;

export async function getResourceRows(resource: ResourceKey) {
  const table = TABLES[resource];
  return db.select().from(table).orderBy(asc(table.sort), asc(table.id));
}

export async function getResourceRow(resource: ResourceKey, id: number) {
  const table = TABLES[resource];
  const rows = await db.select().from(table).where(eq(table.id, id)).limit(1);
  return rows[0] ?? null;
}
