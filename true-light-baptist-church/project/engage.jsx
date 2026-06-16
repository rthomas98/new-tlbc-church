/* global React */

function PrayerGive({ onNav }) {
  // Prayer form state
  const [name, setName] = React.useState('');
  const [request, setRequest] = React.useState('');
  const [confidential, setConfidential] = React.useState(true);
  const [submitted, setSubmitted] = React.useState(false);

  // Give state
  const amounts = [25, 50, 100, 250];
  const [amount, setAmount] = React.useState(50);
  const [custom, setCustom] = React.useState('');
  const [freq, setFreq] = React.useState('one-time');

  const handle = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="split" data-screen-label="07 Prayer & Give">
      <div className="split__prayer">
        <p className="eyebrow">Prayer Requests</p>
        <h2 className="h2" style={{marginTop: 14, fontSize: 44}}>However the week finds you, we'll lift you up.</h2>
        <p className="lead" style={{marginTop: 20}}>
          Our pastors and prayer team pray over every request submitted —
          in confidence, with care, and in the name of Christ.
        </p>
        {!submitted ? (
          <form className="prayer__form" onSubmit={handle}>
            <div className="prayer__field">
              <label>Your name</label>
              <input value={name} onChange={e=>setName(e.target.value)} placeholder="Sarah Johnson"/>
            </div>
            <div className="prayer__field">
              <label>Prayer request</label>
              <textarea rows="4" value={request} onChange={e=>setRequest(e.target.value)} placeholder="Share what's on your heart…"/>
            </div>
            <label className="prayer__check">
              <input type="checkbox" checked={confidential} onChange={e=>setConfidential(e.target.checked)}/>
              <span>Keep my request confidential — share only with the prayer team.</span>
            </label>
            <button type="submit" className="btn btn--red btn--lg" style={{width:'100%',justifyContent:'center'}}>
              <i data-lucide="hand-heart" className="ic"></i>Submit Prayer Request
            </button>
          </form>
        ) : (
          <div className="prayer__submitted">
            <i data-lucide="check-circle-2" className="ic"></i>
            <h3 className="h3">Thank you, {name || 'friend'}.</h3>
            <p className="body" style={{marginTop:12}}>Your request has been received. Our prayer team will lift it up this week. May God's peace be with you.</p>
            <button className="btn btn--ghost-dark" style={{marginTop:20}} onClick={()=>{setSubmitted(false);setName('');setRequest('');}}>Submit another request</button>
          </div>
        )}
      </div>

      <div className="split__give">
        <p className="eyebrow eyebrow--cream">Give Online</p>
        <h2 className="h2" style={{marginTop: 14, fontSize: 44, color:'#fff'}}>Sow generously into the work God is doing.</h2>
        <p className="lead" style={{marginTop: 20, color:'rgba(244,241,236,0.85)', maxWidth: 460}}>
          Your tithes and offerings keep the lights on, the doors open, and the
          Gospel going out — to Baton Rouge and beyond. Every gift matters.
        </p>

        <div className="give__freq">
          <button className={freq === 'one-time' ? 'is-active' : ''} onClick={()=>setFreq('one-time')}>One-Time</button>
          <button className={freq === 'weekly' ? 'is-active' : ''} onClick={()=>setFreq('weekly')}>Weekly</button>
          <button className={freq === 'monthly' ? 'is-active' : ''} onClick={()=>setFreq('monthly')}>Monthly</button>
        </div>

        <div className="give__amounts">
          {amounts.map(a => (
            <button key={a}
              className={`give__amount ${amount === a && !custom ? 'is-active' : ''}`}
              onClick={()=>{setAmount(a); setCustom('');}}>
              ${a}
            </button>
          ))}
        </div>

        <div className="give__custom">
          <span className="give__currency">$</span>
          <input type="text" placeholder="Other amount"
            value={custom}
            onChange={e=>{setCustom(e.target.value.replace(/[^0-9]/g,'')); setAmount(0);}}/>
        </div>

        <div style={{display:'flex',gap:12,marginTop:24,flexWrap:'wrap'}}>
          <button className="btn btn--white btn--lg">
            <i data-lucide="hand-coins" className="ic"></i>
            Give ${custom || amount} {freq !== 'one-time' && `· ${freq}`}
          </button>
          <button className="btn btn--ghost-light btn--lg">
            <i data-lucide="building-2" className="ic"></i>Other Ways To Give
          </button>
        </div>

        <div className="give__methods">
          <span><i data-lucide="shield-check" className="ic"></i>Secure · Stripe</span>
          <span><i data-lucide="message-square" className="ic"></i>Text "GIVE" to 84321</span>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const stories = [
    {
      quote: "True Light has been our home for 22 years. Pastor Williams baptized our children — and now they're being baptized by him too. This is family.",
      name: 'The Hayes Family', role: 'Members since 2003', initials: 'TH',
    },
    {
      quote: "I came in broken and was met with prayer, scripture, and grace. The Lord did the rest. I haven't missed a Sunday since.",
      name: 'Marcus J.', role: 'Saved at True Light, 2022', initials: 'MJ',
    },
    {
      quote: "The youth ministry gave my son a place to belong, to ask hard questions, and to know Jesus for himself. Worth every Sunday morning.",
      name: 'Pastor Denise W.', role: 'Mom of two · Volunteer', initials: 'DW',
    },
  ];
  return (
    <section className="section section--cream" data-screen-label="08 Testimonials">
      <div className="tl-container">
        <div className="section-head section-head--center">
          <p className="eyebrow">Stories From Our Family</p>
          <h2 className="h1" style={{marginTop: 14}}>What God is doing<br/>at True Light.</h2>
          <hr className="divider-3" style={{marginTop: 24}}/>
        </div>
        <div className="testi__grid">
          {stories.map((t, i) => (
            <article key={i} className="testi">
              <div className="testi__stars">
                {[0,1,2,3,4].map(j => (
                  <svg key={j} viewBox="0 0 24 24" className="ic"><path d="M12 2 L14.6 9.4 L22 12 L14.6 14.6 L12 22 L9.4 14.6 L2 12 L9.4 9.4 Z"/></svg>
                ))}
              </div>
              <p className="testi__quote">"{t.quote}"</p>
              <div className="testi__author">
                <div className="testi__avatar">{t.initials}</div>
                <div>
                  <div className="testi__name">{t.name}</div>
                  <div className="testi__role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ onNav }) {
  return (
    <footer className="ftr" data-screen-label="09 Footer">
      <div className="ftr__top tl-container">
        <div className="ftr__cta">
          <h2 className="ftr__cta-title">
            We can't wait<br/>to meet you this Sunday.
          </h2>
          <div className="ftr__cta-actions">
            <button className="btn btn--cream btn--lg" onClick={()=>onNav&&onNav('connect')}>
              <i data-lucide="map-pin" className="ic"></i>Plan Your Visit
            </button>
            <button className="btn btn--ghost-light btn--lg" onClick={()=>onNav&&onNav('watch')}>
              <i data-lucide="play-circle" className="ic"></i>Watch Live
            </button>
          </div>
        </div>
        <div className="ftr__grid">
          <div className="ftr__brand">
            <img src="assets/logo-white-transparent.png" alt="True Light Baptist Church seal" style={{width:'88px',height:'88px',borderRadius:0}}/>
            <div className="ftr__brand-name">True Light Baptist Church</div>
            <p className="ftr__brand-tag">Christ-Centered. Hope-Filled. Community-Rooted. Sharing the light of Christ in Baton Rouge since 1941.</p>
            <div className="ftr__social">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" className="ic" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.6H7.7V14h2.7v8h3.1z"/></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" className="ic" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" className="ic" fill="currentColor"><path d="M21.6 7.2c-.2-1-1-1.7-2-2C17.7 4.8 12 4.8 12 4.8s-5.7 0-7.6.4c-1 .3-1.8 1-2 2C2 9.1 2 12 2 12s0 2.9.4 4.8c.2 1 1 1.7 2 2 1.9.4 7.6.4 7.6.4s5.7 0 7.6-.4c1-.3 1.8-1 2-2 .4-1.9.4-4.8.4-4.8s0-2.9-.4-4.8zM10 15.2V8.8l5.2 3.2-5.2 3.2z"/></svg>
              </a>
              <a href="#" aria-label="Email"><i data-lucide="mail" className="ic"></i></a>
            </div>
          </div>
          <div className="ftr__col">
            <p className="ftr__heading">Visit</p>
            <p className="ftr__addr">3836 North Street<br/>Baton Rouge, LA 70806</p>
            <p className="ftr__addr">Sundays · 10:00 a.m.<br/>Wednesdays · 6:30 p.m.</p>
            <p className="ftr__addr">(225) 555-0149<br/>hello@truelightbr.org</p>
          </div>
          <div className="ftr__col">
            <p className="ftr__heading">Connect</p>
            <ul>
              <li><a href="#">Plan Your Visit</a></li>
              <li><a href="#">Submit Prayer Request</a></li>
              <li><a href="#">Watch Sermons</a></li>
              <li><a href="#">Give Online</a></li>
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="ftr__col">
            <p className="ftr__heading">Ministries</p>
            <ul>
              <li><a href="#">Children &amp; Youth</a></li>
              <li><a href="#">Men's Fellowship</a></li>
              <li><a href="#">Women's Ministry</a></li>
              <li><a href="#">Music &amp; Worship</a></li>
              <li><a href="#">Prayer Team</a></li>
              <li><a href="#">Community Outreach</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tl-container ftr__bar">
        <span className="ftr__bar-scripture">"Seeking God's guidance and deliverance through prayer." — Psalm 86</span>
        <div className="ftr__bar-meta">
          <span>© 2026 True Light Baptist Church</span>
          <span>·</span>
          <span>Privacy</span>
          <span>·</span>
          <span>Member Login</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { PrayerGive, Testimonials, Footer });
