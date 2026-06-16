import { asc, eq } from 'drizzle-orm';
import { db } from './index';
import {
  events, services, ministries, testimonials, siteSettings,
  sermons, leaders, beliefs, givingFunds, givingMethods, users, ministryPages, announcements,
} from './schema';

export async function getEvents() {
  return db.select().from(events).orderBy(asc(events.sort), asc(events.id));
}

export async function getPublishedEvents() {
  return db
    .select()
    .from(events)
    .where(eq(events.published, true))
    .orderBy(asc(events.sort), asc(events.id));
}

export async function getServices() {
  return db.select().from(services).orderBy(asc(services.sort), asc(services.id));
}

export async function getPublishedServices() {
  return db
    .select()
    .from(services)
    .where(eq(services.published, true))
    .orderBy(asc(services.sort), asc(services.id));
}

export async function getMinistries() {
  return db.select().from(ministries).orderBy(asc(ministries.sort), asc(ministries.id));
}

export async function getPublishedMinistries() {
  return db
    .select()
    .from(ministries)
    .where(eq(ministries.published, true))
    .orderBy(asc(ministries.sort), asc(ministries.id));
}

export async function getTestimonials() {
  return db.select().from(testimonials).orderBy(asc(testimonials.sort), asc(testimonials.id));
}

export async function getPublishedTestimonials() {
  return db
    .select()
    .from(testimonials)
    .where(eq(testimonials.published, true))
    .orderBy(asc(testimonials.sort), asc(testimonials.id));
}

export async function getActiveAnnouncements() {
  return db
    .select()
    .from(announcements)
    .where(eq(announcements.published, true))
    .orderBy(asc(announcements.sort), asc(announcements.id));
}

export async function getSiteSettings() {
  const rows = await db.select().from(siteSettings).limit(1);
  return rows[0] ?? null;
}

export async function getPublishedSermons() {
  return db.select().from(sermons).where(eq(sermons.published, true)).orderBy(asc(sermons.sort), asc(sermons.id));
}

export async function getPublishedLeaders() {
  return db.select().from(leaders).where(eq(leaders.published, true)).orderBy(asc(leaders.sort), asc(leaders.id));
}

export async function getPublishedBeliefs() {
  return db.select().from(beliefs).where(eq(beliefs.published, true)).orderBy(asc(beliefs.sort), asc(beliefs.id));
}

export async function getPublishedGivingFunds() {
  return db.select().from(givingFunds).where(eq(givingFunds.published, true)).orderBy(asc(givingFunds.sort), asc(givingFunds.id));
}

export async function getPublishedGivingMethods() {
  return db.select().from(givingMethods).where(eq(givingMethods.published, true)).orderBy(asc(givingMethods.sort), asc(givingMethods.id));
}

export async function getPublishedMinistryPages() {
  return db
    .select()
    .from(ministryPages)
    .where(eq(ministryPages.published, true))
    .orderBy(asc(ministryPages.sort), asc(ministryPages.id));
}

export async function getMinistryPageBySlug(slug: string) {
  const rows = await db.select().from(ministryPages).where(eq(ministryPages.slug, slug)).limit(1);
  return rows[0] ?? null;
}

export async function getUsers() {
  return db
    .select({ id: users.id, email: users.email, name: users.name, role: users.role, createdAt: users.createdAt })
    .from(users)
    .orderBy(asc(users.id));
}

export async function getUserById(id: number) {
  const rows = await db
    .select({ id: users.id, email: users.email, name: users.name, role: users.role })
    .from(users)
    .where(eq(users.id, id))
    .limit(1);
  return rows[0] ?? null;
}
