import { motion } from "framer-motion";

const STATS = [
  { value: "20K+", label: "YouTube Subscribers", gradient: "from-red-400 to-rose-600" },
  { value: "5M+", label: "Global Views", gradient: "from-blue-400 to-indigo-500" },
  { value: "1K+", label: "Students Mentored", gradient: "from-amber-400 to-orange-500" },
  { value: "B.Tech", label: "Computer Science • AI & ML", gradient: "from-emerald-400 to-teal-500" },
];

export default function Achievements() {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-36 px-6 md:px-16 border-t border-white/5 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-700/8 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* Stats Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-3xl p-8 flex flex-col items-center justify-center text-center aspect-square hover:border-white/15 transition-colors"
              >
                <h3 className={`text-4xl md:text-5xl font-black bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2 tracking-tighter`}>
                  {stat.value}
                </h3>
                <p className="text-white/40 text-sm font-medium leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <p className="text-xs tracking-widest uppercase text-red-400 font-semibold mb-5">Impact</p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-tight mb-8">
              AI Thought Leadership &amp;{" "}
              <span className="gradient-text">Digital Education.</span>
            </h2>
            <p className="text-lg text-white/50 font-light leading-relaxed mb-6">
              I am deeply committed to distilling technological complexity into clarity for the next generation of builders.
            </p>
            <p className="text-base text-white/35 font-light leading-relaxed mb-10">
              I don't just consume trends — I actively teach them. I leverage my platform to simplify product engineering, demystify AI architecture, and mentor emerging technical talent.
            </p>

            <a
              href="https://www.youtube.com/@dmsaiedutech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/10 bg-white/5 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              View YouTube Channel
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
