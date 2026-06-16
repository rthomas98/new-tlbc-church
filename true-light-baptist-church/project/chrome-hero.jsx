/* global React, PhotoCongregation, PhotoPastor, PhotoWorship, PhotoBible */

function Header({ active = 'home' }) {
  const items = [
    { id: 'home', label: 'Home', href: 'Homepage.html' },
    { id: 'about', label: 'About', href: 'About.html' },
    { id: 'ministries', label: 'Ministries', href: 'Ministries.html' },
    { id: 'watch', label: 'Watch', href: 'Watch.html' },
    { id: 'events', label: 'Events', href: 'Events.html' },
    { id: 'connect', label: 'Connect', href: 'Connect.html' },
    { id: 'give', label: 'Give', href: 'Give.html' },
    { id: 'members', label: 'Members', href: 'Members.html' },
  ];
  return (
    <header className="hdr">
      <div className="hdr__row">
        <a href="Homepage.html" className="hdr__brand">
          <img src="assets/logo-red-on-cream.png" alt="True Light Baptist Church seal" className="hdr__seal"/>
          <span>
            <span className="hdr__name">True Light</span>
            <span className="hdr__sub">Baptist · Est. 1941</span>
          </span>
        </a>
        <nav className="hdr__nav">
          <ul>
            {items.map(it => (
              <li key={it.id}>
                <a href={it.href} className={active === it.id ? 'is-active' : ''}>
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hdr__cta">
          <a href="Watch.html" className="hdr__live"><span className="hdr__live-dot"></span>Watch Live</a>
          <a href="Connect.html" className="btn btn--red">
            <i data-lucide="calendar-days" className="ic"></i>Plan Your Visit
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ onNav }) {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero__frame">
        <div className="hero__photo"><PhotoCongregation/></div>
        <div className="hero__overlay"></div>
        <svg className="hero__chev" viewBox="0 0 600 600" aria-hidden="true">
          <polyline points="-20,300 250,30 270,55 0,325" fill="none" stroke="#4FA1C6" strokeWidth="38" strokeLinejoin="miter"/>
          <polyline points="-20,300 250,570 270,545 0,275" fill="none" stroke="#4FA1C6" strokeWidth="38" strokeLinejoin="miter"/>
          <polyline points="-60,300 230,10 250,32 -40,322" fill="none" stroke="#F4F1EC" strokeWidth="34" strokeLinejoin="miter" opacity="0.30"/>
          <polyline points="-60,300 230,590 250,568 -40,278" fill="none" stroke="#F4F1EC" strokeWidth="34" strokeLinejoin="miter" opacity="0.30"/>
        </svg>
        <div className="hero__inner">
          <p className="eyebrow hero__eyebrow">Sunday Worship · 10:00 a.m.</p>
          <h1 className="hero__title">
            Worship in His <em>light,</em><br/>every Sunday.
          </h1>
          <p className="hero__lead">
            For 85 years, True Light Baptist Church has gathered in Baton Rouge
            to seek God's guidance and deliverance through prayer, teaching,
            and community. You're welcome here.
          </p>
          <div className="hero__actions">
            <button className="btn btn--white btn--lg" onClick={()=>onNav&&onNav('connect')}>
              <i data-lucide="map-pin" className="ic"></i>Plan Your Visit
            </button>
            <button className="btn btn--ghost-light btn--lg" onClick={()=>onNav&&onNav('watch')}>
              <i data-lucide="play-circle" className="ic"></i>Watch Live
            </button>
            <div className="hero__rating">
              <div className="hero__rating-num">1941</div>
              <div className="hero__rating-text">Rooted in Baton Rouge for over 80 years</div>
            </div>
          </div>
          <div className="hero__bar">
            <div className="hero__bar-cell">
              <span className="hero__bar-label">Sunday Worship</span>
              <span className="hero__bar-value">
                <i data-lucide="sun" className="ic"></i>10:00 a.m.
              </span>
            </div>
            <div className="hero__bar-cell">
              <span className="hero__bar-label">Bible Study</span>
              <span className="hero__bar-value">
                <i data-lucide="book-open" className="ic"></i>Sun · 9:00 a.m.
              </span>
            </div>
            <div className="hero__bar-cell">
              <span className="hero__bar-label">Prayer &amp; Teaching</span>
              <span className="hero__bar-value">
                <i data-lucide="hand-heart" className="ic"></i>Wed · 6:30 p.m.
              </span>
            </div>
            <div className="hero__bar-cell">
              <span className="hero__bar-label">Address</span>
              <span className="hero__bar-value">
                <i data-lucide="map-pin" className="ic"></i>3836 North St.
              </span>
            </div>
            <button className="btn btn--red" onClick={()=>onNav&&onNav('connect')}>
              Get Directions <i data-lucide="arrow-right" className="ic"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const phrase = (
    <span>
      Christ-Centered
      <svg viewBox="0 0 24 24" className="marquee__star" fill="currentColor"><path d="M12 2 L14.6 9.4 L22 12 L14.6 14.6 L12 22 L9.4 14.6 L2 12 L9.4 9.4 Z"/></svg>
      Hope-Filled
      <svg viewBox="0 0 24 24" className="marquee__star" fill="currentColor"><path d="M12 2 L14.6 9.4 L22 12 L14.6 14.6 L12 22 L9.4 14.6 L2 12 L9.4 9.4 Z"/></svg>
      Community-Rooted
      <svg viewBox="0 0 24 24" className="marquee__star" fill="currentColor"><path d="M12 2 L14.6 9.4 L22 12 L14.6 14.6 L12 22 L9.4 14.6 L2 12 L9.4 9.4 Z"/></svg>
      Sharing the Light Since 1941
      <svg viewBox="0 0 24 24" className="marquee__star" fill="currentColor"><path d="M12 2 L14.6 9.4 L22 12 L14.6 14.6 L12 22 L9.4 14.6 L2 12 L9.4 9.4 Z"/></svg>
    </span>
  );
  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {phrase}{phrase}{phrase}{phrase}
      </div>
    </section>
  );
}

function Pastor({ onNav }) {
  return (
    <section className="section section--cream" data-screen-label="02 Pastor">
      <div className="tl-container">
        <div className="pastor__grid">
          <div className="pastor__photo">
            <PhotoPastor/>
            <div className="pastor__badge">
              <div>
                <div className="pastor__badge-name">Pastor M. Williams</div>
                <div className="pastor__badge-role">Senior Pastor</div>
              </div>
              <div className="pastor__badge-since">2014</div>
            </div>
          </div>
          <div className="pastor__copy">
            <p className="eyebrow">A Welcome From Our Pastor</p>
            <p className="pastor__quote">
              You're welcome here — whether you're walking in for the first time or returning home after a long while.
            </p>
            <p className="pastor__body">
              Our doors are open for one reason: to lift up the name of Jesus Christ together,
              and to be the hands and feet of His love in Baton Rouge. We believe the Gospel
              changes everything — families, neighborhoods, futures.
            </p>
            <p className="pastor__body">
              If you've never set foot in a church before, come as you are. If you've walked with
              the Lord for decades, come and worship. We'll save you a seat.
            </p>
            <div className="pastor__sig">
              <button className="btn btn--red" onClick={()=>onNav&&onNav('about')}>
                <i data-lucide="book-open" className="ic"></i>Read His Story
              </button>
              <span className="pastor__sig-line"></span>
              <span className="caption">Psalm 86 · Our guiding scripture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ onNav }) {
  const services = [
    {
      tag: 'Sunday', time: '10:00 a.m.', name: 'Morning Worship',
      desc: 'Spirit-led praise, scripture-rooted teaching, and the Lord\'s table together.',
      cover: <PhotoWorship/>,
    },
    {
      tag: 'Sunday', time: '9:00 a.m.', name: 'Bible Study',
      desc: 'Verse-by-verse study for all ages — adult, youth, and children\'s classes.',
      cover: <PhotoBible/>,
    },
    {
      tag: 'Wednesday', time: '6:30 p.m.', name: 'Prayer & Teaching',
      desc: 'Mid-week gathering for prayer, intercession, and a short word from the pastor.',
      cover: <PhotoPrayer/>,
    },
  ];
  return (
    <section className="section section--white" data-screen-label="03 Services">
      <div className="tl-container">
        <div className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="eyebrow">Gather With Us</p>
            <h2 className="h1" style={{marginTop: 14}}>Three times a week, around <em style={{fontStyle:'italic',color:'var(--tlbc-red)'}}>the same Word.</em></h2>
            <hr className="divider-3" style={{marginTop: 24}}/>
          </div>
          <p className="lead" style={{maxWidth:340}}>
            We've kept the same rhythm for eight decades — Sunday for worship,
            mid-week for prayer. Join us in the sanctuary at 3836 North Street.
          </p>
        </div>
        <div className="svc__grid">
          {services.map(s => (
            <article key={s.name} className="svc__card">
              <div className="svc__cover">
                {s.cover}
                <span className="svc__cover-tag">{s.tag}</span>
              </div>
              <div className="svc__body">
                <p className="svc__time">{s.time}</p>
                <h3 className="svc__name">{s.name}</h3>
                <p className="svc__desc">{s.desc}</p>
                <p className="svc__loc">
                  <i data-lucide="map-pin" className="ic"></i>
                  3836 North Street, Baton Rouge
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero, Marquee, Pastor, Services });
