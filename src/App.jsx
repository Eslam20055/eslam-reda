import './App.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Briefcase,
  CircuitBoard,
  ContactRound,
  Download,
  Earth,
  GraduationCap,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
  Zap,
} from 'lucide-react';

import profileImg from './assets/images/eslam-reda-profile.jpg';
import certIti from './assets/images/certificate-iti-fullstack.jpg';
import certPlc from './assets/images/certificate-ha-plc-basic.jpg';
import certClassic from './assets/images/certificate-ha-classic-control.jpg';
import certMotor from './assets/images/certificate-ha-motor-drive.jpg';
import certMam from './assets/images/certificate-mam-summer-training.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const staggerBlock = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Value' },
  { href: '#skills', label: 'Skills' },
  { href: '#journey', label: 'Journey' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
];

const metrics = [
  { value: '5+', label: 'Certified technical tracks' },
  { value: '120h', label: 'ITI full-stack program' },
  { value: '2025', label: 'Latest hands-on training year' },
];

const spotlightCards = [
  {
    icon: CircuitBoard,
    title: 'Automation & Control',
    description:
      'Practical PLC logic, classical control, motor drives, and panel-minded engineering thinking.',
  },
  {
    icon: Zap,
    title: 'Electrical Power',
    description:
      'Low-voltage systems, protection awareness, testing discipline, and energy efficiency focus.',
  },
  {
    icon: Workflow,
    title: 'Professional Delivery',
    description:
      'Clean digital presentation, structured communication, and a polished portfolio experience.',
  },
];

const serviceCards = [
  {
    title: 'Technical Presence',
    text: 'A profile that clearly communicates engineering capability, growth mindset, and professional discipline.',
  },
  {
    title: 'Cross-Disciplinary Value',
    text: 'A rare mix of electrical power, industrial automation, and web delivery that helps bridge technical and business needs.',
  },
  {
    title: 'Ready-to-Grow Mindset',
    text: 'Strong learning speed, practical training exposure, and clear enthusiasm for internships, junior roles, and real-world execution.',
  },
];

const skillGroups = [
  {
    title: 'Automation & Control',
    items: ['PLC Programming', 'Classic Control', 'Motor & Drive Control', 'Industrial Sensors', 'MCC & ATS Panels', 'Commissioning Support'],
  },
  {
    title: 'Electrical Systems',
    items: ['Low Voltage Panels', 'Power Factor Correction', 'Energy Efficiency', 'Testing & QA', 'Safety Practices', 'Schneider Solutions'],
  },
  {
    title: 'Web & Software',
    items: ['React + Vite', 'JavaScript', 'Tailwind CSS', 'Laravel & PHP', 'MySQL', 'UI Presentation'],
  },
];

const timeline = [
  {
    year: '2025',
    icon: Briefcase,
    title: 'Summer Training',
    company: 'MAM Engineering Industries',
    summary:
      'Worked around low-voltage panel workflows, MCC, ATS, power factor correction, and quality-first industrial practices.',
  },
  {
    year: '2025',
    icon: GraduationCap,
    title: 'ITI Full-Stack Program',
    company: 'Information Technology Institute',
    summary:
      'Completed an intensive web development track covering front-end foundations, PHP, Laravel, and database workflows.',
  },
];

const certificates = [
  {
    img: certIti,
    title: 'Full Stack Web Development',
    issuer: 'Information Technology Institute',
    desc: 'A 120-hour immersive track in client-side fundamentals, backend basics, PHP, Laravel, and MySQL.',
    accent: 'Digital expansion',
  },
  {
    img: certPlc,
    title: 'PLC Basic Programming',
    issuer: 'HA Consulting Group',
    desc: 'Core PLC logic and programming principles for industrial automation environments.',
    accent: 'Excellent grade',
  },
  {
    img: certClassic,
    title: 'Classic Control',
    issuer: 'HA Consulting Group',
    desc: 'Focused study in relays, contactors, timers, and foundational motor control systems.',
    accent: 'Excellent grade',
  },
  {
    img: certMotor,
    title: 'Electric Motor & Drive Programming',
    issuer: 'HA Consulting Group',
    desc: 'Motor control and drive programming training across practical industrial scenarios.',
    accent: 'Excellent grade',
  },
  {
    img: certMam,
    title: 'Summer Training - LV Panels',
    issuer: 'MAM Engineering Industries',
    desc: 'Hands-on exposure to panel assembly, ATS, MCC, power factor correction, and Schneider-based solutions.',
    accent: 'Industrial exposure',
  },
];

