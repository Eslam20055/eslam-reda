import './App.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CircuitBoard,
  ContactRound,
  Download,
  Earth,
  FolderKanban,
  GraduationCap,
  Mail,
  Menu,
  MessageCircle,
  PlayCircle,
  Star,
  Wrench,
  X,
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
  { href: '#projects', label: 'Projects' },
  { href: '#credentials', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

const trustStats = [
  { value: 'Power Engineer', label: 'Main professional identity' },
  { value: 'Control Systems', label: 'Automation and PID mindset' },
  { value: 'Industrial Training', label: 'Focused practical development' },
];

const pillars = [
  {
    icon: Zap,
    title: 'Electrical Power First',
    text: 'My main track is Electrical Power Engineering with strong interest in energy systems, industrial applications, and practical field-oriented thinking.',
  },
  {
    icon: CircuitBoard,
    title: 'Control and Automation',
    text: 'I build on that foundation through PLC basics, classic control, motor drives, and model-based control ideas.',
  },
  {
    icon: Wrench,
    title: 'Professional Presentation',
    text: 'I focus on presenting engineering work in a clear, organized, and professional way that reflects practical skill and serious technical direction.',
  },
];

const expertiseColumns = [
  {
    title: 'Power Engineering Focus',
    items: ['Low Voltage Panels', 'MCC and ATS Systems', 'Power Factor Correction', 'Industrial Electrical Practice'],
  },
  {
    title: 'Control and Automation',
    items: ['PLC Programming Basics', 'Classic Control', 'Motor and Drive Control', 'PID-Oriented System Thinking'],
  },
  {
    title: 'Engineering Tools',
    items: ['Technical Documentation', 'Project Presentation', 'Engineering Reports', 'Structured Workflow'],
  },
];

const journey = [
  {
    year: '2025',
    icon: BriefcaseBusiness,
    title: 'MAM Engineering Industries',
    subtitle: 'Summer Training',
    text: 'Hands-on exposure to LV panels, ATS, MCC, Schneider-based equipment, and the discipline of industrial electrical work.',
  },
  {
    year: '2025',
    icon: GraduationCap,
    title: 'ITI Training',
    subtitle: 'Additional technical development',
    text: 'Completed additional training as part of my broader technical development, while keeping my main professional direction centered on Electrical Power Engineering.',
  },
];

const projects = [
  {
    title: 'Nonlinear Two-Tank Water Level Control System',
    subtitle: 'MATLAB / Simulink project',
    description:
      'A nonlinear two-tank water level control system using PID controllers, designed to maintain stable levels and reject disturbances based on a physics-based model aligned with MathWorks practice.',
    highlights: ['PID-based level regulation', 'Disturbance rejection study', 'Physics-based modeling workflow'],
    video: '/projects/matlab-two-tank-overview.mp4',
    images: [
      '/projects/matlab-two-tank-01.jpg',
      '/projects/matlab-two-tank-02.jpg',
      '/projects/matlab-two-tank-03.jpg',
    ],
  },
];

const credentials = [
  {
    image: certMam,
    title: 'Summer Training in LV Panels',
    org: 'MAM Engineering Industries',
    note: 'Industrial exposure',
  },
  {
    image: certPlc,
    title: 'PLC Basic Control',
    org: 'Industrial Automation Training',
    note: 'Control systems foundation',
  },
  {
    image: certClassic,
    title: 'Classic Control',
    org: 'Industrial Control Training',
    note: 'Industrial control basics',
  },
  {
    image: certMotor,
    title: 'Electric Motor and Drive Control',
    org: 'Drive and Motor Control Training',
    note: 'Drive application skills',
  },
  {
    image: '/certificates/certificate-schneider-electric-energy-efficiency.jpg',
    title: 'Energy Efficiency Using Speed Control Techniques',
    org: 'Schneider Electric',
    note: 'Energy efficiency focus',
  },
  {
    image: certIti,
    title: 'ITI Full Stack Training',
    org: 'Information Technology Institute',
    note: 'Additional certificate',
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
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+20 155 996 8209',
    href: 'https://wa.me/201559968209',
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
              <small>Electrical Power Engineer</small>
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
                Power engineering portfolio
              </motion.div>

              <motion.h1 variants={reveal} transition={{ duration: 0.8 }}>
                Electrical Power Engineer | Industrial Automation &amp; Control Systems
              </motion.h1>

              <motion.p className="hero-text" variants={reveal} transition={{ duration: 0.75 }}>
                Focused on power systems, industrial automation, control applications, and practical engineering
                training with a professional portfolio that reflects clear technical direction.
              </motion.p>

              <motion.div className="hero-actions" variants={reveal} transition={{ duration: 0.7 }}>
                <a href="#projects" className="button button-primary">
                  View projects
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
                <img src={profileImg} alt="Eslam Reda Yassen" className="portrait-image" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="profile" className="section">
          <div className="container">
            <BlockTitle
              eyebrow="Profile"
              title="This portfolio now presents you clearly as an Electrical Power Engineer with a focused, professional identity."
              text="The content keeps attention on your engineering direction, practical training, and readiness for professional opportunities."
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
              title="Your skills are grouped to keep the message clear: power systems, automation, and practical engineering tools."
              text="That structure makes the portfolio easier to scan and keeps your technical identity aligned with Electrical Power Engineering."
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
              title="Training milestones now reflect your growth in power engineering, industrial practice, and technical communication."
              text="This gives the timeline a cleaner and more professional story without shifting focus away from your engineering path."
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

        <section id="projects" className="section section-contrast">
          <div className="container">
            <BlockTitle
              eyebrow="Projects"
              title="Your engineering project is presented as a focused case study with video and supporting visuals."
              text="The layout keeps attention on the technical work itself and feels cleaner on both desktop and mobile."
            />

            <motion.div
              className="project-grid"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
            >
              {projects.map((project) => (
                <motion.article
                  key={project.title}
                  className="project-card"
                  variants={reveal}
                  transition={{ duration: 0.65 }}
                >
                  <div className="project-head">
                    <div>
                      <div className="project-kicker">
                        <FolderKanban size={16} />
                        Featured engineering project
                      </div>
                      <h3>{project.title}</h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-highlights">
                    {project.highlights.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <div className="project-media">
                    <div className="project-video">
                      <div className="media-label">
                        <PlayCircle size={16} />
                        Demo video
                      </div>
                      <video controls preload="metadata" poster={project.images[0]}>
                        <source src={project.video} type="video/mp4" />
                      </video>
                    </div>

                    <div className="project-gallery">
                      {project.images.map((image, index) => (
                        <figure key={image} className="project-shot">
                          <img src={image} alt={`${project.title} visual ${index + 1}`} />
                          <figcaption>Project visual {index + 1}</figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

          </div>
        </section>

        <section id="credentials" className="section">
          <div className="container">
            <BlockTitle
              eyebrow="Certificates"
              title="The certificates section is now focused on your original electrical and automation training."
              text="The programming certificate is kept only as a small additional certificate at the very end."
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
                  key={`${item.title}-${item.org}`}
                  className={`credential-card ${index === credentials.length - 1 ? 'credential-card-compact' : ''}`}
                  variants={reveal}
                  transition={{ duration: 0.65 }}
                >
                  <img src={item.image} alt={item.title} className="credential-image" />

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
              title="A clean closing section keeps the final impression professional and focused."
              text="It gives the page a calm finish while making it easy to reach you for engineering, automation, or technical collaboration."
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
          <p>Electrical power engineering portfolio</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
