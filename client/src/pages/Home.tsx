import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarClock,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Droplets,
  ExternalLink,
  Flame,
  ForkKnife,
  Hammer,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Trash2,
  Utensils,
  Wrench,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PHONE = "817-852-9498";
const PHONE_HREF = "tel:+18178529498";
const MAPS_URL = "https://maps.google.com/?cid=9318735104244241246";
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=5508+Eastwedge+Dr,+Fort+Worth,+TX+76137&output=embed";

const services: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  number: string;
}> = [
  {
    title: "Water Heater Repair",
    description: "Assistance with water heater leaks and related plumbing issues.",
    icon: Flame,
    number: "01",
  },
  {
    title: "Dishwasher Plumbing",
    description: "Help with dishwasher plumbing problems and related connections.",
    icon: Utensils,
    number: "02",
  },
  {
    title: "Garbage Disposal Repair",
    description: "Assistance with garbage disposal problems and everyday kitchen plumbing needs.",
    icon: Trash2,
    number: "03",
  },
  {
    title: "Faucet Repair",
    description: "Help with faulty, leaking, or malfunctioning faucets.",
    icon: Droplets,
    number: "04",
  },
  {
    title: "General Plumbing Assistance",
    description: "Plumbing support for everyday household plumbing problems.",
    icon: Wrench,
    number: "05",
  },
  {
    title: "Urgent Plumbing Assistance",
    description: "Call to discuss unexpected or last-minute plumbing issues.",
    icon: Hammer,
    number: "06",
  },
];

