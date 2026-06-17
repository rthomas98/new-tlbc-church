'use server';

import { z } from 'zod';
import { sendContactEmail, sendPrayerEmail } from '@/lib/email';

const schema = z.object({
  name: z.string().trim().min(1, 'Please add your name.'),
  email: z.string().trim().email('Please add a valid email address.'),
  phone: z.string().trim().optional(),
  message: z.string().trim().optional(),
});

export type ContactState = { status: 'idle' | 'success' | 'error'; message?: string };

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real users never fill this hidden field. Bots do — pretend success.
  if (formData.get('company')) return { status: 'success' };

  const parsed = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!parsed.success) {
    return { status: 'error', message: parsed.error.issues[0]?.message ?? 'Please check the form.' };
  }

  const interests = formData.getAll('interests').map(String).filter(Boolean);

  const res = await sendContactEmail({ ...parsed.data, interests });
  if (!res.ok) {
    return {
      status: 'error',
      message: 'Sorry — we couldn’t send your message. Please call us at (225) 555-0149.',
    };
  }

  return { status: 'success' };
}

const prayerSchema = z.object({
  name: z.string().trim().min(1, 'Please add your name.'),
  request: z.string().trim().min(1, 'Please share your prayer request.'),
});

export type PrayerState = { status: 'idle' | 'success' | 'error'; message?: string };

export async function submitPrayer(
  _prev: PrayerState,
  formData: FormData,
): Promise<PrayerState> {
  // Honeypot — bots fill this hidden field; pretend success.
  if (formData.get('company')) return { status: 'success' };

  const parsed = prayerSchema.safeParse({
    name: formData.get('name'),
    request: formData.get('request'),
  });

  if (!parsed.success) {
    return { status: 'error', message: parsed.error.issues[0]?.message ?? 'Please check the form.' };
  }

  const confidential =
    formData.get('confidential') === 'on' || formData.get('confidential') === 'true';

  const res = await sendPrayerEmail({ ...parsed.data, confidential });
  if (!res.ok) {
    return {
      status: 'error',
      message: 'Sorry — we couldn’t submit your request. Please call us at (225) 555-0149.',
    };
  }

  return { status: 'success' };
}
