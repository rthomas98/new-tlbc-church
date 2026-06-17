import { config } from 'dotenv';
config({ path: '.env.local' });

// Adds the 2026 Children & Youth Ministry mission statement to the youth and
// kids ministry pages. Idempotent: skips a page if the mission is already the
// opening paragraph. Run after the base seed.
//
//   npx tsx lib/db/seed-mission.ts

const MISSION = [
  'Our mission is to train our children and youth to humbly obey God, love the Lord, boldly share the Gospel of Jesus Christ, and commit themselves to meeting the needs of others.',
  'We focus on Bible teaching and learning through discipleship, evangelism, and fellowship.',
];

async function run() {
  const { db } = await import('./index');
  const { ministryPages } = await import('./schema');
  const { eq } = await import('drizzle-orm');

  for (const slug of ['youth', 'kids']) {
    const [row] = await db.select().from(ministryPages).where(eq(ministryPages.slug, slug));
    if (!row) {
      console.log(`${slug}: page not found, skipping`);
      continue;
    }
    const existing: string[] = Array.isArray(row.description) ? (row.description as string[]) : [];
    if (existing[0]?.startsWith('Our mission is to train our children and youth')) {
      console.log(`${slug}: mission already present, skipping`);
      continue;
    }
    const next = [...MISSION, ...existing];
    await db.update(ministryPages).set({ description: next }).where(eq(ministryPages.id, row.id));
    console.log(`${slug}: prepended mission (now ${next.length} paragraphs)`);
  }
  process.exit(0);
}

run().catch((err) => {
  console.error('❌ Mission seed failed:', err);
  process.exit(1);
});
