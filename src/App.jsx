import './App.css'

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Eslam Reda</h1>
          <div className="hidden md:flex gap-8 text-gray-300 font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-blue-500">Eslam Reda Yassen</span>
            </h1>
            <p className="text-2xl text-gray-400">Electrical Power Engineering Student</p>
            <p className="text-lg text-gray-300 max-w-lg">
              Passionate about Industrial Automation, PLC Programming,
              Smart Energy Systems, and Full-Stack Web Development.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <a href="#projects"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300">
                View My Projects
              </a>
              <a href="#contact"
                className="border border-gray-600 hover:border-white px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300">
                Contact Me
              </a>
              <a
                href="/cv.pdf"
                download
                className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl text-white"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
              <div className="w-full h-full bg-gray-950 rounded-full overflow-hidden border-4 border-gray-800">
                <img
                  src="/profile.jpg"
                  alt="Eslam Reda Yassen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Electrical Power Engineering student with practical hands-on experience in industrial automation,
            low voltage panels, PLC systems, and energy efficiency.
            I combine strong electrical engineering foundation with modern web development
            and AI concepts to create smart and sustainable solutions.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">My Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Automation & Control", items: ["Classic Control", "PLC Programming", "Motor & Drive Control", "MCC & ATS Panels", "Industrial Automation", "Low Voltage Systems"] },
              { title: "Web Development", items: ["React.js + Vite", "Tailwind CSS", "PHP & Laravel", "MySQL", "JavaScript", "Full-Stack Development"] },
              { title: "Electrical Engineering", items: ["Energy Efficiency", "Power Factor Correction", "LV Panel Design", "Quality Assurance", "Testing Procedures", "Schneider Solutions"] }
            ].map((skill, i) => (
              <div key={i} className="bg-gray-950 p-8 rounded-3xl border border-gray-800 hover:border-blue-500 transition-all">
                <h3 className="text-2xl font-semibold text-blue-400 mb-6">{skill.title}</h3>
                <ul className="space-y-4 text-gray-300">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-green-400">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Certifications */}
      <section id="experience" className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Experience & Certifications</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-gray-900 p-8 rounded-3xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white">Summer Training</h3>
                <p className="text-blue-400 mt-2">MAM Engineering Industries (Schneider Electric Partner)</p>
                <p className="text-gray-400 mt-4">Low Voltage Panels • MCC • ATS • Power Factor Correction • Safety & Quality</p>
              </div>

              <div className="bg-gray-900 p-8 rounded-3xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white">Active Energy Efficiency</h3>
                <p className="text-blue-400">Schneider Electric University • July 2025</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 p-8 rounded-3xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white">HA Consulting Group</h3>
                <ul className="mt-6 space-y-6 text-gray-300">
                  <li className="flex justify-between"><span>Classic Control</span><span className="text-green-400">Excellent</span></li>
                  <li className="flex justify-between"><span>PLC Basic Programming</span><span className="text-green-400">Excellent</span></li>
                  <li className="flex justify-between"><span>Electric Motor & Drive Programming</span><span className="text-green-400">Excellent</span></li>
                </ul>
              </div>

              <div className="bg-gray-900 p-8 rounded-3xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white">Full Stack Web Development</h3>
                <p className="text-blue-400">Information Technology Institute (ITI) • 120 hours • August 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Project</h2>
          <div className="bg-gradient-to-br from-gray-950 to-gray-900 rounded-3xl p-12 border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-4">Smart Two-Tank Water Level Control System</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Real-time automated system for monitoring and controlling water levels in dual tanks
              using industrial sensors, actuators, and control logic.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {["PLC", "Sensors", "Actuators", "Automation", "React.js"].map(tag => (
                <span key={tag} className="bg-gray-800 px-6 py-2 rounded-full text-sm text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/Eslam20055"
              target="_blank"
              className="mt-8 inline-block text-blue-400 hover:text-blue-500 font-medium">
              View on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-12 text-lg">I'm open to new opportunities and collaborations.</p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="mailto:eslamyassen6666@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-2xl text-white font-medium transition flex items-center gap-3">
              ✉️ eslamyassen6666@gmail.com
            </a>
            <a href="tel:+201559968209"
              className="bg-gray-800 hover:bg-gray-700 px-10 py-4 rounded-2xl text-white font-medium transition">
              📞 01559968209
            </a>
            <a href="https://www.linkedin.com/in/eslam-reda-5b1129382" target="_blank"
              className="bg-gray-900 hover:bg-gray-800 px-10 py-4 rounded-2xl text-white font-medium transition">
              LinkedIn
            </a>
            <a href="https://github.com/Eslam20055" target="_blank"
              className="bg-gray-900 hover:bg-gray-800 px-10 py-4 rounded-2xl text-white font-medium transition">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-center text-gray-500 text-sm">
        © 2026 Eslam Reda Yassen • Built with React + Tailwind CSS
      </footer>
    </>
  )
}

export default App