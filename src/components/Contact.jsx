import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const CONTACTS = [
  { icon: MapPin, label: "India", color: "text-blue-400", href: null },
  { icon: Phone, label: "+91-8121232754", color: "text-emerald-400", href: "tel:+918121232754" },
  { icon: Mail, label: "molkapurihimanshu@gmail.com", color: "text-orange-400", href: "mailto:molkapurihimanshu@gmail.com" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@dmsaiedutech",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 1.46 5.33 2.78 2.78 0 0 0 1.94 2C8.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 1.46-5.33 29 29 0 0 0-1.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#060606] text-white py-36 px-6 md:px-16 border-t border-white/5 overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-indigo-700/8 blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-emerald-700/6 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs tracking-widest uppercase text-emerald-400 font-semibold mb-6">Contact</p>
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8">
            Let's build<br />
            <span className="gradient-text">something impactful.</span>
          </h2>
          <p className="text-lg text-white/40 font-light leading-relaxed mb-14 max-w-xl mx-auto">
            Whether you're integrating AI into your workflow, architecting a new application, or accelerating your product roadmap — I'm ready to execute.
          </p>

          {/* Contact pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            {CONTACTS.map(({ icon: Icon, label, color, href }) => {
              const pill = (
                <span className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/8 bg-white/[0.04] text-sm text-white/70 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 ${href ? "cursor-pointer" : ""}`}>
                  <Icon className={`w-4 h-4 ${color}`} />
                  {label}
                </span>
              );
              return href ? (
                <a key={label} href={href}>{pill}</a>
              ) : (
                <div key={label}>{pill}</div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:molkapurihimanshu@gmail.com"
              className="group relative px-10 py-4 bg-white text-black text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#"
              className="px-10 py-4 bg-transparent border border-white/15 text-white text-base font-semibold rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/25 text-sm"
        >
          <p>© {new Date().getFullYear()} Himanshu Molkapuri.</p>
          <div className="flex gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                {s.icon}
                <span className="hidden sm:block">{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 flex justify-center">
          <span className="text-[60px] sm:text-[90px] md:text-[120px] lg:text-[160px] font-black uppercase tracking-[0.35em] text-white/5 select-none">
            HIMANSHU
          </span>
        </div>
      </div>
    </section>
  );
}