const trustPoints = [
  { icon: Clock3, label: "Available around the clock", detail: "Open 24 hours, 7 days a week." },
  { icon: ShieldCheck, label: "An honest approach", detail: "Customer feedback highlights honest, fair service." },
  { icon: CalendarClock, label: "Flexible scheduling", detail: "Customers appreciate flexibility when arranging service." },
  { icon: MessageCircle, label: "Clear communication", detail: "Keep informed about your plumbing needs." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Blue Diamond Plumbing of Texas home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" role="img">
                <path d="M24 3 43 24 24 45 5 24 24 3Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="m24 10 12.5 14L24 38 11.5 24 24 10Z" fill="currentColor" opacity=".22" />
                <path d="m24 13 9.5 11-9.5 11-9.5-11L24 13Z" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-copy">
              <strong>Blue Diamond</strong>
              <span>Plumbing of Texas</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#reviews" onClick={closeMenu}>Reviews</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-call" href={PHONE_HREF} onClick={closeMenu}>
              <Phone size={15} />
              Call Now
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" role="img" aria-label="Professional plumber working on residential plumbing" />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow light-eyebrow"><span className="eyebrow-line" /> Fort Worth, Texas</div>
              <h1>Reliable Plumbing.<br /><em>Honest Service.</em><br />Available Around the Clock.</h1>
              <p className="hero-lede">From unexpected plumbing problems to everyday repairs, Blue Diamond Plumbing of Texas is here to help. Get in touch for dependable plumbing assistance in Fort Worth, Texas.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={PHONE_HREF}>
                  <Phone size={18} /> Call Now – {PHONE}
                </a>
                <a className="button button-ghost" href="#contact">
                  Get Plumbing Assistance <ArrowRight size={17} />
                </a>
              </div>
              <div className="hero-proof" aria-label="Business highlights">
                <div className="proof-item"><span className="proof-icon"><Clock3 size={17} /></span><span><strong>24/7</strong><small>Open around the clock</small></span></div>
                <div className="proof-divider" />
                <div className="proof-item"><span className="proof-stars"><Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /></span><span><strong>4.7 / 5</strong><small>30 Google reviews</small></span></div>
              </div>
            </div>
          </div>
          <div className="hero-scroll-hint"><span /> Scroll to explore</div>
        </section>

        <section className="trust-strip" aria-label="Service promise">
          <div className="container trust-strip-inner">
            <span className="strip-label">When you need a plumber, you need a straight answer.</span>
            <span className="strip-rule" />
            <span className="strip-detail"><Sparkles size={16} /> Honest help. Clear communication. A call away.</span>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="about-card-main">
                <div className="about-card-number">BD</div>
                <div className="about-card-caption"><span>Blue Diamond</span><strong>Plumbing of Texas</strong></div>
              </div>
              <div className="about-stat"><strong>4.7</strong><span>Google rating<br />from 30 reviews</span><div className="stat-stars"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div></div>
              <span className="diamond-outline diamond-one" /><span className="diamond-outline diamond-two" />
            </div>
            <div className="about-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> The Blue Diamond standard</div>
              <h2>Plumbing Service Built on <em>Honesty</em> and Reliability.</h2>
              <p className="lead">Blue Diamond Plumbing of Texas is a local plumbing business owned by Cameron, focused on giving Fort Worth homeowners dependable help when they need it.</p>
              <p>Customers describe an honest and fair approach, clear communication, flexible scheduling, and responsive assistance. That means listening to the problem, keeping you informed, and treating your home and time with care.</p>
              <div className="check-list">
                <div><Check size={16} /> Honest and fair service</div>
                <div><Check size={16} /> Clear, straightforward communication</div>
                <div><Check size={16} /> Flexible scheduling when possible</div>
                <div><Check size={16} /> Attention to your plumbing problem</div>
              </div>
              <a className="text-link" href={PHONE_HREF}>Talk to Cameron <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading services-heading">
              <div><div className="eyebrow"><span className="eyebrow-line" /> What we can help with</div><h2>Practical help for <em>everyday</em> plumbing needs.</h2></div>
              <p>Whether it is a small repair or an unexpected issue, call to discuss what is happening in your home.</p>
            </div>
            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return <article className="service-card" key={service.title}>
                  <div className="service-topline"><span>{service.number}</span><Icon size={24} strokeWidth={1.6} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={PHONE_HREF} aria-label={`Call about ${service.title}`}>Discuss this service <ArrowRight size={15} /></a>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="section choose-section">
          <div className="container choose-grid">
            <div className="choose-intro"><div className="eyebrow light-eyebrow"><span className="eyebrow-line" /> Why Blue Diamond</div><h2>A plumbing company that puts <em>customers first.</em></h2><p>Good service starts with listening. Blue Diamond Plumbing of Texas keeps the focus on the problem in front of you and the communication that makes the next step clear.</p><a className="button button-light" href={PHONE_HREF}>Call {PHONE} <ArrowRight size={16} /></a></div>
            <div className="trust-points">
              {trustPoints.map((point) => { const Icon = point.icon; return <div className="trust-point" key={point.label}><span className="trust-icon"><Icon size={21} /></span><div><h3>{point.label}</h3><p>{point.detail}</p></div></div>; })}
              <div className="rating-card"><div className="rating-number">4.7</div><div><div className="rating-stars"><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /></div><strong>Verified Google rating</strong><span>30 customer reviews</span></div></div>
            </div>
          </div>
        </section>

        <section className="section reviews-section" id="reviews">
          <div className="container reviews-layout">
            <div className="reviews-heading"><div className="eyebrow"><span className="eyebrow-line" /> Customer feedback</div><h2>What Customers<br /><em>Are Saying.</em></h2><p>Review themes below reflect the feedback shared on the business profile. Read the original reviews on Google for the full customer experience.</p><a className="button button-outline" href={MAPS_URL} target="_blank" rel="noreferrer">Read reviews on Google <ExternalLink size={16} /></a></div>
            <div className="review-themes"><div className="review-score"><span className="score-value">4.7</span><span className="score-stars"><Star size={17} fill="currentColor" /><Star size={17} fill="currentColor" /><Star size={17} fill="currentColor" /><Star size={17} fill="currentColor" /><Star size={17} fill="currentColor" /></span><span>Based on 30 Google reviews</span></div><div className="theme-list"><div><CircleCheck size={18} /><span>Honest and fair pricing</span></div><div><CircleCheck size={18} /><span>Good communication</span></div><div><CircleCheck size={18} /><span>Flexible scheduling</span></div><div><CircleCheck size={18} /><span>Responsive to last-minute requests</span></div><div><CircleCheck size={18} /><span>Positive experiences with Cameron</span></div></div></div>
          </div>
        </section>

        <section className="urgent-banner">
          <div className="container urgent-inner"><div className="urgent-diamond" aria-hidden="true"><Droplets size={28} /></div><div><div className="eyebrow light-eyebrow"><span className="eyebrow-line" /> Around-the-clock availability</div><h2>Plumbing Problem? We're Open 24/7.</h2><p>Don't wait until a small plumbing problem becomes a bigger headache. Contact Blue Diamond Plumbing of Texas to discuss your plumbing needs.</p></div><a className="button button-light urgent-button" href={PHONE_HREF}><Phone size={18} /> Call {PHONE}</a></div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-info"><div className="eyebrow"><span className="eyebrow-line" /> Find your next step</div><h2>Let’s talk about<br /><em>your plumbing.</em></h2><p>Call directly for the fastest way to reach Blue Diamond Plumbing of Texas. You can also share a few details below and keep this page open as a direct phone option.</p><div className="contact-details"><a href={PHONE_HREF} className="contact-detail"><span><Phone size={19} /></span><div><small>Call anytime</small><strong>{PHONE}</strong></div></a><div className="contact-detail"><span><Droplets size={19} /></span><div><small>Visit or send directions</small><strong>5508 Eastwedge Dr<br />Fort Worth, TX 76137</strong></div></div><div className="contact-detail"><span><Clock3 size={19} /></span><div><small>Hours</small><strong>Open 24 hours<br />7 days a week</strong></div></div></div><a className="maps-link" href={MAPS_URL} target="_blank" rel="noreferrer">Get Google Maps directions <ExternalLink size={15} /></a></div>
            <div className="contact-form-card"><div className="form-heading"><span>01</span><div><h3>Tell us what’s going on.</h3><p>A few details help start the conversation.</p></div></div><form onSubmit={handleSubmit}><label>Name<input name="name" type="text" placeholder="Your name" required /></label><label>Phone number<input name="phone" type="tel" placeholder="Your phone number" required /></label><label>What do you need help with?<textarea name="issue" rows={4} placeholder="Briefly describe the plumbing issue" required /></label><button className="button button-primary form-submit" type="submit">Send request <ArrowRight size={17} /></button>{submitted && <div className="form-success" role="status"><CircleCheck size={18} /> Thanks — your request is ready to discuss. For urgent help, call <a href={PHONE_HREF}>{PHONE}</a>.</div>}<p className="form-fallback">Prefer to speak now? <a href={PHONE_HREF}>Call directly</a>.</p></form></div>
          </div>
        </section>

        <section className="map-section" aria-label="Business location">
          <iframe title="Blue Diamond Plumbing of Texas location map" src={MAP_EMBED_URL} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="map-caption"><span className="map-pin"><Droplets size={17} /></span><div><strong>Blue Diamond Plumbing of Texas</strong><span>5508 Eastwedge Dr · Fort Worth, TX 76137</span></div><a href={MAPS_URL} target="_blank" rel="noreferrer">Open in Google Maps <ExternalLink size={14} /></a></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M24 3 43 24 24 45 5 24 24 3Z" fill="none" stroke="currentColor" strokeWidth="2" /><path d="m24 10 12.5 14L24 38 11.5 24 24 10Z" fill="currentColor" opacity=".22" /><path d="m24 13 9.5 11-9.5 11-9.5-11L24 13Z" fill="currentColor" /></svg></span><span className="brand-copy"><strong>Blue Diamond</strong><span>Plumbing of Texas</span></span></a><p>Reliable plumbing assistance for Fort Worth, Texas.</p><a href={PHONE_HREF} className="footer-phone"><Phone size={15} /> {PHONE}</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Blue Diamond Plumbing of Texas</span><span>Open 24 hours · 7 days a week</span></div></footer>
      <a className="mobile-call-bar" href={PHONE_HREF}><Phone size={17} /> Call {PHONE}</a>
    </div>
  );
}
