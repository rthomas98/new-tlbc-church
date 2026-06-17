import { sql } from 'drizzle-orm';
import {
  pgTable,
  serial,
  text,
  boolean,
  integer,
  timestamp,
  jsonb,
} from 'drizzle-orm/pg-core';

// --- Auth: staff accounts ---
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  name: text('name').notNull(),
  role: text('role').notNull().default('editor'), // 'admin' | 'editor'
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// --- Site-wide settings (singleton row id=1) ---
export const siteSettings = pgTable('site_settings', {
  id: serial('id').primaryKey(),
  address: text('address').notNull().default(''),
  phone: text('phone').notNull().default(''),
  email: text('email').notNull().default(''),
  livestreamUrl: text('livestream_url').notNull().default(''),
  facebookUrl: text('facebook_url').notNull().default(''),
  instagramUrl: text('instagram_url').notNull().default(''),
  youtubeUrl: text('youtube_url').notNull().default(''),
  marqueeText: text('marquee_text').notNull().default(''),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// --- Events ---
export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  day: text('day').notNull(),
  month: text('month').notNull(),
  // Real calendar date — used for chronological ordering and to auto-hide
  // events from the public site once they pass. Nullable: events without a
  // date (e.g. standing/recurring items) always remain visible.
  date: timestamp('date'),
  category: text('category').notNull().default(''),
  title: text('title').notNull(),
  description: text('description').notNull().default(''),
  location: text('location').notNull().default(''),
  time: text('time').notNull().default(''),
  photo: text('photo').notNull().default(''), // ChurchPhoto key OR /path OR url
  featured: boolean('featured').notNull().default(false),
  published: boolean('published').notNull().default(true),
  sort: integer('sort').notNull().default(0),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// --- Weekly services / gathering times ---
export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  tag: text('tag').notNull().default(''), // e.g. Sunday / Wednesday
  time: text('time').notNull().default(''),
  name: text('name').notNull(),
  description: text('description').notNull().default(''),
  photo: text('photo').notNull().default(''),
  published: boolean('published').notNull().default(true),
  sort: integer('sort').notNull().default(0),
});

// --- Ministries (homepage cards) ---
export const ministries = pgTable('ministries', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  groupName: text('group_name').notNull().default(''), // filter group
  size: text('size').notNull().default(''),
  day: text('day').notNull().default(''),
  photo: text('photo').notNull().default(''),
  tag: text('tag').notNull().default(''),
  tagBlue: boolean('tag_blue').notNull().default(false),
  published: boolean('published').notNull().default(true),
  sort: integer('sort').notNull().default(0),
});

// --- Testimonials ---
export const testimonials = pgTable('testimonials', {
  id: serial('id').primaryKey(),
  quote: text('quote').notNull(),
  name: text('name').notNull(),
  role: text('role').notNull().default(''),
  initials: text('initials').notNull().default(''),
  published: boolean('published').notNull().default(true),
  sort: integer('sort').notNull().default(0),
});

// --- Site-wide announcement bar ---
export const announcements = pgTable('announcements', {
  id: serial('id').primaryKey(),
  message: text('message').notNull(),
  linkLabel: text('link_label').notNull().default(''),
  linkUrl: text('link_url').notNull().default(''),
  variant: text('variant').notNull().default('info'), // info | alert | success
  dismissible: boolean('dismissible').notNull().default(true),
  published: boolean('published').notNull().default(false), // the on/off switch
  sort: integer('sort').notNull().default(0),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export type Announcement = typeof announcements.$inferSelect;

// --- Sermons / live services (Watch page) ---
export const sermons = pgTable('sermons', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  schedule: text('schedule').notNull().default(''), // e.g. "Sundays · 10:00 a.m. CT"
  description: text('description').notNull().default(''),
  icon: text('icon').notNull().default('CalendarDays'), // lucide icon name
  url: text('url').notNull().default(''),
  published: boolean('published').notNull().default(true),
  sort: integer('sort').notNull().default(0),
});

// --- Leaders / staff (About page) ---
export const leaders = pgTable('leaders', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  role: text('role').notNull().default(''),
  org: text('org').notNull().default(''),
  photo: text('photo').notNull().default(''),
  published: boolean('published').notNull().default(true),
  sort: integer('sort').notNull().default(0),
});

// --- Beliefs (About page) ---
export const beliefs = pgTable('beliefs', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull().default(''),
  icon: text('icon').notNull().default('BookOpen'),
  published: boolean('published').notNull().default(true),
  sort: integer('sort').notNull().default(0),
});

// --- Giving funds (Give page) ---
export const givingFunds = pgTable('giving_funds', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull().default(''),
  color: text('color').notNull().default('#A02319'),
  pct: integer('pct').notNull().default(0),
  published: boolean('published').notNull().default(true),
  sort: integer('sort').notNull().default(0),
});

// --- Giving methods / ways to give (Give page) ---
export const givingMethods = pgTable('giving_methods', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull().default(''),
  icon: text('icon').notNull().default('Globe'),
  published: boolean('published').notNull().default(true),
  sort: integer('sort').notNull().default(0),
});

// --- Ministry detail pages (rich /ministries/[slug] pages) ---
export const ministryPages = pgTable('ministry_pages', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  sub: text('sub').notNull().default(''),
  tagline: text('tagline').notNull().default(''),
  hero: text('hero').notNull().default(''),
  ages: text('ages').notNull().default(''),
  schedule: text('schedule').notNull().default(''),
  location: text('location').notNull().default(''),
  leader: text('leader').notNull().default(''),
  leaderRole: text('leader_role').notNull().default(''),
  description: jsonb('description').$type<string[]>().notNull().default(sql`'[]'::jsonb`),
  expectations: jsonb('expectations')
    .$type<{ title: string; body: string }[]>()
    .notNull()
    .default(sql`'[]'::jsonb`),
  scripture: jsonb('scripture')
    .$type<{ quote: string; ref: string }>()
    .notNull()
    .default(sql`'{"quote":"","ref":""}'::jsonb`),
  published: boolean('published').notNull().default(true),
  sort: integer('sort').notNull().default(0),
});

export type MinistryPage = typeof ministryPages.$inferSelect;

export type Sermon = typeof sermons.$inferSelect;
export type Leader = typeof leaders.$inferSelect;
export type Belief = typeof beliefs.$inferSelect;
export type GivingFund = typeof givingFunds.$inferSelect;
export type GivingMethod = typeof givingMethods.$inferSelect;

export type Event = typeof events.$inferSelect;
export type Service = typeof services.$inferSelect;
export type Ministry = typeof ministries.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
export type SiteSettings = typeof siteSettings.$inferSelect;
export type User = typeof users.$inferSelect;
