/* Sub-page renderers for About / Ministries / Watch / Events / Connect / Give / Members */

/* Photo: prompt-aware gradient placeholder. theme: warm | dark | blue | cream */
function Photo({ prompt = '', theme = 'warm', w = 800, h = 600 }) {
  const themes = {
    warm: ['#A02319','#5C120F','#1E1E1E'],
    dark: ['#2A1310','#0E0908','#000'],
    blue: ['#28486B','#1B3046','#0E1820'],
    cream: ['#E8DDC4','#C9B98F','#7A6948'],
  };
  const c = themes[theme] || themes.warm;
  const seed = (prompt.length * 7) % 360;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid slice" style={{width:'100%',height:'100%',display:'block'}} aria-hidden="true">
      <defs>
        <linearGradient id={`pg${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c[0]}/>
          <stop offset="60%" stopColor={c[1]}/>
          <stop offset="100%" stopColor={c[2]}/>
        </linearGradient>
        <radialGradient id={`pl${seed}`} cx="30%" cy="25%" r="60%">
          <stop offset="0%" stopColor="rgba(255,235,200,0.32)"/>
          <stop offset="60%" stopColor="rgba(255,235,200,0)"/>
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill={`url(#pg${seed})`}/>
      <rect width={w} height={h} fill={`url(#pl${seed})`}/>
      <g opacity="0.10" fill="#F4F1EC">
        <circle cx={w*0.78} cy={h*0.28} r={Math.min(w,h)*0.22}/>
        <rect x={w*0.06} y={h*0.62} width={w*0.42} height={h*0.04} rx="2"/>
        <rect x={w*0.06} y={h*0.7} width={w*0.28} height={h*0.025} rx="2"/>
      </g>
    </svg>
  );
}

const _Chev = (
  <svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
    <path d="M0 0 L120 0 L80 80 L120 160 L0 160 L40 80 Z" fill="rgba(244,241,236,0.06)"/>
    <path d="M40 24 L100 24 L78 80 L100 136 L40 136 L62 80 Z" fill="rgba(244,241,236,0.10)"/>
  </svg>
);

function Crumb({ here }) {
  return (
    <p className="crumb">
      <a href="Homepage.html">Home</a><span>›</span>{here}
    </p>
  );
}

/* ─── 1. ABOUT — editorial cover ─── */
function HeroAbout() {
  return (
    <section className="h-about">
      <div className="h-about__band" aria-hidden="true">
        {Array.from({length:2}).map((_,k)=>(
          <span key={k}>EST · 1941 — BAPTIST — BATON ROUGE — A CHURCH FAMILY — </span>
        ))}
      </div>
      <div className="h-about__grid">
        <div className="h-about__copy">
          <Crumb here="About"/>
          <p className="h-about__pre">A True Light history</p>
          <h1 className="h-about__title">
            Since <em>1941.</em><br/>
            The same gospel,<br/>
            told plainly.
          </h1>
          <p className="h-about__lead">A Baptist church on Government Street — gathered around scripture, devoted to one another, sent into Baton Rouge.</p>
          <ul className="h-about__pillars">
            <li><strong>620+</strong><span>members today</span></li>
            <li><strong>3</strong><span>generations served</span></li>
            <li><strong>27 yrs</strong><span>same senior pastor</span></li>
          </ul>
        </div>
        <figure className="h-about__visual">
          <div className="h-about__photo">
            <Photo prompt="Archival 1940s Baptist congregation gathered on church steps Baton Rouge" theme="warm" w={520} h={680}/>
          </div>
          <figcaption>North Boulevard Chapel · ca. 1948 · From the church archives</figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ─── 2. MINISTRIES — tile mosaic ─── */
function HeroMinistries() {
  const tiles = [
    ['baby','Children','#A02319'],['users','Youth','#28486B'],['coffee','Young Adults','#7A1A16'],
    ['briefcase','Men','#1E1E1E'],['book-open','Women','#A02319'],['sun','Seniors','#28486B'],
    ['music','Music','#7A1A16'],['globe','Missions','#1E1E1E'],['heart','Care','#A02319'],
  ];
  return (
    <section className="h-min">
      <div className="h-min__copy">
        <Crumb here="Ministries"/>
        <p className="eyebrow">Ministries · Find your people</p>
        <h1 className="h-min__title">Nine on-ramps.<br/><em>One family.</em></h1>
        <p className="h-min__lead">A ministry for every season — childhood through retirement, single or married, quiet listener or front-row leader.</p>
        <a href="#groups" className="h-min__cta">Browse all <i data-lucide="arrow-down" className="ic"></i></a>
      </div>
      <div className="h-min__mosaic">
        {tiles.map(([ic,n,c],i)=>(
          <div key={n} className="h-min__tile" style={{background:c}}>
            <i data-lucide={ic} className="ic"></i>
            <span>{n}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── 3. WATCH — cinematic full-bleed ─── */
function HeroWatch() {
  return (
    <section className="h-watch">
      <div className="h-watch__bg">
        <Photo prompt="Baptist sanctuary interior dim warm light cinematic stained glass" theme="dark" w={1920} h={900}/>
      </div>
      <div className="h-watch__scrim"></div>
      <div className="h-watch__inner">
        <Crumb here="Watch"/>
        <span className="h-watch__pill"><span className="dot"></span>ON AIR · SUNDAY · 10 a.m. CT</span>
        <h1 className="h-watch__title">
          <span>Anchored.</span>
          <em>Live every Sunday.</em>
        </h1>
        <p className="h-watch__lead">Worship streamed from the brick sanctuary on Government Street — and a five-year archive that travels with you.</p>
        <div className="h-watch__bar">
          <span><strong>247</strong>sermons archived</span>
          <em></em>
          <span><strong>5&nbsp;yrs</strong>continuous broadcast</span>
          <em></em>
          <span><strong>42&nbsp;min</strong>avg service length</span>
        </div>
      </div>
    </section>
  );
}

/* ─── 4. EVENTS — date-monogram + ticker ─── */
function HeroEvents() {
  const dates = ['Nov 12 · Thanksgiving Dinner','Nov 17 · Membership Class','Nov 22 · Men\'s Breakfast','Dec 06 · Choir Rehearsal','Dec 14 · Children\'s Pageant','Dec 24 · Christmas Eve Candlelight'];
  return (
    <section className="h-evt">
      <div className="h-evt__monogram" aria-hidden="true">NOV<br/>2025</div>
      <div className="h-evt__inner">
        <Crumb here="Events"/>
        <p className="eyebrow">Events &amp; Calendar</p>
        <h1 className="h-evt__title">Gather. Grow. <em>Go.</em></h1>
        <p className="h-evt__lead">Sunday is where it begins — but the life of the church is woven through every meal, midweek service, and mission. Here's what's next.</p>
      </div>
      <div className="h-evt__ticker">
        <div className="h-evt__ticker-track">
          {dates.concat(dates).map((s,i)=>(
            <span key={i}><i data-lucide="calendar" className="ic"></i>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 5. CONNECT — map split ─── */
function HeroConnect() {
  return (
    <section className="h-cn">
      <div className="h-cn__copy">
        <Crumb here="Connect"/>
        <p className="eyebrow">Hi — we're glad you're here.</p>
        <h1 className="h-cn__title">Come as you are.<br/><em>We'll meet you there.</em></h1>
        <p className="h-cn__lead">Brand new, returning, or ready for the next step — start anywhere on this page. A pastor will reply within 48 hours.</p>
        <dl className="h-cn__addr">
          <div><dt>Sunday</dt><dd>10 a.m. · Coffee from 9:30</dd></div>
          <div><dt>Address</dt><dd>4928 Government St · Baton Rouge, LA 70806</dd></div>
          <div><dt>Phone</dt><dd>(225) 555-0140 · Mon–Thu, 9–4</dd></div>
        </dl>
      </div>
      <div className="h-cn__map" aria-hidden="true">
        <svg viewBox="0 0 480 600" preserveAspectRatio="xMidYMid slice">
          <rect width="480" height="600" fill="#F4F1EC"/>
          <g stroke="rgba(160,35,25,0.16)" strokeWidth="1" fill="none">
            <path d="M0 80 Q240 110 480 70"/><path d="M0 170 Q260 200 480 160"/>
            <path d="M0 260 L480 240"/><path d="M0 350 Q240 380 480 330"/>
            <path d="M0 440 L480 420"/><path d="M0 530 Q260 560 480 510"/>
            <path d="M80 0 L100 600"/><path d="M180 0 L210 600"/>
            <path d="M280 0 L320 600"/><path d="M380 0 L410 600"/>
          </g>
          <g stroke="rgba(40,72,107,0.20)" strokeWidth="2" fill="none" strokeDasharray="4 6">
            <path d="M0 300 Q260 320 480 290"/>
          </g>
          <text x="20" y="296" fontFamily="serif" fontSize="11" fill="#28486B" letterSpacing="1.6">GOVERNMENT ST</text>
          <circle cx="260" cy="304" r="14" fill="#A02319"/>
          <circle cx="260" cy="304" r="26" fill="none" stroke="#A02319" strokeWidth="1.5" opacity="0.5"/>
          <circle cx="260" cy="304" r="42" fill="none" stroke="#A02319" strokeWidth="1" opacity="0.25"/>
          <line x1="260" y1="304" x2="305" y2="280" stroke="#1E1E1E" strokeWidth="1"/>
          <text x="310" y="278" fontFamily="serif" fontSize="15" fontWeight="700" fill="#1E1E1E">True Light</text>
          <text x="310" y="296" fontFamily="sans-serif" fontSize="10" fill="#5C120F" letterSpacing="0.6">4928 GOVERNMENT ST</text>
        </svg>
      </div>
    </section>
  );
}

/* ─── 6. GIVE — type-driven ─── */
function HeroGive() {
  return (
    <section className="h-give">
      <div className="h-give__inner">
        <Crumb here="Give"/>
        <p className="eyebrow eyebrow--cream">Stewardship at True Light</p>
        <div className="h-give__type">
          <span className="h-give__pct">100<small>%</small></span>
          <div className="h-give__rh">
            <span>of every dollar</span>
            <em>to ministry.</em>
          </div>
        </div>
        <p className="h-give__lead">Zero overhead taken from the offering. Every gift goes where God is moving — Sunday-by-Sunday, here at home, and across the world.</p>
        <div className="h-give__line">
          <span><strong>84</strong>years of giving</span>
          <span><strong>3</strong>funds open</span>
          <span><strong>4</strong>countries served</span>
          <span><strong>$1.2M</strong>in 2024</span>
        </div>
      </div>
    </section>
  );
}

/* ─── 7. MEMBERS — ID card ─── */
function HeroMembers() {
  return (
    <section className="h-mem">
      <div className="h-mem__inner">
        <div className="h-mem__copy">
          <Crumb here="Members"/>
          <p className="eyebrow eyebrow--cream">Members Portal · v3</p>
          <h1 className="h-mem__title">Welcome back,<br/><em>family.</em></h1>
          <p className="h-mem__lead">Sign in for the directory, RSVPs, giving history, sermon notes, and small-group threads — everything in one place.</p>
        </div>
        <div className="h-mem__card">
          <div className="h-mem__card-corner" aria-hidden="true"></div>
          <div className="h-mem__card-top">
            <img src="assets/logo-white-transparent.png" alt=""/>
            <span>MEMBER · SINCE 2019</span>
          </div>
          <div className="h-mem__card-num">04 · 928 · 1941</div>
          <div className="h-mem__card-name">JESSE ADKINS</div>
          <div className="h-mem__card-meta">
            <div><span>GROUP</span>Mid-City</div>
            <div><span>BAPTIZED</span>2020</div>
            <div><span>SERVING</span>Hospitality</div>
          </div>
          <div className="h-mem__card-strip"></div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── ABOUT ─────────────── */
function PageAbout() {
  return (
    <React.Fragment>
      <HeroAbout/>

      <section className="section section--cream">
        <div className="tl-container">
          <div className="about__grid">
            <div className="about__cell">
              <p className="eyebrow">Our Story</p>
              <h2 className="display" style={{fontSize:'42px',marginTop:'10px'}}>Eighty-four years of faithful witness.</h2>
              <p className="prose">In 1941, fourteen families gathered in a borrowed schoolroom on North Boulevard with a folding table for an altar and a single hymnal. They asked God for a church that would preach His Word plainly and love this city well.</p>
              <p className="prose">Eighty-four years on, we still gather. The schoolroom became a wood-frame chapel, then the brick sanctuary on Government Street where we worship today. The mission hasn't changed.</p>
              <div className="about__stats">
                <div><span>1941</span><small>Founded</small></div>
                <div><span>3</span><small>Generations served</small></div>
                <div><span>620+</span><small>Members today</small></div>
              </div>
            </div>
            <div className="about__visual">
              <Photo prompt="Black and white archival photo of a 1940s Baptist congregation gathered on church steps in Baton Rouge" theme="warm" w={520} h={620} />
              <div className="about__caption">North Boulevard chapel, ca. 1948</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="tl-container">
          <div className="section-head section-head--center" style={{marginBottom:'56px'}}>
            <p className="eyebrow eyebrow--blue">What We Believe</p>
            <h2 className="display" style={{fontSize:'48px'}}>The faith once delivered to the saints.</h2>
            <p className="prose" style={{maxWidth:'620px'}}>We hold to the historic Baptist Faith and Message — the Bible as God's inspired Word, salvation by grace through faith in Jesus Christ alone, and the local church as a covenant family of believers.</p>
          </div>
          <div className="beliefs">
            {[
              ['book-open','Scripture','The Bible is the inspired, inerrant Word of God — our final authority for faith and practice.'],
              ['cross','Jesus Christ','Fully God and fully man, crucified for our sins, raised on the third day, returning in glory.'],
              ['heart','Salvation','By grace alone, through faith alone, in Christ alone — a free gift, never earned.'],
              ['users','The Church','A covenant family of believers committed to worship, witness, and one another.'],
              ['droplet','Baptism','Believer\'s baptism by immersion as a public confession of saving faith in Christ.'],
              ['flame','The Spirit','God indwells every believer, empowering us for holiness, witness, and gospel work.'],
            ].map(([ic,t,d])=>(
              <div className="belief" key={t}>
                <i data-lucide={ic} className="ic"></i>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <p style={{textAlign:'center',marginTop:'40px'}}>
            <a href="#" className="btn btn--ghost-dark">Read our full statement of faith<i data-lucide="arrow-right" className="ic"></i></a>
          </p>
        </div>
      </section>

      <section className="section section--maroon">
        <div className="tl-container">
          <div className="section-head section-head--row">
            <div className="section-head__copy">
              <p className="eyebrow eyebrow--cream">Our Leadership</p>
              <h2 className="display" style={{fontSize:'48px'}}>Pastors, deacons, and faithful servants.</h2>
            </div>
            <p style={{maxWidth:'380px',color:'rgba(244,241,236,0.78)'}}>Our team is small, accountable, and accessible. Every leader is committed to the spiritual care of our congregation.</p>
          </div>
          <div className="leaders">
            {[
              ['Pastor James Whitaker','Senior Pastor','27 years at TLBC'],
              ['Marcus Trent','Associate Pastor','Discipleship & Care'],
              ['Renée Adekunle','Worship Director','Choir & Music'],
              ['David Okafor','Youth Pastor','Students 6–12'],
              ['Joyce Hampton','Children\'s Director','Birth – 5th grade'],
              ['Henry Jackson','Deacon Chair','Member since 1979'],
            ].map(([n,r,m])=>(
              <div className="leader" key={n}>
                <Photo prompt={`Portrait of ${n}, ${r}, warm lighting, Baptist church setting, dignified`} theme="warm" w={300} h={360} />
                <div className="leader__name">{n}</div>
                <div className="leader__role">{r}</div>
                <div className="leader__meta">{m}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner/>
    </React.Fragment>
  );
}

/* ─────────────── MINISTRIES ─────────────── */
function PageMinistries() {
  const groups = [
    {tag:'Family',items:[
      ['Children','Birth – 5th grade','Sunday 9 a.m. & 10 a.m.','baby'],
      ['Youth','6th – 12th grade','Wednesday 6:30 p.m.','users'],
      ['Young Adults','College & 20s','Tuesday 7 p.m.','coffee'],
    ]},
    {tag:'Discipleship',items:[
      ['Men of True Light','All ages','Saturday 7 a.m. (1st & 3rd)','briefcase'],
      ['Women in the Word','All ages','Thursday 9:30 a.m.','book-open'],
      ['Senior Saints','55+','Friday 11 a.m.','sun'],
    ]},
    {tag:'Worship & Witness',items:[
      ['Choir & Praise Team','All voices welcome','Wednesday 7:30 p.m.','music'],
      ['Missions','Local & abroad','Monthly · 2nd Sunday','globe'],
      ['Care & Counseling','Free, confidential','By appointment','heart'],
    ]},
  ];
  return (
    <React.Fragment>
      <HeroMinistries/>

      {groups.map((g,gi)=>(
        <section key={g.tag} className={`section ${gi%2===0?'section--cream':'section--white'}`} style={{paddingTop:gi===0?'88px':'56px',paddingBottom:'56px'}}>
          <div className="tl-container">
            <p className="eyebrow" style={{marginBottom:'28px'}}>{g.tag}</p>
            <div className="min-grid">
              {g.items.map(([n,who,when,ic])=>(
                <article className="min-card" key={n}>
                  <div className="min-card__icon"><i data-lucide={ic} className="ic"></i></div>
                  <h3>{n}</h3>
                  <p className="min-card__who">{who}</p>
                  <p className="min-card__when"><i data-lucide="clock" className="ic"></i>{when}</p>
                  <a href="Connect.html" className="min-card__link">Get connected <i data-lucide="arrow-right" className="ic"></i></a>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBanner/>
    </React.Fragment>
  );
}

/* ─────────────── WATCH ─────────────── */
function PageWatch() {
  const sermons = [
    ['Anchored: Hope That Holds','Pastor James Whitaker','Hebrews 6:13–20','Nov 3','42 min'],
    ['The Cost of Following','Pastor James Whitaker','Luke 14:25–33','Oct 27','38 min'],
    ['Prayer When You\'re Tired','Marcus Trent','Psalm 42','Oct 20','34 min'],
    ['A Living Hope','Pastor James Whitaker','1 Peter 1:3–9','Oct 13','41 min'],
    ['Built Together','Marcus Trent','Ephesians 2:19–22','Oct 6','36 min'],
    ['Be Still','Pastor James Whitaker','Psalm 46','Sep 29','39 min'],
  ];
  return (
    <React.Fragment>
      <HeroWatch/>

      <section className="section section--cream" style={{paddingTop:'88px'}}>
        <div className="tl-container">
          <div className="watch-live">
            <div className="watch-live__stage">
              <Photo prompt="Wide shot of a Baptist sanctuary with stained glass and a wooden pulpit, warm lighting, congregation seated" theme="warm" w={960} h={540} />
              <div className="watch-live__overlay">
                <span className="watch-live__pill"><span className="dot"></span>LIVE Sunday at 10 a.m. CT</span>
                <button className="btn btn--play"><i data-lucide="play" className="ic"></i></button>
              </div>
            </div>
            <div className="watch-live__copy">
              <p className="eyebrow">This Sunday</p>
              <h2 className="display" style={{fontSize:'40px',marginTop:'8px'}}>Anchored: A Hope That Holds</h2>
              <p className="prose">Pastor James continues our series in Hebrews with a word for the weary and the wavering. Service includes communion.</p>
              <div className="watch-live__meta">
                <span><i data-lucide="clock" className="ic"></i>Doors 9:30 · Service 10:00</span>
                <span><i data-lucide="map-pin" className="ic"></i>4928 Government St</span>
              </div>
              <div style={{display:'flex',gap:'12px',marginTop:'20px',flexWrap:'wrap'}}>
                <a href="#" className="btn btn--red">Set a reminder<i data-lucide="bell" className="ic"></i></a>
                <a href="#" className="btn btn--ghost-dark">Order of service<i data-lucide="file-text" className="ic"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="tl-container">
          <div className="section-head section-head--row" style={{marginBottom:'40px'}}>
            <div className="section-head__copy">
              <p className="eyebrow eyebrow--blue">Sermon Archive</p>
              <h2 className="display" style={{fontSize:'42px'}}>Recent messages.</h2>
            </div>
            <a href="#" className="btn btn--ghost-dark btn--sm">Browse all 247 sermons<i data-lucide="arrow-right" className="ic"></i></a>
          </div>
          <div className="archive">
            {sermons.map(([t,p,ref,d,len])=>(
              <article key={t} className="archive__card">
                <div className="archive__poster">
                  <Photo prompt={`Sermon thumbnail: ${t}, scripture passage, warm dark tones, single light source`} theme="dark" w={400} h={240} />
                  <span className="archive__len">{len}</span>
                  <button className="archive__play"><i data-lucide="play" className="ic"></i></button>
                </div>
                <div className="archive__body">
                  <div className="archive__meta"><span>{d}</span><span>·</span><span>{ref}</span></div>
                  <h3>{t}</h3>
                  <p className="archive__pastor">{p}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--charcoal section--tight">
        <div className="tl-container">
          <div className="podcast">
            <div>
              <p className="eyebrow eyebrow--cream">Listen on the go</p>
              <h2 className="display" style={{fontSize:'36px',color:'#fff',marginTop:'8px'}}>The True Light Podcast</h2>
              <p style={{color:'rgba(244,241,236,0.78)',maxWidth:'480px'}}>Every Sunday's sermon, plus mid-week conversations with our pastoral team. New episodes Mondays.</p>
            </div>
            <div className="podcast__links">
              <a href="#" className="btn btn--white"><i data-lucide="podcast" className="ic"></i>Apple Podcasts</a>
              <a href="#" className="btn btn--white"><i data-lucide="music" className="ic"></i>Spotify</a>
              <a href="#" className="btn btn--ghost-light"><i data-lucide="rss" className="ic"></i>RSS</a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

/* ─────────────── EVENTS ─────────────── */
function PageEvents() {
  const events = [
    ['Nov','12','Wed','Family Thanksgiving Dinner','6:30 p.m. · Fellowship Hall','Free · No RSVP needed','utensils'],
    ['Nov','17','Mon','Membership Class','7 p.m. · Room 204','Required for new members','clipboard-list'],
    ['Nov','22','Sat','Men\'s Breakfast','7 a.m. · Fellowship Hall','$5 · All men welcome','egg'],
    ['Dec','06','Sat','Christmas Choir Rehearsal','9 a.m. · Sanctuary','Open rehearsal','music'],
    ['Dec','14','Sun','Children\'s Christmas Pageant','5 p.m. · Sanctuary','Reception to follow','star'],
    ['Dec','24','Wed','Christmas Eve Candlelight','5 & 7 p.m. · Sanctuary','Childcare for under 4','candle'],
  ];
  return (
    <React.Fragment>
      <HeroEvents/>

      <section className="section section--cream" style={{paddingTop:'88px'}}>
        <div className="tl-container">
          <div className="featured">
            <div className="featured__photo">
              <Photo prompt="Long farmhouse table set with autumn linens, candles, warm gathering of multi-generational families, Thanksgiving" theme="warm" w={680} h={560} />
            </div>
            <div className="featured__copy">
              <p className="eyebrow">Featured this month</p>
              <h2 className="display" style={{fontSize:'56px'}}>Family Thanksgiving Dinner</h2>
              <p className="prose">A free, all-church meal the Wednesday before Thanksgiving. Bring a friend, bring a neighbor, bring an empty seat to your table — we'll fill it. Our deacons are cooking.</p>
              <div className="featured__when">
                <div><span>WHEN</span>Wednesday, Nov 12 · 6:30 p.m.</div>
                <div><span>WHERE</span>Fellowship Hall</div>
                <div><span>COST</span>Free — no RSVP needed</div>
              </div>
              <div style={{display:'flex',gap:'12px',marginTop:'24px'}}>
                <a href="#" className="btn btn--red">Add to calendar<i data-lucide="calendar-plus" className="ic"></i></a>
                <a href="Connect.html" className="btn btn--ghost-dark">I want to help<i data-lucide="hand" className="ic"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="tl-container">
          <div className="section-head section-head--row" style={{marginBottom:'40px'}}>
            <div className="section-head__copy">
              <p className="eyebrow eyebrow--blue">Upcoming</p>
              <h2 className="display" style={{fontSize:'42px'}}>The next sixty days.</h2>
            </div>
            <a href="#" className="btn btn--ghost-dark btn--sm">View full calendar<i data-lucide="arrow-right" className="ic"></i></a>
          </div>
          <ul className="calendar">
            {events.map(([m,d,dow,t,when,note,ic])=>(
              <li key={m+d+t} className="calendar__row">
                <div className="calendar__date">
                  <span className="calendar__m">{m}</span>
                  <span className="calendar__d">{d}</span>
                  <span className="calendar__dow">{dow}</span>
                </div>
                <div className="calendar__icon"><i data-lucide={ic} className="ic"></i></div>
                <div className="calendar__body">
                  <h3>{t}</h3>
                  <p>{when}</p>
                </div>
                <div className="calendar__note">{note}</div>
                <a href="#" className="calendar__cta"><i data-lucide="arrow-up-right" className="ic"></i></a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--maroon section--tight">
        <div className="tl-container">
          <div className="section-head section-head--center" style={{marginBottom:'40px'}}>
            <p className="eyebrow eyebrow--cream">Every Week</p>
            <h2 className="display" style={{fontSize:'40px'}}>Our weekly rhythm.</h2>
          </div>
          <div className="rhythm">
            {[
              ['Sunday','10:00 a.m.','Worship Service','Sanctuary · Childcare provided'],
              ['Sunday','9:00 a.m.','Sunday School','All ages · 9 classes'],
              ['Wednesday','6:30 p.m.','Mid-Week Service','Sanctuary · Youth meet upstairs'],
              ['Wednesday','7:30 p.m.','Choir Rehearsal','Choir loft'],
              ['Thursday','9:30 a.m.','Women in the Word','Room 204'],
              ['Friday','11:00 a.m.','Senior Saints Lunch','Fellowship Hall'],
            ].map(([day,time,t,where])=>(
              <div className="rhythm__row" key={day+time+t}>
                <div className="rhythm__day">{day}</div>
                <div className="rhythm__time">{time}</div>
                <div className="rhythm__t">{t}</div>
                <div className="rhythm__w">{where}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

/* ─────────────── CONNECT ─────────────── */
function PageConnect() {
  return (
    <React.Fragment>
      <HeroConnect/>

      <section className="section section--cream" style={{paddingTop:'88px'}}>
        <div className="tl-container">
          <div className="connect-grid">
            <div className="connect-form">
              <p className="eyebrow">New here?</p>
              <h2 className="display" style={{fontSize:'40px',marginTop:'8px'}}>Tell us about yourself.</h2>
              <p className="prose">Fill this out and one of our pastors will be in touch within 48 hours. Nothing pushy — just a hello, an invitation, and a parking pass for your first Sunday.</p>
              <form className="form" onSubmit={(e)=>e.preventDefault()}>
                <label><span>Full name</span><input type="text" placeholder="Your name"/></label>
                <label><span>Email</span><input type="email" placeholder="you@example.com"/></label>
                <label><span>Phone (optional)</span><input type="tel" placeholder="(225) 555-0100"/></label>
                <label><span>Tell us a bit about you</span><textarea rows="4" placeholder="Family, what brought you here, anything you'd like us to pray for…"></textarea></label>
                <fieldset>
                  <legend>I'm interested in…</legend>
                  <label className="check"><input type="checkbox"/> Visiting on Sunday</label>
                  <label className="check"><input type="checkbox"/> Joining a small group</label>
                  <label className="check"><input type="checkbox"/> Membership</label>
                  <label className="check"><input type="checkbox"/> Baptism</label>
                </fieldset>
                <button type="submit" className="btn btn--red btn--lg">Send to a pastor<i data-lucide="send" className="ic"></i></button>
              </form>
            </div>
            <aside className="connect-side">
              <div className="connect-card">
                <i data-lucide="hand-helping" className="ic ic--lg"></i>
                <h3>Need prayer?</h3>
                <p>Submit a request — confidential, read only by our pastoral care team. Prayed over within the day.</p>
                <a href="#" className="btn btn--ghost-dark btn--sm">Submit a request<i data-lucide="arrow-right" className="ic"></i></a>
              </div>
              <div className="connect-card connect-card--blue">
                <i data-lucide="map-pin" className="ic ic--lg"></i>
                <h3>Visit Sunday</h3>
                <p>4928 Government St · Baton Rouge.<br/>Service at 10 a.m. · Coffee from 9:30. Reserved parking for guests.</p>
                <a href="#" className="btn btn--white btn--sm">Get directions<i data-lucide="map" className="ic"></i></a>
              </div>
              <div className="connect-card">
                <i data-lucide="phone" className="ic ic--lg"></i>
                <h3>Talk to a pastor</h3>
                <p>(225) 555-0140 · Mon–Thu, 9 a.m.–4 p.m.<br/>After hours, leave a message and we'll call back.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="tl-container">
          <div className="section-head section-head--center" style={{marginBottom:'48px'}}>
            <p className="eyebrow eyebrow--blue">Next Steps</p>
            <h2 className="display" style={{fontSize:'42px'}}>Pathways forward.</h2>
            <p className="prose" style={{maxWidth:'620px'}}>Following Jesus is a journey, not a moment. These are the next-step on-ramps we point people toward most often.</p>
          </div>
          <div className="paths">
            {[
              ['user-plus','Membership','A 4-week class on what it means to belong here. Next cohort: Nov 17.'],
              ['droplet','Baptism','Public confession of saving faith. Quarterly services. Next: Dec 7.'],
              ['users','Small Groups','12 groups across the city — meet weekly in homes. Find one near you.'],
              ['heart','Volunteer','Children, hospitality, tech, missions. There\'s a place for your gifts.'],
            ].map(([ic,t,d])=>(
              <article className="path" key={t}>
                <i data-lucide={ic} className="ic"></i>
                <h3>{t}</h3>
                <p>{d}</p>
                <a href="#" className="path__cta">Learn more <i data-lucide="arrow-right" className="ic"></i></a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

/* ─────────────── GIVE ─────────────── */
function PageGive() {
  return (
    <React.Fragment>
      <HeroGive/>

      <section className="section section--cream" style={{paddingTop:'88px'}}>
        <div className="tl-container">
          <div className="give-grid">
            {[
              ['General Fund','Sunday worship, staff, building, programs — the day-to-day life of the church.','tlbc-red',64],
              ['Missions','Local outreach in Baton Rouge plus partner work in Haiti, Kenya, and Honduras.','tlbc-blue',22],
              ['Building & Repair','The brick sanctuary turns 70 next year. We\'re saving for the roof and HVAC.','tlbc-charcoal',14],
            ].map(([t,d,c,pct])=>(
              <article className="give-card" key={t}>
                <div className="give-card__pct">
                  <svg viewBox="0 0 100 100" width="80" height="80">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(30,30,30,0.10)" strokeWidth="10"/>
                    <circle cx="50" cy="50" r="42" fill="none" stroke={`var(--${c})`} strokeWidth="10"
                      strokeDasharray={`${pct*2.64} 264`} transform="rotate(-90 50 50)" strokeLinecap="round"/>
                  </svg>
                  <span>{pct}%</span>
                </div>
                <h3>{t}</h3>
                <p>{d}</p>
                <button className="btn btn--ghost-dark btn--sm">Give to {t.split(' ')[0]}<i data-lucide="arrow-right" className="ic"></i></button>
              </article>
            ))}
          </div>
          <p style={{textAlign:'center',marginTop:'12px',color:'var(--fg-muted)',fontSize:'13px'}}>Allocation of every dollar given in 2024 · 100% goes to ministry, 0% to overhead.</p>
        </div>
      </section>

      <section className="section section--white">
        <div className="tl-container">
          <div className="ways">
            <div className="ways__copy">
              <p className="eyebrow eyebrow--blue">Ways to Give</p>
              <h2 className="display" style={{fontSize:'42px'}}>Five ways. Same heart.</h2>
              <p className="prose">All giving is tax-deductible. You'll receive an annual statement in January for your records.</p>
            </div>
            <ul className="ways__list">
              {[
                ['globe','Online','One-time or recurring · debit, credit, ACH'],
                ['phone','Text','Text GIVE to (225) 555-4483'],
                ['hand','In Person','Offering plate · Sunday at 10 a.m.'],
                ['mail','By Mail','TLBC · 4928 Government St · Baton Rouge, LA 70806'],
                ['file-text','Planned Giving','Bequests, stock, IRA distributions — talk to our finance team'],
              ].map(([ic,t,d])=>(
                <li key={t}>
                  <i data-lucide={ic} className="ic"></i>
                  <div><h4>{t}</h4><p>{d}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--maroon section--tight">
        <div className="tl-container">
          <blockquote className="steward">
            <p>"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."</p>
            <cite>2 Corinthians 9:7</cite>
          </blockquote>
        </div>
      </section>
    </React.Fragment>
  );
}

/* ─────────────── MEMBERS ─────────────── */
function PageMembers() {
  return (
    <React.Fragment>
      <HeroMembers/>

      <section className="section section--cream" style={{paddingTop:'88px'}}>
        <div className="tl-container">
          <div className="member-grid">
            <div className="member-login">
              <h2 className="display" style={{fontSize:'32px'}}>Sign in</h2>
              <form className="form" onSubmit={(e)=>e.preventDefault()}>
                <label><span>Email</span><input type="email" placeholder="you@example.com"/></label>
                <label><span>Password</span><input type="password" placeholder="••••••••"/></label>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'12px'}}>
                  <label className="check"><input type="checkbox"/> Remember me</label>
                  <a href="#" style={{fontSize:'13px',color:'var(--tlbc-red)'}}>Forgot password?</a>
                </div>
                <button type="submit" className="btn btn--red btn--lg">Sign in<i data-lucide="log-in" className="ic"></i></button>
              </form>
              <p style={{marginTop:'18px',fontSize:'14px',color:'var(--fg-muted)'}}>
                New member? <a href="Connect.html" style={{color:'var(--tlbc-red)',fontWeight:600}}>Request an account</a>
              </p>
            </div>
            <aside className="member-side">
              <p className="eyebrow eyebrow--blue">Once you're in</p>
              <ul className="member-perks">
                {[
                  ['users','Member directory · 620 families'],
                  ['calendar','Personal calendar & RSVPs'],
                  ['file-text','Giving history & statements'],
                  ['book-open','Sermon notes & study resources'],
                  ['message-circle','Small-group messaging'],
                  ['bell','Prayer-chain notifications'],
                ].map(([ic,t])=>(
                  <li key={t}><i data-lucide={ic} className="ic"></i>{t}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--white section--tight">
        <div className="tl-container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Need help?</p>
            <h3 style={{fontFamily:'var(--font-display)',fontSize:'28px',color:'var(--tlbc-charcoal)'}}>The church office is here.</h3>
            <p className="prose" style={{maxWidth:'520px'}}>Account locked? Email us at members@truelightbr.org or call (225) 555-0140 during office hours.</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

/* ─────────────── CTA banner shared ─────────────── */
function CtaBanner() {
  return (
    <section className="section section--charcoal section--tight">
      <div className="tl-container">
        <div className="cta-banner">
          <div>
            <p className="eyebrow eyebrow--cream">Plan your visit</p>
            <h2 className="display" style={{fontSize:'40px',color:'#fff',marginTop:'8px'}}>Sunday at 10 a.m.<br/>We'll save you a seat.</h2>
          </div>
          <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <a href="Connect.html" className="btn btn--red btn--lg">Plan your visit<i data-lucide="calendar-days" className="ic"></i></a>
            <a href="Watch.html" className="btn btn--ghost-light btn--lg">Watch first<i data-lucide="play" className="ic"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

const SUBPAGES = {
  about: PageAbout,
  ministries: PageMinistries,
  watch: PageWatch,
  events: PageEvents,
  connect: PageConnect,
  give: PageGive,
  members: PageMembers,
};
window.SUBPAGES = SUBPAGES;
