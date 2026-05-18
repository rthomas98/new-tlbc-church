export type Ministry = {
  slug:        string;
  name:        string;
  sub:         string;
  tagline:     string;
  hero:        string;
  ages:        string;
  schedule:    string;
  location:    string;
  leader:      string;
  leaderRole:  string;
  description: string[];
  expectations: { title: string; body: string }[];
  scripture:   { quote: string; ref: string };
};

export const MINISTRIES: Ministry[] = [
  {
    slug: 'outreach',
    name: 'Outreach',
    sub: 'Community & Service',
    tagline: 'Loving Baton Rouge in word and deed.',
    hero: '/uploads/generated/community-youth-outreach.png',
    ages: 'All ages welcome',
    schedule: 'Monthly · 2nd Saturday',
    location: 'Throughout Baton Rouge',
    leader: 'Dwayne & Latisha Foster',
    leaderRole: 'Outreach Coordinators',
    description: [
      "Outreach is the heartbeat of True Light beyond our walls. We partner with shelters, schools, and neighborhoods across Baton Rouge to feed, clothe, tutor, and pray for our city.",
      "Every second Saturday, our teams gather to serve at one of our partner sites — food pantries in North Baton Rouge, the women's shelter on Plank Road, the Wednesday tutoring program at McKinley Middle, or the back-to-school giveaway. No experience needed, just a willing heart.",
    ],
    expectations: [
      { title: 'Show up Saturday morning', body: '8:30 a.m. coffee and prayer in the Fellowship Hall, on the road by 9 a.m. Wear comfortable clothes and closed-toe shoes.' },
      { title: 'Serve as a team',           body: 'You\'ll be paired with experienced volunteers — never alone. Most outings wrap by noon.' },
      { title: 'Bring your kids',           body: 'Many of our service days have age-appropriate roles for children 8+ accompanied by a parent.' },
      { title: 'Help us plan',              body: 'If you have a heart for a specific population — seniors, the unhoused, foster families — we want your voice on the planning team.' },
    ],
    scripture: { quote: 'Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress…', ref: 'James 1:27' },
  },
  {
    slug: 'worship',
    name: 'Worship',
    sub: 'Choir & Praise Team',
    tagline: 'Lifting His name with voice and instrument.',
    hero: '/uploads/generated/worship-hero.png',
    ages: 'All voices welcome',
    schedule: 'Wednesdays · 7:30 p.m.',
    location: 'Sanctuary',
    leader: 'Renée Adekunle',
    leaderRole: 'Worship Director',
    description: [
      "Our worship ministry exists to lead the congregation into the presence of God on Sunday mornings and at every gathering of the church. We sing the old hymns, we sing the new songs, and we sing with our whole hearts.",
      "Rehearsals are Wednesday at 7:30 p.m. — choir, praise team, and instrumentalists. You don't need to be a trained vocalist to join the choir; you need a love for the Lord and a willingness to learn. We also welcome musicians on keys, bass, guitar, and drums.",
    ],
    expectations: [
      { title: 'A short audition',  body: 'Stop in any Wednesday and Renée will hear a few measures with you. It\'s low-pressure — we\'re placing you in the right section, not evaluating you.' },
      { title: 'Weekly rehearsals', body: '90 minutes on Wednesday nights, plus a 30-minute warmup before Sunday service.' },
      { title: 'Quarterly specials', body: 'Christmas Cantata, Easter Sunrise, Mother\'s Day Celebration, and our Revival nights — extra rehearsals leading up to those.' },
      { title: 'Spiritual formation', body: 'We open and close each rehearsal in the Word and prayer. This is a ministry first, a music team second.' },
    ],
    scripture: { quote: 'Sing to the Lord a new song, his praise from the ends of the earth…', ref: 'Isaiah 42:10' },
  },
  {
    slug: 'leadership',
    name: 'Leadership',
    sub: 'Men of True Light',
    tagline: 'Iron sharpening iron in a band of brothers.',
    hero: '/uploads/generated/leadership-fellowship.png',
    ages: 'Men, all ages',
    schedule: 'Saturday · 7 a.m. (1st & 3rd)',
    location: 'Fellowship Hall',
    leader: 'Marcus Trent',
    leaderRole: 'Associate Pastor',
    description: [
      "Men of True Light is our biweekly breakfast and brotherhood meeting. We come together to open the Word, share what's going on in our lives, and hold each other accountable as husbands, fathers, sons, and disciples of Christ.",
      "First and third Saturdays at 7 a.m. — a hot breakfast is on the table, the Word is on the screen, and the conversations are real. Single, married, divorced, widowed — every man is welcome at this table.",
    ],
    expectations: [
      { title: 'Just show up',     body: 'No book to buy, no reading to prepare. The first visit is on the house.' },
      { title: 'Real conversation', body: 'We don\'t do small talk. Expect questions about how you\'re actually doing — and bring the same curiosity for the man across from you.' },
      { title: 'Service projects',  body: 'Once a quarter the men handle a building project, a widow\'s yardwork, or an outreach event together.' },
      { title: 'Annual retreat',    body: 'Every September we head out of town for a weekend of teaching, recreation, and prayer.' },
    ],
    scripture: { quote: 'As iron sharpens iron, so one person sharpens another.', ref: 'Proverbs 27:17' },
  },
  {
    slug: 'life-groups',
    name: 'Life Groups',
    sub: 'Women in the Word',
    tagline: 'Walking through Scripture together.',
    hero: '/uploads/generated/women-bible-study.png',
    ages: 'Women, all seasons of life',
    schedule: 'Thursdays · 9:30 a.m.',
    location: 'Room 204 + homes around the city',
    leader: 'Joyce Hampton',
    leaderRole: "Women's Ministry Director",
    description: [
      "Women in the Word is our flagship women's ministry — a verse-by-verse study that gathers Thursday mornings in Room 204, with smaller life groups meeting in homes around the city throughout the week.",
      "We are working through the book of John this fall, the Psalms in the winter, and a topical study on biblical womanhood in the spring. Childcare is provided for the Thursday morning gathering for kids under 5.",
    ],
    expectations: [
      { title: 'A study guide',        body: 'You\'ll be given the current study guide on your first visit. Reading ahead is encouraged but not required.' },
      { title: 'Small group discussion', body: 'After the teaching, we break into groups of 6-8 to talk through the application of the passage.' },
      { title: 'Childcare provided',   body: 'Free childcare for ages 0-5 on Thursday mornings. Please pre-register so we can plan staff.' },
      { title: 'Life groups in homes', body: 'Many women extend the study into a weekly evening life group hosted in homes across Baton Rouge.' },
    ],
    scripture: { quote: 'Older women… are to teach what is good, and so train the young women…', ref: 'Titus 2:3-4' },
  },
  {
    slug: 'youth',
    name: 'Youth',
    sub: 'Grades 6 – 12',
    tagline: 'Wholehearted faith in the middle and high school years.',
    hero: '/uploads/generated/youth-bible-study.png',
    ages: '6th – 12th grade',
    schedule: 'Wednesdays · 6:30 p.m.',
    location: 'Youth Wing (2nd floor)',
    leader: 'David Okafor',
    leaderRole: 'Youth Pastor',
    description: [
      "True Light Youth is where middle and high school students find belonging, ask honest questions about the faith, and grow into wholehearted followers of Jesus.",
      "Wednesday nights are our anchor: dinner at 6:30, teaching at 7, small groups by grade and gender at 7:45. We also run a summer camp in late July and weekly summer hangouts at the park, pool, or sports court.",
    ],
    expectations: [
      { title: 'Dinner is on us',     body: 'Wednesday gathering starts with a free meal — students should never come hungry.' },
      { title: 'Teaching that respects students', body: 'Pastor David teaches the Word seriously and doesn\'t talk down to teenagers.' },
      { title: 'Small groups by grade', body: 'Boys and girls split into grade-banded groups for the second half of the night.' },
      { title: 'Camp + retreats',     body: 'Summer camp in July, fall retreat in October, and a winter ski trip every other year.' },
    ],
    scripture: { quote: "Don't let anyone look down on you because you are young, but set an example for the believers…", ref: '1 Timothy 4:12' },
  },
  {
    slug: 'kids',
    name: 'Kids',
    sub: 'Birth – 5th grade',
    tagline: 'Where the Gospel meets every age.',
    hero: '/uploads/generated/children-family-community.png',
    ages: 'Birth – 5th grade',
    schedule: 'Sundays · 9 a.m. & 10 a.m.',
    location: 'Children\'s Wing (1st floor)',
    leader: 'Joyce Hampton',
    leaderRole: "Children's Ministry Director",
    description: [
      "True Light Kids is our Sunday morning ministry for children from infancy through 5th grade. We believe children aren't the church of tomorrow — they're the church of today, and they need the same Gospel adults need, taught at their level.",
      "We run age-graded classes during the 9 a.m. Sunday School hour and the 10 a.m. worship service, plus a Wednesday evening kids' program during the school year that runs concurrently with our youth ministry.",
    ],
    expectations: [
      { title: 'Secure check-in',  body: 'Parents check in at the Kids Welcome Desk and receive a matching tag for pickup.' },
      { title: 'Bible-based curriculum', body: 'We use The Gospel Project — a Christ-centered, gospel-saturated curriculum that walks kids through the whole Bible over 3 years.' },
      { title: 'Trained volunteers', body: 'Every volunteer is background-checked, trained, and serving in pairs at all times.' },
      { title: 'Family events',    body: 'Family Fall Festival in October, Easter egg hunt, VBS in June, and the Children\'s Christmas Pageant in December.' },
    ],
    scripture: { quote: 'Jesus said, "Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these."', ref: 'Matthew 19:14' },
  },
];

export function getMinistryBySlug(slug: string): Ministry | undefined {
  return MINISTRIES.find(m => m.slug === slug);
}
