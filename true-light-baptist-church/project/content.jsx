/* global React, PhotoSermon, PhotoChildren, PhotoYouth, PhotoWomen, PhotoMen, PhotoOutreach, PhotoMusic, PhotoPrayer, PhotoSenior, PhotoEvent */

function Sermon({ onNav }) {
  return (
    <section className="section section--cream" data-screen-label="04 Sermon">
      <div className="tl-container">
        <div className="sermon__grid">
          <div className="sermon__copy">
            <p className="eyebrow">Latest Sermon · Sunday, May 3</p>
            <h2 className="sermon__title">When the Lord bows down to hear.</h2>
            <p className="sermon__body">
              Pastor Williams continues our walk through Psalm 86 — on prayer
              as the language of dependence, and what it means in our hurried
              lives to be heard by the God who inclines His ear.
            </p>
            <div className="sermon__meta">
              <span><i data-lucide="user" className="ic"></i>Pastor M. Williams</span>
              <span><i data-lucide="clock" className="ic"></i>38 min</span>
              <span><i data-lucide="book-marked" className="ic"></i>Psalm 86</span>
            </div>
            <div className="sermon__verse">
              "Bow down thine ear, O Lord, hear me: for I am poor and needy."
              <span className="sermon__verse-ref">Psalm 86:1 — KJV</span>
            </div>
            <div className="sermon__actions">
              <button className="btn btn--red btn--lg" onClick={()=>onNav&&onNav('watch')}>
                <i data-lucide="play-circle" className="ic"></i>Watch the Sermon
              </button>
              <button className="btn btn--ghost-dark btn--lg">
                <i data-lucide="headphones" className="ic"></i>Listen
              </button>
              <button className="btn btn--ghost-dark btn--lg" onClick={()=>onNav&&onNav('watch')}>
                Browse Archive
              </button>
            </div>
          </div>
          <div className="sermon__player">
            <PhotoSermon/>
            <div className="sermon__player-overlay">
              <span className="sermon__live-tag">New This Week</span>
              <button className="btn btn--play sermon__play-btn" aria-label="Play sermon">
                <svg viewBox="0 0 24 24" className="ic"><path d="M8 5 L20 12 L8 19 Z"/></svg>
              </button>
              <div className="sermon__player-foot">
                <p className="sermon__player-series">Series · A Church Built On Prayer</p>
                <h3 className="sermon__player-title">When the Lord<br/>bows down to hear.</h3>
                <div className="sermon__player-bar">
                  <div className="sermon__bar"><div className="sermon__bar-fill"></div></div>
                  <div className="sermon__times"><span>14:32</span><span>38:00</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ministries({ onNav }) {
  const filters = ['All', 'Adults', 'Youth & Kids', 'Outreach', 'Worship'];
  const [active, setActive] = React.useState('All');

  const all = [
    { name: "Children's", group: 'Youth & Kids', size: 'Ages 4–10', day: 'Sundays', cover: <PhotoChildren/>, tag: 'Sunday School' },
    { name: 'Youth', group: 'Youth & Kids', size: 'Grades 6–12', day: 'Sundays', cover: <PhotoYouth/>, tag: 'Bible Study', tagBlue: true },
    { name: "Women's", group: 'Adults', size: 'All ages', day: 'Monthly', cover: <PhotoWomen/>, tag: 'Fellowship' },
    { name: "Men's", group: 'Adults', size: 'All ages', day: 'Saturdays', cover: <PhotoMen/>, tag: 'Breakfast', tagBlue: true },
    { name: 'Music & Worship', group: 'Worship', size: 'Choir &amp; Praise', day: 'Wednesdays', cover: <PhotoMusic/>, tag: 'Choir' },
    { name: 'Prayer Team', group: 'Adults', size: 'Daily prayer', day: 'Daily', cover: <PhotoPrayer/>, tag: 'Intercession', tagBlue: true },
    { name: 'Community Care', group: 'Outreach', size: 'Visitation', day: 'Weekly', cover: <PhotoSenior/>, tag: 'Outreach' },
    { name: 'Outreach', group: 'Outreach', size: 'Baton Rouge', day: 'Monthly', cover: <PhotoOutreach/>, tag: 'Service', tagBlue: true },
  ];

  const filtered = active === 'All' ? all : all.filter(m => m.group === active);

  return (
    <section className="section section--white" data-screen-label="05 Ministries">
      <div className="tl-container">
        <div className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="eyebrow">Grow Together</p>
            <h2 className="h1" style={{marginTop: 14}}>
              There's a place<br/>for you here.
            </h2>
            <hr className="divider-3" style={{marginTop: 24}}/>
          </div>
          <p className="lead" style={{maxWidth: 380}}>
            From Sunday morning to mid-week, our ministries are where the True Light
            family lives out its faith — together, across generations.
          </p>
        </div>
        <div className="min__filters">
          {filters.map(f => (
            <button key={f}
              className={`min__chip ${active === f ? 'is-active' : ''}`}
              onClick={() => setActive(f)}>
              {f}
            </button>
          ))}
          <span className="min__count">{filtered.length} Ministries</span>
        </div>
        <div className="min__grid">
          {filtered.map(m => (
            <article key={m.name} className="min__card">
              <div className="cover">{m.cover}</div>
              <div className="min__card-overlay">
                <span className={`min__card-tag ${m.tagBlue ? 'min__card-tag--blue' : ''}`}>{m.tag}</span>
                <div className="min__card-arrow">
                  <i data-lucide="arrow-up-right" className="ic"></i>
                </div>
                <div className="min__card-foot">
                  <h3 className="min__card-name">{m.name}</h3>
                  <div className="min__card-meta">
                    <span dangerouslySetInnerHTML={{__html: m.size}}/>
                    <span><i data-lucide="calendar" className="ic"></i>{m.day}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events({ onNav }) {
  const events = [
    {
      day: '17', month: 'May', cat: 'Revival',
      title: 'Spring Revival · Three Nights of Worship',
      desc: 'A three-night revival with guest preaching from Rev. James Carter, special music from the True Light choir, and prayer ministry each evening.',
      where: 'Sanctuary', time: '7:00 p.m.', tone: 'maroon',
      feature: true,
    },
    {
      day: '24', month: 'May', cat: 'Community',
      title: 'Community Food Drive',
      desc: 'Partner with our outreach team to serve neighbors in North Baton Rouge.',
      where: 'Fellowship Hall', time: '9:00 a.m.', tone: 'amber',
    },
    {
      day: '07', month: 'Jun', cat: 'Youth',
      title: 'Youth Summer Kickoff',
      desc: 'Pizza, Bible games, and worship for grades 6–12. Bring a friend.',
      where: 'Youth Wing', time: '6:30 p.m.', tone: 'blue',
    },
  ];
  return (
    <section className="section section--cream" data-screen-label="06 Events">
      <div className="tl-container">
        <div className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="eyebrow">On The Calendar</p>
            <h2 className="h1" style={{marginTop: 14}}>Upcoming events &amp; gatherings.</h2>
            <hr className="divider-3" style={{marginTop: 24}}/>
          </div>
          <button className="btn btn--ghost-dark btn--lg" onClick={()=>onNav&&onNav('events')}>
            <i data-lucide="calendar-days" className="ic"></i>View Full Calendar
          </button>
        </div>
        <div className="events__grid">
          {events.map((e, i) => (
            <article key={i} className={`event ${e.feature ? 'event--feature' : ''}`}>
              <div className="event__cover">
                <PhotoEvent tone={e.tone}/>
                <div className="event__date">
                  <span className="event__date-day">{e.day}</span>
                  <span className="event__date-month">{e.month}</span>
                </div>
              </div>
              <div className="event__body">
                <span className="event__cat">{e.cat}</span>
                <h3 className="event__title">{e.title}</h3>
                <p className="event__desc">{e.desc}</p>
                <div className="event__foot">
                  <span><i data-lucide="map-pin" className="ic"></i>{e.where}</span>
                  <span><i data-lucide="clock" className="ic"></i>{e.time}</span>
                </div>
                <button className="btn btn--red btn--sm event__rsvp">
                  RSVP <i data-lucide="arrow-right" className="ic"></i>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Sermon, Ministries, Events });
