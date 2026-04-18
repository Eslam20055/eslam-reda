import './App.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CircuitBoard,
  ContactRound,
  Download,
  Earth,
  GraduationCap,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
  X,
  Zap,
} from 'lucide-react';

import profileImg from './assets/images/eslam-reda-profile.jpg';
import certIti from './assets/images/certificate-iti-fullstack.jpg';
import certPlc from './assets/images/certificate-ha-plc-basic.jpg';
import certClassic from './assets/images/certificate-ha-classic-control.jpg';
import certMotor from './assets/images/certificate-ha-motor-drive.jpg';
import certMam from './assets/images/certificate-mam-summer-training.jpg';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navLinks = [
  { href: '#profile', label: 'Profile' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#journey', label: 'Journey' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
];

const trustStats = [
  { value: 'Electrical Power', label: 'Engineering foundation' },
  { value: 'Automation', label: 'PLC and control mindset' },
  { value: '5 Certificates', label: 'Recent proof of progress' },
];

const pillars = [
  {
    icon: Zap,
    title: 'Power Systems',
    text: 'Low-voltage systems, panels, testing awareness, and practical electrical discipline.',
  },
  {
    icon: CircuitBoard,
    title: 'Automation Logic',
    text: 'Classic control, PLC basics, drive programming, and industrial workflow thinking.',
  },
  {
    icon: Wrench,
    title: 'Execution Quality',
    text: 'Clean communication, presentable delivery, and a professional standard in every detail.',
  },
];

const expertiseColumns = [
  {
    title: 'Engineering Focus',
    items: ['Low Voltage Panels', 'MCC and ATS Systems', 'Power Factor Correction', 'Testing and QA Awareness'],
  },
  {
    title: 'Automation Skills',
    items: ['PLC Programming', 'Classic Control', 'Motor and Drive Control', 'Industrial Sensors'],
  },
  {
    title: 'Digital Advantage',
    items: ['React and Vite', 'Portfolio UI Systems', 'Laravel and PHP Basics', 'Structured Technical Presentation'],
  },
];

const journey = [
  {
    year: '2025',
    icon: BriefcaseBusiness,
    title: 'MAM Engineering Industries',
    subtitle: 'Summer Training',
    text: 'Practical exposure to LV panel work, ATS, MCC, Schneider-based systems, and professional industrial routines.',
  },
  {
    year: '2025',
    icon: GraduationCap,
    title: 'Information Technology Institute',
    subtitle: 'Full-Stack Program',
    text: 'Completed a 120-hour training path in front-end foundations, PHP, Laravel, and database-backed development.',
  },
];

const credentials = [
  {
    image: certIti,
    title: 'Full Stack Web Development',
    org: 'Information Technology Institute',
    note: '120-hour intensive track',
  },
  {
    image: certPlc,
    title: 'PLC Basic Programming',
    org: 'HA Consulting Group',
    note: 'Excellent grade',
  },
  {
    image: certClassic,
    title: 'Classic Control',
    org: 'HA Consulting Group',
    note: 'Excellent grade',
  },
  {
    image: certMotor,
    title: 'Electric Motor and Drive Programming',
    org: 'HA Consulting Group',
    note: 'Excellent grade',
  },
  {
    image: certMam,
    title: 'Summer Training in LV Panels',
    org: 'MAM Engineering Industries',
    note: 'Industrial exposure',
  },
];

const contactItems = [
  {
    icon: Mail,
    title: 'Email',
    value: 'eslamyassen6666@gmail.com',
    href: 'mailto:eslamyassen6666@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+20 155 996 8209',
    href: 'tel:+201559968209',
  },
  {
    icon: ContactRound,
    title: 'LinkedIn',
    value: 'View professional profile',
    href: 'https://www.linkedin.com/in/eslam-reda-5b1129382',
  },
  {
    icon: Earth,
    title: 'GitHub',
    value: 'See technical work',
    href: 'https://github.com/Eslam20055',
  },
];

function BlockTitle({ eyebrow, title, text, left = false }) {
  return (
    <motion.div
      className={`block-title ${left ? 'left' : ''}`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </motion.div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise-layer" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <header className="topbar">
        <div className="container nav-row">
          <a href="#hero" className="brand" onClick={closeMenu}>
            <span className="brand-mark">ER</span>
            <span>
              Eslam Reda
              <small>Electrical Power and Automation Engineer in Progress</small>
            </span>
          </a>

          <nav className="nav-links desktop-only">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="/cv.pdf" download className="header-cta desktop-only">
            Resume
            <Download size={16} />
          </a>

          <button
            type="button"
            className="menu-toggle mobile-only"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            className="mobile-panel mobile-only"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a href="/cv.pdf" download onClick={closeMenu}>
              Resume
            </a>
          </motion.div>
        )}
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="container hero-layout">
            <motion.div
              className="hero-copy"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="hero-chip" variants={reveal} transition={{ duration: 0.6 }}>
                <Star size={14} />
                Premium engineering portfolio
              </motion.div>

              <motion.h1 variants={reveal} transition={{ duration: 0.8 }}>
                A sharper digital presence for an engineer building real technical credibility.
              </motion.h1>

              <motion.p className="hero-text" variants={reveal} transition={{ duration: 0.75 }}>
                Electrical Power Engineering student with hands-on training in low-voltage systems, industrial
                automation, PLC fundamentals, and technical delivery. Built to present serious potential with a more
                executive and trustworthy visual identity.
              </motion.p>

              <motion.div className="hero-actions" variants={reveal} transition={{ duration: 0.7 }}>
                <a href="#contact" className="button button-primary">
                  Let&apos;s connect
                  <ArrowUpRight size={18} />
                </a>
                <a href="#credentials" className="button button-secondary">
                  View certificates
                </a>
              </motion.div>

              <motion.div className="hero-trustbar" variants={stagger}>
                {trustStats.map((item) => (
                  <motion.div
                    key={item.value}
                    className="trust-item"
                    variants={reveal}
                    transition={{ duration: 0.6 }}
                  >
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <motion.div
                className="portrait-panel"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="portrait-topline">
                  <span>Selected profile</span>
                  <BadgeCheck size={16} />
                </div>

                <img src={profileImg} alt="Eslam Reda Yassen" className="portrait-image" />

                <div className="portrait-caption">
                  <h3>Eslam Reda Yassen</h3>
                  <p>Power engineering, industrial automation, and clean professional delivery.</p>
                </div>
              </motion.div>

              <motion.div
                className="floating floating-a"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ShieldCheck size={18} />
                <div>
                  <strong>Disciplined execution</strong>
                  <span>Clear, structured, and reliable.</span>
                </div>
              </motion.div>

              <motion.div
                className="floating floating-b"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Zap size={18} />
                <div>
                  <strong>Industrial focus</strong>
                  <span>Panels, control, and practical systems thinking.</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="profile" className="section">
          <div className="container">
            <BlockTitle
              eyebrow="Profile"
              title="Designed to feel closer to a senior engineer’s personal brand than a basic student template."
              text="The layout emphasizes confidence, restraint, hierarchy, and polish. It is intentionally cleaner and more premium so the first impression feels serious and memorable."
            />

            <motion.div
              className="pillar-grid"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {pillars.map(({ icon: Icon, title, text }) => (
                <motion.article
                  key={title}
                  className="pillar-card"
                  variants={reveal}
                  transition={{ duration: 0.6 }}
                >
                  <div className="pillar-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="expertise" className="section section-contrast">
          <div className="container editorial-layout">
            <BlockTitle
              eyebrow="Expertise"
              title="Capabilities are presented in a deliberate, editorial way instead of crowded skill boxes."
              text="That helps recruiters and clients scan your strengths quickly and feel a stronger level of control, maturity, and professionalism."
              left
            />

            <motion.div
              className="expertise-board"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {expertiseColumns.map((column) => (
                <motion.article
                  key={column.title}
                  className="expertise-column"
                  variants={reveal}
                  transition={{ duration: 0.65 }}
                >
                  <h3>{column.title}</h3>
                  <ul>
                    {column.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="journey" className="section">
          <div className="container">
            <BlockTitle
              eyebrow="Journey"
              title="Professional growth is shown with more structure and stronger visual rhythm."
              text="The timeline feels less like notes on a page and more like a concise progression of real milestones."
            />

            <motion.div
              className="journey-grid"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {journey.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    className="journey-card"
                    variants={reveal}
                    transition={{ duration: 0.65 }}
                  >
                    <div className="journey-meta">
                      <span>{item.year}</span>
                      <div className="journey-badge">
                        <Icon size={18} />
                      </div>
                    </div>
                    <h3>{item.title}</h3>
                    <p className="journey-subtitle">{item.subtitle}</p>
                    <p className="journey-text">{item.text}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section id="credentials" className="section section-contrast">
          <div className="container">
            <BlockTitle
              eyebrow="Credentials"
              title="Certificates now read like a curated credentials gallery with better framing and stronger visual order."
              text="The image treatment is cleaner, spacing is more controlled, and the cards feel closer to premium case-study panels."
            />

            <motion.div
              className="credentials-showcase"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
            >
              {credentials.map((item, index) => (
                <motion.article
                  key={item.title}
                  className={`credential-card ${index === 0 ? 'credential-featured' : ''}`}
                  variants={reveal}
                  transition={{ duration: 0.65 }}
                >
                  <div className="credential-image-wrap">
                    <img src={item.image} alt={item.title} className="credential-image" />
                  </div>

                  <div className="credential-body">
                    <div className="credential-note">{item.note}</div>
                    <h3>{item.title}</h3>
                    <p>{item.org}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-shell">
            <BlockTitle
              eyebrow="Contact"
              title="A closing section with enough polish to leave the right final impression."
              text="The contact area is intentionally quiet and premium so the page ends with confidence instead of clutter."
              left
            />

            <motion.div
              className="contact-grid"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {contactItems.map(({ icon: Icon, title, value, href }) => (
                <motion.a
                  key={title}
                  href={href}
                  className="contact-card"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  variants={reveal}
                  transition={{ duration: 0.6 }}
                >
                  <div className="contact-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <strong>{title}</strong>
                    <span>{value}</span>
                  </div>
                  <ArrowUpRight size={18} className="contact-arrow" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-row">
          <p>© 2026 Eslam Reda Yassen</p>
          <p>Professional engineering portfolio</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
