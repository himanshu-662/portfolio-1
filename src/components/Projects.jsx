import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    num: "01",
    title: "Margam AI",
    subtitle: "LLM-Powered Study Abroad Assistant",
    problem: "Complex, document-heavy study abroad process overwhelmed counselors.",
    build: "Engineered an LLM-powered assistant to automate student guidance & dynamic action plans.",
    stack: ["Python", "LangChain", "Prompt Engineering", "API Integrations"],
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    impact: "Streamlined consultancy workflows, enabling higher student volume with minimal overhead.",
    color: "from-violet-600/20 to-indigo-600/10",
    accentColor: "text-violet-400",
    borderColor: "border-violet-500/20",
    pillColor: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
  {
    id: 2,
    num: "02",
    title: "Restaurant Platform",
    subtitle: "High-Performance Next-Gen UI",
    problem: "Outdated digital presences causing high bounce rates and poor conversion.",
    build: "Conversion-optimized landing page with lightning-fast loads and premium micro-animations.",
    stack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200",
    impact: "Maximized customer retention and elevated premium brand identity in a competitive market.",
    color: "from-emerald-600/20 to-teal-600/10",
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    pillColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
  {
    id: 3,
    num: "03",
    title: "Study Abroad Funnel",
    subtitle: "High-Intent Conversion Engine",
    problem: "Fragmented acquisition funnels with low lead quality and high drop-off rates.",
    build: "Structured, SEO-optimized page with clear user journeys and behavioral pathways.",
    stack: ["WordPress", "SEO", "Web Analytics", "CRO"],
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200",
    impact: "Consolidated user journeys into a seamless, high-converting acquisition funnel.",
    color: "from-amber-600/20 to-orange-600/10",
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    pillColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  },
];

function ProjectCard({ project, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col rounded-3xl overflow-hidden border ${project.borderColor} bg-gradient-to-br ${project.color} backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_60px_-10px_rgba(99,102,241,0.15)] hover:-translate-y-1`}
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a] animate-pulse" />
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] opacity-70 group-hover:opacity-90"
        />
        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />

        {/* Floating number */}
        <span className="absolute top-5 left-5 text-xs font-black tracking-widest text-white/20">
          {project.num}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-grow p-7 gap-5">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
          <p className={`text-sm font-medium ${project.accentColor}`}>{project.subtitle}</p>
        </div>

        <div className="space-y-4 flex-grow">
          <div>
            <span className="text-[10px] tracking-widest uppercase text-white/30 font-semibold block mb-1.5">The Problem</span>
            <p className="text-white/60 text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <span className="text-[10px] tracking-widest uppercase text-white/30 font-semibold block mb-1.5">The Build</span>
            <p className="text-white/60 text-sm leading-relaxed">{project.build}</p>
          </div>
          <div>
            <span className="text-[10px] tracking-widest uppercase text-white/30 font-semibold block mb-2">Tech Stack</span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium border ${project.pillColor}`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Impact */}
        <div className="pt-5 border-t border-white/5">
          <span className="text-[10px] tracking-widest uppercase text-emerald-400 font-semibold block mb-1.5">Impact</span>
          <p className="text-white/80 text-sm font-medium leading-relaxed">{project.impact}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0a0a0a] text-white py-36 px-6 md:px-16 border-t border-white/5"
    >
      {/* Section ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-700/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-xs tracking-widest uppercase text-indigo-400 font-semibold mb-5">Work</p>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">
            Selected<br />
            <span className="gradient-text">Projects.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
