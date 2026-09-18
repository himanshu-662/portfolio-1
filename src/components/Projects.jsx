import { motion } from "framer-motion";

const BASE_URL = import.meta.env.BASE_URL;

const PROJECTS = [
  {
    id: 1,
    title: "Margam AI – LLM-Powered Student Assistant",
    description: "Built an AI-powered student assistant for automating study-abroad guidance and delivering contextual responses to student queries using structured prompts and RAG pipelines.",
    tech: "Python, LangChain, LLM APIs, RAG Pipelines, Prompt Engineering",
    img: BASE_URL + "Margam-AI.png",
    color: "from-violet-600/20 to-indigo-600/10",
    borderColor: "border-violet-500/20",
    demoLink: "https://ai.yourmargam.com/",
  },
  {
    id: 2,
    title: "Enterprise AI Intelligence & Automation Platform",
    description: "Built an end-to-end enterprise platform integrating Data Analytics, SQL, Machine Learning, Deep Learning, NLP, Generative AI, RAG, and Agentic AI workflows for intelligent automation and decision support.",
    tech: "Transformers, LangChain, LangGraph, LangSmith, Vector DBs, MCP, FastAPI",
    img: BASE_URL + "DMS-HRMS.png",
    color: "from-purple-600/20 to-fuchsia-600/10",
    borderColor: "border-purple-500/20",
    demoLink: "https://dms-hrms.vercel.app/",
  },
  {
    id: 3,
    title: "DMS AI EduTech",
    description: "Educational web platform delivering technical engineering education, resources, and mentorship to 2,000+ students.",
    tech: "JavaScript, HTML5, CSS3, Video Integration",
    img: BASE_URL + "dmsaiedu.png",
    color: "from-red-600/20 to-orange-600/10",
    borderColor: "border-red-500/20",
    demoLink: "https://www.dmsaiedu.tech",
  },
  {
    id: 4,
    title: "Study Abroad Funnel",
    description: "High-intent student acquisition funnel designed for clarity, lead conversion, and seamless onboarding.",
    tech: "WordPress, Elementor, UI/UX Design",
    img: BASE_URL + "Margam-Wensite.png",
    color: "from-amber-600/20 to-orange-600/10",
    borderColor: "border-amber-500/20",
    demoLink: "https://cyan-beaver-592842.hostingersite.com/",
  },
  {
    id: 5,
    title: "Personal Portfolio & Scrollytelling",
    description: "Interactive scrollytelling portfolio built with React 19, Framer Motion, and Tailwind CSS highlighting AI projects and skills.",
    tech: "React.js, Tailwind CSS, Framer Motion, Vite",
    img: BASE_URL + "Portfolio.png",
    color: "from-sky-600/20 to-cyan-600/10",
    borderColor: "border-sky-500/20",
    demoLink: BASE_URL,
  },
  {
    id: 6,
    title: "Restaurant Platform",
    description: "Fast, conversion-focused responsive restaurant UI built with modern layouts and mobile-first design.",
    tech: "HTML5, Tailwind CSS, JavaScript",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200",
    color: "from-emerald-600/20 to-teal-600/10",
    borderColor: "border-emerald-500/20",
    demoLink: "https://himanshu-662.github.io/restaurant-landing/",
  },
];

function ProjectCard({ project, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 ${project.borderColor} bg-gradient-to-br ${project.color} backdrop-blur-xl shadow-[0_20px_80px_-40px_rgba(15,23,42,0.65)] transition-all duration-500 hover:-translate-y-1`}
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
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
      <div className="flex flex-col flex-grow p-5 gap-3.5">
        <div>
          <h3 className="text-xl font-bold text-white mb-1.5">{project.title}</h3>
          <p className="text-[13px] text-white/60 leading-relaxed mb-3">{project.description}</p>
          {project.tech && (
            <p className="text-[11px] text-indigo-300/80 font-mono bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/5 inline-block">
              {project.tech}
            </p>
          )}
        </div>

        {project.demoLink && (
          <div className="mt-auto">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full bg-white/10 text-xs font-semibold text-white border border-white/10 hover:bg-white/15 transition-colors duration-300"
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
            Selected <span className="gradient-text">Projects.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