const contactCards = [
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
    value: 'Professional profile',
    href: 'https://www.linkedin.com/in/eslam-reda-5b1129382',
  },
  {
    icon: Earth,
    title: 'GitHub',
    value: 'Projects and code samples',
    href: 'https://github.com/Eslam20055',
  },
];

function SectionHeading({ eyebrow, title, text, align = 'center' }) {
  return (
    <motion.div
      className={`section-heading ${align === 'left' ? 'left-aligned' : ''}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
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
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <header className="topbar">
        <div className="container nav-inner">
          <a href="#hero" className="brand" onClick={closeMenu}>
            <span className="brand-mark">ER</span>
            <span>
              Eslam Reda
              <small>Electrical Power, Automation, and Technical Delivery</small>
            </span>
          </a>

          <div className="nav-links desktop-only">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <a href="/cv.pdf" download className="nav-cta desktop-only">
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
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
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
          <div className="container hero-grid">
            <motion.div
              className="hero-copy"
              variants={staggerBlock}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="eyebrow" variants={fadeInUp} transition={{ duration: 0.6 }}>
                <Sparkles size={16} />
                Built to create a strong first impression
              </motion.div>

              <motion.h1 variants={fadeInUp} transition={{ duration: 0.8, ease: 'easeOut' }}>
                A modern engineering portfolio that feels
                <span> confident, polished, and immediately credible.</span>
              </motion.h1>

              <motion.p className="hero-lead" variants={fadeInUp} transition={{ duration: 0.8 }}>
                I am Eslam Reda Yassen, an Electrical Power Engineering student building a professional path across
                industrial automation, low-voltage systems, and digital presentation. This portfolio is designed to
                reflect precision, ambition, and real technical momentum.
              </motion.p>

              <motion.div className="hero-actions" variants={fadeInUp} transition={{ duration: 0.8 }}>
                <a href="#contact" className="button button-primary">
                  Hire or collaborate
                  <ArrowUpRight size={18} />
                </a>
                <a href="#credentials" className="button button-secondary">
                  Explore credentials
                </a>
              </motion.div>

              <motion.div className="metrics-grid" variants={staggerBlock}>
                {metrics.map((metric) => (
                  <motion.article
                    key={metric.label}
                    className="metric-card"
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                  >
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </motion.article>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <div className="hero-orbit hero-orbit-one" />
              <div className="hero-orbit hero-orbit-two" />

              <motion.div
                className="profile-frame"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="profile-badge">
                  <BadgeCheck size={16} />
                  Open for internships, junior roles, and serious collaborations
                </div>

                <img src={profileImg} alt="Eslam Reda Yassen portrait" className="profile-image" />

                <div className="profile-grid">
                  <div className="profile-mini-card">
                    <ShieldCheck size={18} />
                    <div>
                      <strong>Reliable execution</strong>
                      <span>Focused on structured, practical engineering work.</span>
                    </div>
                  </div>
                  <div className="profile-mini-card">
                    <Award size={18} />
                    <div>
                      <strong>Recent credentials</strong>
                      <span>Training and certificates that support real capability.</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="hero-floating hero-floating-top"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span>Automation mindset</span>
                <strong>Systems-oriented and growth-ready</strong>
              </motion.div>

              <motion.div
                className="hero-floating hero-floating-bottom"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span>Presentation quality</span>
                <strong>Designed to feel premium on every screen</strong>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Profile"
              title="The portfolio now tells a stronger story before anyone starts reading deeply."
              text="Instead of feeling like a simple resume page, the experience highlights professionalism, structure, and technical range from the very first screen."
            />

            <motion.div
              className="spotlight-grid"
              variants={staggerBlock}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {spotlightCards.map(({ icon: Icon, title, description }) => (
                <motion.article
                  key={title}
                  className="spotlight-card"
                  variants={fadeInUp}
                  transition={{ duration: 0.6 }}
                >
                  <div className="feature-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="services" className="section section-alt">
          <div className="container">
            <SectionHeading
              eyebrow="Value"
              title="A cleaner, more convincing positioning for employers and clients."
              text="This layout frames your background as a complete professional profile: technically grounded, visually polished, and easy to trust."
            />

            <motion.div
              className="service-grid"
              variants={staggerBlock}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {serviceCards.map((card) => (
                <motion.article
                  key={card.title}
                  className="service-card"
                  variants={fadeInUp}
                  transition={{ duration: 0.65 }}
                >
                  <div className="service-index" />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span className="service-link">
                    Professional signal
                    <ArrowRight size={16} />
                  </span>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Capabilities"
              title="Skills are grouped into structured capability blocks instead of a crowded list."
              text="That makes the experience easier to scan and helps recruiters or clients instantly understand the type of value you bring."
            />

            <motion.div
              className="skills-grid"
              variants={staggerBlock}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skillGroups.map((group) => (
                <motion.article
                  key={group.title}
                  className="skill-card"
                  variants={fadeInUp}
                  transition={{ duration: 0.6 }}
                >
                  <div className="skill-card-top">
                    <h3>{group.title}</h3>
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="bullet-dot" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="journey" className="section section-alt">
          <div className="container split-layout">
            <div>
              <SectionHeading
                eyebrow="Journey"
                title="Recent milestones are presented as a professional growth timeline."
                text="The section now feels more intentional and gives hiring teams a quick narrative of your development path."
                align="left"
              />
            </div>

            <motion.div
              className="timeline"
              variants={staggerBlock}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {timeline.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={`${item.year}-${item.title}`}
                    className="timeline-card"
                    variants={fadeInUp}
                    transition={{ duration: 0.65 }}
                  >
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-icon">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p className="timeline-company">{item.company}</p>
                      <p className="timeline-summary">{item.summary}</p>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section id="credentials" className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Credentials"
              title="Certificates are arranged like a curated showcase, not just uploaded images."
              text="Images now live inside a premium gallery layout with stronger hierarchy, cleaner spacing, and hover motion that feels modern and controlled."
            />

            <motion.div
              className="gallery-grid"
              variants={staggerBlock}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {certificates.map((cert, index) => (
                <motion.article
                  key={cert.title}
                  className={`gallery-card ${index === 0 ? 'gallery-card-featured' : ''}`}
                  variants={fadeInUp}
                  transition={{ duration: 0.65 }}
                >
                  <div className="gallery-media">
                    <img src={cert.img} alt={cert.title} className="gallery-image" />
                  </div>
                  <div className="gallery-body">
                    <div className="cert-note">{cert.accent}</div>
                    <h3>{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-desc">{cert.desc}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-shell">
            <SectionHeading
              eyebrow="Contact"
              title="A closing section that feels premium, clear, and easy to act on."
              text="Whether someone is hiring, partnering, or reviewing your work, the final impression stays polished and direct."
              align="left"
            />

            <motion.div
              className="contact-grid"
              variants={staggerBlock}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {contactCards.map(({ icon: Icon, title, value, href }) => (
                <motion.a
                  key={title}
                  href={href}
                  className="contact-card"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  variants={fadeInUp}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={20} />
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
        <div className="container footer-inner">
          <p>© 2026 Eslam Reda Yassen. Engineered to make a stronger first impression.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
