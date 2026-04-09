"use client";

import { motion } from "framer-motion";

const STAGGER_DELAY = 0.15;

const PROJECTS = [
  { 
    id: 1, 
    title: "Margam AI", 
    subtitle: "LLM-Powered Assistant",
    problem: "Complex, document-heavy study abroad process overwhelmed counselors.",
    build: "LLM-powered interactive assistant for dynamic action plans.",
    stack: ["Python", "API Integrations", "Prompt Engineering"],
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    impact: "Dramatically streamlined consultancy workflows for higher student volumes."
  },
  { 
    id: 2, 
    title: "Restaurant Platform", 
    subtitle: "High-Performance Next-Gen UI",
    problem: "Outdated digital presences causing high bounce rates.",
    build: "Conversion-optimized landing page with lightning-fast loads.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000",
    impact: "Maximized customer retention, elevating premium brand identity."
  },
  { 
    id: 3, 
    title: "Study Abroad Funnel", 
    subtitle: "Conversion Engine",
    problem: "Fragmented acquisition funnels returning lower lead conversion.",
    build: "Structured, SEO-optimized page with clear behavioral pathways.",
    stack: ["WordPress", "Web Analytics"],
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000",
    impact: "Consolidated user journeys into a seamless high-converting funnel."
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#121212] text-white py-32 px-6 md:px-16 relative z-20 border-t border-white/5" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Selected Work</h2>
          <div className="w-24 h-1 bg-neutral-700 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * STAGGER_DELAY, duration: 0.6, ease: "easeOut" }}
              className="group relative rounded-3xl overflow-hidden bg-neutral-900/40 backdrop-blur-2xl border border-white/10 p-5 transition-all duration-300 hover:border-white/25 hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.05)] flex flex-col"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative shrink-0">
                <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover relative z-10 transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-grow">
                 <h3 className="text-2xl font-semibold mb-1 text-white">{project.title}</h3>
                 <p className="text-sm font-medium text-blue-400 mb-4">{project.subtitle}</p>
                 
                 <div className="space-y-3 flex-grow">
                   <div>
                     <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold block mb-1">The Problem</span>
                     <p className="text-neutral-300 font-light text-sm">{project.problem}</p>
                   </div>
                   <div>
                     <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold block mb-1">The Build</span>
                     <p className="text-neutral-300 font-light text-sm">{project.build}</p>
                   </div>
                   <div>
                     <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold block mb-1">Tech Stack</span>
                     <div className="flex flex-wrap gap-2 mt-1">
                       {project.stack.map(s => <span key={s} className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/80">{s}</span>)}
                     </div>
                   </div>
                 </div>
                 
                 <div className="mt-6 pt-4 border-t border-white/10">
                   <span className="text-xs text-emerald-400 uppercase tracking-wider font-semibold block mb-1">Impact</span>
                   <p className="text-white font-medium text-sm leading-relaxed">{project.impact}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
