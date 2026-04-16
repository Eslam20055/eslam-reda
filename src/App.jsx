import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-white">Eslam Reda</h1>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-gray-300 font-medium">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="hover:text-white transition">
                {l.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                {l.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-black to-gray-900 pt-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Hi, I'm <span className="text-blue-500">Eslam Reda</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400">
              Electrical Power Engineering Student
            </p>

            <p className="text-gray-300">
              Industrial Automation • PLC • Smart Energy • Full Stack Dev
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
              <a className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white">
                Projects
              </a>
              <a className="border border-gray-600 hover:border-white px-6 py-3 rounded-xl text-white">
                Contact
              </a>
              <a
                href="/cv.pdf"
                download="Eslam_Reda_CV.pdf"
                className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl text-white"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-56 h-56 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-900">
                <img src="/profile.jpg" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            Electrical Power Engineering student focused on automation, PLC systems,
            and modern web technologies to build smart solutions.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Automation",
                items: ["PLC", "MCC", "Control"],
              },
              {
                title: "Web",
                items: ["React", "Tailwind", "Laravel"],
              },
              {
                title: "Electrical",
                items: ["LV Panels", "Power Systems", "Testing"],
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-gray-950 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition"
              >
                <h3 className="text-blue-400 text-xl mb-4">{s.title}</h3>
                <ul className="text-gray-300 space-y-2">
                  {s.items.map((it) => (
                    <li key={it}>✓ {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-center text-gray-500">
        © 2026 Eslam Reda • Pro Portfolio
      </footer>
    </div>
  );
}

export default App;