import { config } from 'dotenv';
config({ path: '.env.local' });

import bcrypt from 'bcryptjs';

// Bootstrap admin credentials. Prefer environment variables; fall back to dev
// defaults for local seeding only (with a warning). In any shared/production
// seed, set SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD and rotate after first login.
const ADMIN_EMAIL = process.env.SEED_ADMIN_EMAIL || 'admin@truelightbr.org';
const ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD || 'TrueLight2025!';

if (!process.env.SEED_ADMIN_PASSWORD) {
  console.warn(
    '⚠️  Seeding with the default DEV admin password. Set SEED_ADMIN_PASSWORD in the environment before seeding any shared/production database, and rotate it after first login.',
  );
}

async function seed() {
  // Imported after env is loaded so the pool sees DATABASE_URL.
  const { db } = await import('./index');
  const {
    users, siteSettings, events, services, ministries, testimonials,
    sermons, leaders, beliefs, givingFunds, givingMethods, ministryPages, announcements,
  } = await import('./schema');
  const { MINISTRIES } = await import('../ministries');

  console.log('🌱 Seeding database...');

  // --- Admin user ---
  const existing = await db.query.users.findFirst();
  if (!existing) {
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
    await db.insert(users).values({
      email: ADMIN_EMAIL,
      passwordHash,
      name: 'Church Admin',
      role: 'admin',
    });
    console.log(`✅ Admin user created: ${ADMIN_EMAIL} / ${ADMIN_PASSWORD}`);
  } else {
    console.log('ℹ️  Users already exist, skipping admin creation.');
  }

  // --- Site settings (singleton) ---
  await db.delete(siteSettings);
  await db.insert(siteSettings).values({
    address: '3836 North Street, Baton Rouge, LA',
    phone: '(225) 555-0149',
    email: 'info@truelightbaptist.org',
    livestreamUrl: 'https://www.facebook.com/truelightbr/live',
    facebookUrl: 'https://www.facebook.com/truelightbr',
    instagramUrl: '',
    youtubeUrl: '',
    marqueeText: 'Sunday Worship 10:00 a.m. · Bible Study 9:00 a.m. · Wednesday Prayer 6:30 p.m.',
  });

  // --- Events ---
  await db.delete(events);
  await db.insert(events).values([
    {
      day: '17', month: 'May', category: 'Revival',
      title: 'Spring Revival · Three Nights of Worship',
      description: 'A three-night revival with guest preaching, special music, and prayer ministry each evening.',
      location: 'Sanctuary', time: '7:00 p.m.', photo: 'eventRevival', featured: true, sort: 0,
    },
    {
      day: '24', month: 'May', category: 'Community',
      title: 'Community Food Drive',
      description: 'Partner with our outreach team to serve neighbors in North Baton Rouge.',
      location: 'Fellowship Hall', time: '9:00 a.m.', photo: 'eventFoodDrive', sort: 1,
    },
    {
      day: '07', month: 'Jun', category: 'Youth',
      title: 'Youth Summer Kickoff',
      description: 'Pizza, Bible games, and worship for grades 6–12. Bring a friend.',
      location: 'Youth Wing', time: '6:30 p.m.', photo: 'eventYouthKickoff', sort: 2,
    },
  ]);

  // --- Services ---
  await db.delete(services);
  await db.insert(services).values([
    {
      tag: 'Sunday', time: '10:00 a.m.', name: 'Morning Worship',
      description: "Spirit-led praise, scripture-rooted teaching, and the Lord's table together.",
      photo: 'serviceWorship', sort: 0,
    },
    {
      tag: 'Sunday', time: '9:00 a.m.', name: 'Bible Study',
      description: "Verse-by-verse study for all ages — adult, youth, and children's classes.",
      photo: 'serviceBibleStudy', sort: 1,
    },
    {
      tag: 'Wednesday', time: '6:30 p.m.', name: 'Prayer & Teaching',
      description: 'Mid-week gathering for prayer, intercession, and a short word from the pastor.',
      photo: 'servicePrayer', sort: 2,
    },
  ]);

  // --- Ministries (homepage cards) ---
  await db.delete(ministries);
  await db.insert(ministries).values([
    { name: "Children's", groupName: 'Youth & Kids', size: 'Ages 4–10', day: 'Sundays', photo: 'familyCommunity', tag: 'Sunday School', sort: 0 },
    { name: 'Youth', groupName: 'Youth & Kids', size: 'Grades 6–12', day: 'Sundays', photo: 'youth', tag: 'Bible Study', tagBlue: true, sort: 1 },
    { name: "Women's", groupName: 'Adults', size: 'All ages', day: 'Monthly', photo: 'women', tag: 'Fellowship', sort: 2 },
    { name: "Men's", groupName: 'Adults', size: 'All ages', day: 'Saturdays', photo: 'men', tag: 'Breakfast', tagBlue: true, sort: 3 },
    { name: 'Music & Worship', groupName: 'Worship', size: 'Choir & Praise', day: 'Wednesdays', photo: 'worship', tag: 'Choir', sort: 4 },
    { name: 'Prayer Team', groupName: 'Adults', size: 'Daily prayer', day: 'Daily', photo: 'prayerTeam', tag: 'Intercession', tagBlue: true, sort: 5 },
    { name: 'Community Care', groupName: 'Outreach', size: 'Visitation', day: 'Weekly', photo: 'communityCare', tag: 'Outreach', sort: 6 },
    { name: 'Outreach', groupName: 'Outreach', size: 'Baton Rouge', day: 'Monthly', photo: 'communityYouth', tag: 'Service', tagBlue: true, sort: 7 },
  ]);

  // --- Testimonials ---
  await db.delete(testimonials);
  await db.insert(testimonials).values([
    {
      quote: "True Light has been our home for 22 years. Pastor Hebert baptized our children — and now they're being baptized by him too. This is family.",
      name: 'The Hayes Family', role: 'Members since 2003', initials: 'TH', sort: 0,
    },
    {
      quote: "I came in broken and was met with prayer, scripture, and grace. The Lord did the rest. I haven't missed a Sunday since.",
      name: 'Marcus J.', role: 'Saved at True Light, 2022', initials: 'MJ', sort: 1,
    },
    {
      quote: "The youth ministry gave my son a place to belong, to ask hard questions, and to know Jesus for himself. Worth every Sunday morning.",
      name: 'Denise W.', role: 'Mom of two · Volunteer', initials: 'DW', sort: 2,
    },
  ]);

  // --- Sermons / live services ---
  await db.delete(sermons);
  await db.insert(sermons).values([
    { title: 'Sunday Worship', schedule: 'Sundays · 10:00 a.m. CT', icon: 'CalendarDays', description: 'Join the sanctuary gathering live on Facebook for worship, prayer, preaching, and fellowship.', sort: 0 },
    { title: 'Wednesday Bible Study', schedule: 'Wednesdays · Bible Study', icon: 'BookOpen', description: 'Follow along live on Facebook as the church gathers midweek for Bible teaching and prayer.', sort: 1 },
  ]);

  // --- Leaders ---
  await db.delete(leaders);
  await db.insert(leaders).values([
    { name: 'Pastor Dennis R. Hebert Sr.', role: 'Senior Pastor', org: 'True Light Baptist Church', photo: 'pastor', sort: 0 },
    { name: 'Associate Ministry Team', role: 'Discipleship & Care', org: 'Pastoral support', photo: 'leadership', sort: 1 },
    { name: 'Worship Ministry Team', role: 'Worship & Music', org: 'Choir and praise', photo: 'worship', sort: 2 },
    { name: 'Youth Ministry Team', role: 'Youth Ministry', org: 'Students 6-12', photo: 'youth', sort: 3 },
    { name: "Children's Ministry Team", role: "Children's Ministry", org: 'Birth-5th grade', photo: 'kids', sort: 4 },
    { name: 'Deacon Ministry', role: 'Service & Care', org: 'Member care', photo: 'leadership', sort: 5 },
  ]);

  // --- Beliefs ---
  await db.delete(beliefs);
  await db.insert(beliefs).values([
    { title: 'Scripture', icon: 'BookOpen', description: 'The Bible is the inspired, inerrant Word of God — our final authority for faith and practice.', sort: 0 },
    { title: 'Jesus Christ', icon: 'Cross', description: 'Fully God and fully man, crucified for our sins, raised on the third day, returning in glory.', sort: 1 },
    { title: 'Salvation', icon: 'Heart', description: 'By grace alone, through faith alone, in Christ alone — a free gift, never earned.', sort: 2 },
    { title: 'The Church', icon: 'Users', description: 'A covenant family of believers committed to worship, witness, and one another.', sort: 3 },
    { title: 'Baptism', icon: 'Droplet', description: "Believer's baptism by immersion as a public confession of saving faith in Christ.", sort: 4 },
    { title: 'The Spirit', icon: 'Flame', description: 'God indwells every believer, empowering us for holiness, witness, and gospel work.', sort: 5 },
  ]);

  // --- Giving funds ---
  await db.delete(givingFunds);
  await db.insert(givingFunds).values([
    { title: 'General Fund', description: 'Sunday worship, staff, building, programs — the day-to-day life of the church.', color: '#A02319', pct: 64, sort: 0 },
    { title: 'Missions', description: 'Local outreach in Baton Rouge plus partner work in Haiti, Kenya, and Honduras.', color: '#4FA1C6', pct: 22, sort: 1 },
    { title: 'Building & Repair', description: "The brick sanctuary turns 70 next year. We're saving for the roof and HVAC.", color: '#1E1E1E', pct: 14, sort: 2 },
  ]);

  // --- Giving methods ---
  await db.delete(givingMethods);
  await db.insert(givingMethods).values([
    { title: 'Online', description: 'One-time or recurring · debit, credit, ACH', icon: 'Globe', sort: 0 },
    { title: 'Text', description: 'Text GIVE to (225) 555-4483', icon: 'Phone', sort: 1 },
    { title: 'In Person', description: 'Offering plate · Sunday at 10 a.m.', icon: 'Hand', sort: 2 },
    { title: 'By Mail', description: 'TLBC · 3836 North Street · Baton Rouge, LA 70806', icon: 'Mail', sort: 3 },
    { title: 'Planned Giving', description: 'Bequests, stock, IRA distributions — talk to our finance team', icon: 'FileText', sort: 4 },
  ]);

  // --- Ministry detail pages ---
  await db.delete(ministryPages);
  await db.insert(ministryPages).values(
    MINISTRIES.map((m, i) => ({
      slug: m.slug,
      name: m.name,
      sub: m.sub,
      tagline: m.tagline,
      hero: m.hero,
      ages: m.ages,
      schedule: m.schedule,
      location: m.location,
      leader: m.leader,
      leaderRole: m.leaderRole,
      description: m.description,
      expectations: m.expectations,
      scripture: m.scripture,
      sort: i,
    })),
  );

  // --- Announcement bar (example, switched OFF by default) ---
  await db.delete(announcements);
  await db.insert(announcements).values({
    message: 'Join us this Sunday at 10:00 a.m. for worship — all are welcome!',
    linkLabel: 'Plan your visit',
    linkUrl: '/connect',
    variant: 'info',
    dismissible: true,
    published: false,
    sort: 0,
  });

  console.log('✅ Seed complete.');
  process.exit(0);
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});
