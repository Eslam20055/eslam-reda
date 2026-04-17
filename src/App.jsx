import './App.css';
import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Briefcase,
  CircuitBoard,
  ContactRound,
  Download,
  Earth,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';

import profileImg from './assets/images/eslam-reda-profile.jpg';
import certIti from './assets/images/certificate-iti-fullstack.jpg';
import certPlc from './assets/images/certificate-ha-plc-basic.jpg';
import certClassic from './assets/images/certificate-ha-classic-control.jpg';
import certMotor from './assets/images/certificate-ha-motor-drive.jpg';
import certMam from './assets/images/certificate-mam-summer-training.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { href: '#about', label: 'About' },
      { href: '#skills', label: 'Expertise' },
      { href: '#experience', label: 'Journey' },
      { href: '#certificates', label: 'Credentials' },
      { href: '#contact', label: 'Contact' },
    ],
    [],
  );

  const metrics = [
    { value: '5+', label: 'Technical certificates' },
    { value: '120h', label: 'ITI full-stack program' },
    { value: '2 tracks', label: 'Engineering and web' },
  ];

  const strengths = [
    {
      icon: CircuitBoard,
      title: 'Industrial Automation',
      description:
        'PLC logic, classic control, motor drives, and panel-oriented thinking with strong practical grounding.',
    },
    {
      icon: Zap,
      title: 'Electrical Power',
      description:
        'Low-voltage systems, power factor correction, testing workflows, and energy-efficiency awareness.',
    },
    {
      icon: Layers3,
      title: 'Digital Delivery',
      description:
        'Modern front-end and full-stack fundamentals to present technical work in a polished, business-ready way.',
    },
  ];

  const skillGroups = [
    {
      title: 'Automation & Control',
      icon: CircuitBoard,
      items: ['PLC Programming', 'Classic Control', 'Motor & Drive Control', 'Industrial Sensors', 'MCC & ATS Panels', 'Commissioning Support'],
    },
    {
      title: 'Electrical Systems',
      icon: Zap,
      items: ['Low Voltage Panels', 'Power Factor Correction', 'Energy Efficiency', 'Testing & QA', 'Safety Practices', 'Schneider Solutions'],
    },
    {
      title: 'Web & Software',
      icon: Layers3,
      items: ['React + Vite', 'Tailwind CSS', 'JavaScript', 'Laravel & PHP', 'MySQL', 'Portfolio UI Development'],
    },
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Summer Training',
      company: 'MAM Engineering Industries',
      summary:
        'Hands-on exposure to low-voltage panel workflows including MCC, ATS, power factor correction, safety, and quality practices.',
    },
    {
      year: '2025',
      title: 'ITI Full-Stack Program',
      company: 'Information Technology Institute',
      summary:
        'Completed an intensive 120-hour web development track covering client-side foundations, PHP, Laravel, and database work.',
    },
  ];

  const certificates = [
    {
      img: certIti,
      title: 'Full Stack Web Development',
      issuer: 'Information Technology Institute (ITI)',
      desc: '120-hour intensive course covering client-side technologies, MySQL, Laravel, and PHP.',
      note: 'Career expansion',
    },
    {
      img: certPlc,
      title: 'PLC Basic Programming',
      issuer: 'HA Consulting Group',
      desc: 'Practical training in PLC logic, programming, and industrial automation fundamentals.',
      note: 'Grade: Excellent',
    },
    {
      img: certClassic,
      title: 'Classic Control',
      issuer: 'HA Consulting Group',
      desc: 'Focused study of relays, contactors, timers, and traditional motor control circuits.',
      note: 'Grade: Excellent',
    },
    {
      img: certMotor,
      title: 'Electric Motor & Drive Programming',
      issuer: 'HA Consulting Group',
      desc: 'Training on electric motor control using variable frequency drives and related automation scenarios.',
      note: 'Grade: Excellent',
    },
    {
      img: certMam,
      title: 'Summer Training - LV Panels',
      issuer: 'MAM Engineering Industries',
      desc: 'Hands-on summer training in panel assembly, MCC, ATS, power factor correction, and Schneider-based solutions.',
      note: 'Industrial exposure',
    },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="topbar">
        <div className="container nav-inner">
          <a href="#hero" className="brand" onClick={closeMenu}>
            <span className="brand-mark">ER</span>
            <span>
              Eslam Reda
              <small>Electrical Power & Automation</small>
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
          <div className="mobile-panel mobile-only">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a href="/cv.pdf" download onClick={closeMenu}>
              Resume
            </a>
          </div>
        )}
      </nav>

      <main>
        <section id="hero" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <Sparkles size={16} />
                Engineering precision with modern presentation
              </div>

              <h1>
                Building a sharper profile at the intersection of
                <span> power engineering, industrial automation, and web delivery.</span>
              </h1>

              <p className="hero-lead">
                I am Eslam Reda Yassen, an Electrical Power Engineering student with practical training in low-voltage systems,
                control panels, PLC programming, and a growing full-stack toolkit for presenting technical value clearly.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="button button-primary">
                  Let&apos;s work together
                  <ArrowUpRight size={18} />
                </a>
                <a href="#certificates" className="button button-secondary">
                  View credentials
                </a>
              </div>

              <div className="metrics-grid">
                {metrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="profile-frame">
                <div className="profile-badge">
                  <BadgeCheck size={16} />
                  Available for internships and growth-focused roles
                </div>
                <img
                  src={profileImg}
                  alt="Eslam Reda Yassen portrait"
                  className="profile-image"
                />
              </div>

              <div className="floating-card card-top">
                <ShieldCheck size={18} />
                <div>
                  <strong>Automation mindset</strong>
                  <span>Reliable, practical, systems-oriented.</span>
                </div>
              </div>

              <div className="floating-card card-bottom">
                <Award size={18} />
                <div>
                  <strong>Certified learning path</strong>
                  <span>Engineering depth backed by recent credentials.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-heading">
              <span>Profile</span>
              <h2>Presenting a stronger professional story, not just a list of skills.</h2>
              <p>
                My focus is on becoming a well-rounded engineer who can move comfortably between electrical systems,
                industrial automation, and digital tools. That combination helps me communicate technical value with
                clarity and confidence.
              </p>
            </div>

            <div className="feature-grid">
              {strengths.map(({ icon: Icon, title, description }) => (
                <article key={title} className="feature-card">
                  <div className="feature-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <div className="section-heading compact">
              <span>Expertise</span>
              <h2>Capability blocks designed around real engineering work.</h2>
            </div>

            <div className="skills-grid">
              {skillGroups.map(({ title, icon: Icon, items }) => (
                <article key={title} className="skill-card">
                  <div className="skill-card-top">
                    <div className="feature-icon">
                      <Icon size={20} />
                    </div>
                    <h3>{title}</h3>
                  </div>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>
                        <span className="bullet-dot" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <div className="section-heading compact">
              <span>Journey</span>
              <h2>Training experiences that shape the way I work.</h2>
            </div>

            <div className="timeline">
              {timeline.map((item) => (
                <article key={`${item.year}-${item.title}`} className="timeline-card">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-icon">
                    {item.title.includes('ITI') ? <GraduationCap size={20} /> : <Briefcase size={20} />}
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="timeline-company">{item.company}</p>
                    <p className="timeline-summary">{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span>Credentials</span>
              <h2>Certificates presented as proof of momentum and technical credibility.</h2>
              <p>
                Each certificate supports a practical direction in my profile, from control systems and motor drives
                to web development and industrial exposure.
              </p>
            </div>

            <div className="cert-grid">
              {certificates.map((cert) => (
                <article key={cert.title} className="cert-card">
                  <div className="cert-image-wrap">
                    <img src={cert.img} alt={cert.title} className="cert-image" />
                  </div>
                  <div className="cert-body">
                    <div className="cert-note">{cert.note}</div>
                    <h3>{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-desc">{cert.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-shell">
            <div className="section-heading compact left-aligned">
              <span>Contact</span>
              <h2>Open to internships, collaborations, and engineering opportunities.</h2>
              <p>
                If you are looking for someone with strong learning drive, technical curiosity, and a clean professional
                presence, let&apos;s connect.
              </p>
            </div>

            <div className="contact-grid">
              <a href="mailto:eslamyassen6666@gmail.com" className="contact-card">
                <Mail size={20} />
                <div>
                  <strong>Email</strong>
                  <span>eslamyassen6666@gmail.com</span>
                </div>
              </a>

              <a href="tel:+201559968209" className="contact-card">
                <Phone size={20} />
                <div>
                  <strong>Phone</strong>
                  <span>+20 155 996 8209</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/eslam-reda-5b1129382"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <ContactRound size={20} />
                <div>
                  <strong>LinkedIn</strong>
                  <span>Professional profile</span>
                </div>
              </a>

              <a
                href="https://github.com/Eslam20055"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <Earth size={20} />
                <div>
                  <strong>GitHub</strong>
                  <span>Projects and code samples</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Eslam Reda Yassen. Crafted with React and a sharper professional identity.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
