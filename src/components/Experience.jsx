import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    role: "Associate Product Manager Intern",
    company: "Margam - Study Abroad",
    type: "On-site",
    period: "June 2025 – Present",
    quote: "Led the development of AI-driven solutions for study abroad workflows, boosting operational efficiency.",
    bullets: [
      {
        title: "Built & Deployed Margam AI",
        body: "Engineered an LLM-powered assistant (currently in testing) to automate student guidance, minimising manual overhead and redesigning internal workflows.",
      },
      {
        title: "Drove Product Strategy",
        body: "Authored comprehensive PRDs and collaborated directly with engineering teams to ensure rapid, user-centric feature delivery.",
      },
    ],
    dotColor: "bg-indigo-500",
    dotShadow: "0 0 15px rgba(99,102,241,0.8)",
    accent: "text-indigo-400",
  },
  {
    role: "YouTube Content Creator",
    company: "dms ai edu tech",
    type: "Self-directed",
    period: "Sep 2023 – Present",
    quote: "Built and grew an engaged audience through a consistent, value-driven content strategy simplifying complex academic concepts.",
    bullets: [
      {
        title: "Community Engine",
        body: "Organically grew the channel to 20,000+ subscribers, generating 5M+ total views by delivering high-impact technological insights and trend updates.",
      },
      {
        title: "Digital Education & Mentorship",
        body: "Educated and directly mentored 1,000+ students, accelerating academic performance by breaking down technical engineering concepts.",
      },
    ],
    dotColor: "bg-red-500",
    dotShadow: "0 0 15px rgba(239,68,68,0.8)",
    accent: "text-red-400",
  },
];

export default function Experience() {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-36 px-6 md:px-16 border-t border-white/5">
      {/* Ambient */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-indigo-700/8 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-xs tracking-widest uppercase text-indigo-400 font-semibold mb-5">Career</p>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">
            Experience.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-10">
          {/* Line */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

          <div className="space-y-20">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[25px] md:-left-[41px] top-1.5 w-3 h-3 rounded-full ${exp.dotColor}`}
                  style={{ boxShadow: exp.dotShadow }}
                />

                {/* Role header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{exp.role}</h3>
                    <p className={`text-base font-medium mt-1 ${exp.accent}`}>{exp.company}
                      <span className="text-white/30 font-normal ml-2">· {exp.type}</span>
                    </p>
                  </div>
                  <span className="text-sm text-white/30 font-medium shrink-0 mt-1 sm:mt-0.5 tabular-nums">{exp.period}</span>
                </div>

                {/* Quote */}
                <blockquote className="text-base text-white/50 italic border-l-2 border-white/10 pl-4 py-1 mb-8 font-light leading-relaxed">
                  "{exp.quote}"
                </blockquote>

                {/* Bullets */}
                <ul className="space-y-4">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-md hover:border-white/10 transition-colors"
                    >
                      <h4 className="text-base font-semibold text-white mb-1.5">{b.title}</h4>
                      <p className="text-sm text-white/50 font-light leading-relaxed">{b.body}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <a
              href="https://www.linkedin.com/in/himanshu-molkapuri/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
