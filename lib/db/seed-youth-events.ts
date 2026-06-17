import { config } from 'dotenv';
config({ path: '.env.local' });

// Seeds the 2026 Youth Ministry calendar (from the church's Youth Calendar of
// Events 2026). Idempotent: it removes any existing rows with the same titles
// before inserting, so it can be re-run safely without creating duplicates.
//
// Every event uses the built-in `youth` photo as a placeholder — replace each
// with a real image in the admin Events editor when available.
//
// Run with:  npx tsx lib/db/seed-youth-events.ts

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

type YouthEvent = {
  date: [year: number, month: number, day: number]; // month is 1-based
  category: string;
  title: string;
  description: string;
  time?: string;
  featured?: boolean;
};

// Single-occurrence events from the 2026 youth calendar. (The year-round
// "Sundays 9 AM — Youth Sunday School" is a recurring item, not a dated event,
// so it lives in the weekly schedule rather than the calendar.)
const YOUTH_EVENTS: YouthEvent[] = [
  { date: [2026, 1, 18],  category: 'Youth',         title: 'Youth Devotion',                          description: 'Scripture and prayer with our young people.' },
  { date: [2026, 2, 1],   category: 'Black History', title: 'Sunday School Round-Up & Moment in Black History', description: 'Sunday School round-up and our first Moment in Black History.' },
  { date: [2026, 2, 8],   category: 'Black History', title: 'Moment in Black History',                 description: 'A weekly Moment in Black History during February.' },
  { date: [2026, 2, 15],  category: 'Youth',         title: 'Youth Devotion & Moment in Black History', description: 'Scripture and prayer, plus our Moment in Black History.' },
  { date: [2026, 2, 22],  category: 'Black History', title: 'Moment in Black History',                 description: 'A weekly Moment in Black History during February.' },
  { date: [2026, 3, 14],  category: 'Leadership',    title: 'Youth Leadership Team Meeting',           description: 'Planning and training for our youth leadership team.', time: '12:00 p.m.' },
  { date: [2026, 3, 15],  category: 'Youth',         title: 'Youth Devotion',                          description: 'Scripture and prayer with our young people.' },
  { date: [2026, 3, 21],  category: 'Summit',        title: 'Youth Summit',                            description: 'Theme: "Do you honestly know who you are truthfully serving and identifying with: Christ or Satan?" — Romans 3:23; Hebrews 9:27; Matthew 25:31–46; Titus 3:4–7; John 14:6.', featured: true },
  { date: [2026, 4, 19],  category: 'Youth',         title: 'Youth Devotion',                          description: 'Scripture and prayer with our young people.' },
  { date: [2026, 5, 17],  category: 'Youth',         title: 'Youth Devotion',                          description: 'Scripture and prayer with our young people.' },
  { date: [2026, 6, 5],   category: 'Fellowship',    title: 'Youth Lock-In',                           description: 'Overnight lock-in — Friday 6:00 p.m. through Saturday 6:00 a.m.', time: 'Fri 6:00 p.m. – Sat 6:00 a.m.' },
  { date: [2026, 6, 21],  category: 'Youth',         title: 'Youth Devotion',                          description: 'Scripture and prayer with our young people.' },
  { date: [2026, 7, 6],   category: 'VBS',           title: 'Vacation Bible School',                   description: 'July 6–10. Motto: "I’m Hooked! Reeled in to Serve God" — Matthew 4:19.', time: '8:30 a.m. – 12:00 p.m.', featured: true },
  { date: [2026, 7, 6],   category: 'Camp',          title: '"Youth in Christ" Summer Camp',           description: 'July 6–17. Includes VBS, enrichment activities, trips, and community service.', time: '8:00 a.m. – 4:30 p.m.' },
  { date: [2026, 7, 19],  category: 'Youth',         title: 'Youth Devotion',                          description: 'Scripture and prayer with our young people.' },
  { date: [2026, 7, 26],  category: 'Conference',    title: 'LHFMBC Annual Session',                   description: 'LHFMBC, Inc. Annual Session — Congress of Christian Education Auxiliary (Children and Youth). July 26–29.' },
  { date: [2026, 8, 16],  category: 'Youth',         title: 'Youth Devotion',                          description: 'Scripture and prayer with our young people.' },
  { date: [2026, 9, 20],  category: 'Youth',         title: 'Youth Devotion',                          description: 'Scripture and prayer with our young people.' },
  { date: [2026, 10, 18], category: 'Youth',         title: 'Youth Devotion',                          description: 'Scripture and prayer with our young people.' },
  { date: [2026, 11, 15], category: 'Youth',         title: 'Youth Devotion',                          description: 'Scripture and prayer with our young people.' },
  { date: [2026, 11, 24], category: 'Outreach',      title: 'Community Service Day for Thanksgiving',  description: 'Serving our neighbors together for Thanksgiving.' },
  { date: [2026, 12, 20], category: 'Youth',         title: 'Youth Christmas Celebration',             description: 'Youth devotion, Christmas program, and youth Christmas fellowship.' },
  { date: [2026, 12, 22], category: 'Outreach',      title: 'Community Service Day for Christmas',     description: 'Serving our neighbors together for Christmas.' },
];

async function run() {
  const { db } = await import('./index');
  const { events } = await import('./schema');
  const { inArray } = await import('drizzle-orm');

  console.log(`🌱 Seeding ${YOUTH_EVENTS.length} youth events...`);

  const titles = Array.from(new Set(YOUTH_EVENTS.map((e) => e.title)));
  // Idempotent: clear any prior rows with these titles before re-inserting.
  await db.delete(events).where(inArray(events.title, titles));

  const rows = YOUTH_EVENTS.map((e, i) => {
    const [y, m, d] = e.date;
    // Noon local time so a timezone offset can never roll the date backward.
    const date = new Date(y, m - 1, d, 12, 0, 0);
    return {
      title: e.title,
      category: e.category,
      description: e.description,
      date,
      day: String(d),
      month: MONTHS[m - 1],
      time: e.time ?? '',
      location: 'True Light Baptist Church',
      photo: 'youth', // placeholder — replace per-event in the admin
      featured: e.featured ?? false,
      published: true,
      sort: i,
    };
  });

  await db.insert(events).values(rows);
  console.log(`✅ Inserted ${rows.length} youth events (placeholder photo: "youth").`);
  process.exit(0);
}

run().catch((err) => {
  console.error('❌ Youth events seed failed:', err);
  process.exit(1);
});
