import { motion } from "framer-motion";

const BASE_URL = import.meta.env.BASE_URL;

const PROJECTS = [
  {
    id: 1,
    title: "Margam AI",
    description: "LLM-powered study abroad assistant with intelligent guidance and action planning.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    color: "from-violet-600/20 to-indigo-600/10",
    borderColor: "border-violet-500/20",
    demoLink: "https://ai.yourmargam.com/",
  },
  {
    id: 2,
    title: "Restaurant Platform",
    description: "Fast, conversion-focused restaurant UI built with premium animations and modern layout.",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200",
    color: "from-emerald-600/20 to-teal-600/10",
    borderColor: "border-emerald-500/20",
    demoLink: "https://himanshu-662.github.io/restaurant-landing/",
  },
  {
    id: 3,
    title: "Study Abroad Funnel",
    description: "High-intent acquisition funnel designed for clarity, lead conversion, and engagement.",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200",
    color: "from-amber-600/20 to-orange-600/10",
    borderColor: "border-amber-500/20",
    demoLink: "https://cyan-beaver-592842.hostingersite.com/",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description: "Modern developer portfolio experience with fast animations, product highlights, and lead capture.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    color: "from-sky-600/20 to-cyan-600/10",
    borderColor: "border-sky-500/20",
    demoLink: BASE_URL,
  },
];

function ProjectCard({ project, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col rounded-[2rem] overflow-hidden border border-white/10 ${project.borderColor} bg-gradient-to-br ${project.color} backdrop-blur-xl shadow-[0_20px_80px_-40px_rgba(15,23,42,0.65)] transition-all duration-500 hover:-translate-y-1`}
    >
      {/* Image */}
      <div className="relative w-full aspect-[5/4] overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a] animate-pulse" />
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-grow p-7 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-sm text-white/70 leading-relaxed">{project.description}</p>
        </div>

        {project.demoLink && (
          <div className="mt-auto">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-3 rounded-full bg-white/10 text-sm font-semibold text-white border border-white/10 hover:bg-white/15 transition-colors duration-300"
            >
              View Live Demo
            </a>
          </div>
        )}
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} i={i} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="https://github.com/himanshu-662"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
