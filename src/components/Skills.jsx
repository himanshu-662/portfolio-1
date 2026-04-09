import { motion } from "framer-motion";
import {
  Brain, MessageSquare, Link, Globe, Bot,
  Code, Wind, FileCode, Server, Database, Monitor,
  FileText, Map, Users, RefreshCcw, TrendingUp,
  GitBranch, Zap, PenTool, Layout, Book, CheckSquare,
  Send, GitPullRequest, Box, Terminal, Settings
} from "lucide-react";

const CATEGORIES = [
  {
    title: "AI & Machine Learning",
    desc: "Building intelligent systems that learn and adapt.",
    skills: [
      { name: "Generative AI", icon: Brain },
      { name: "LLMs", icon: MessageSquare },
      { name: "LangChain", icon: Link },
      { name: "NLP", icon: Globe },
      { name: "AI Automation", icon: Bot },
    ],
    gradient: "from-violet-500 to-indigo-500",
    glow: "rgba(139,92,246,0.15)",
    Icon: Brain,
  },
  {
    title: "Web Development",
    desc: "Crafting fast, beautiful, production-grade interfaces.",
    skills: [
      { name: "React.js", icon: Code },
      { name: "Tailwind CSS", icon: Wind },
      { name: "JavaScript", icon: FileCode },
      { name: "FastAPI & Python", icon: Server },
      { name: "MongoDB", icon: Database },
      { name: "WordPress", icon: Monitor },
    ],
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(52,211,153,0.12)",
    Icon: Code,
  },
  {
    title: "Product Strategy",
    desc: "Translating user research into shipping roadmaps.",
    skills: [
      { name: "PRDs", icon: FileText },
      { name: "Roadmapping", icon: Map },
      { name: "User Research", icon: Users },
      { name: "Agile/Scrum", icon: RefreshCcw },
      { name: "KPI Tracking", icon: TrendingUp },
    ],
    gradient: "from-rose-500 to-pink-500",
    glow: "rgba(244,63,94,0.12)",
    Icon: Box,
  },
  {
    title: "Tools & Platforms",
    desc: "Automating workflows and shipping with precision.",
    skills: [
      { name: "n8n", icon: GitBranch },
      { name: "Make.com", icon: Zap },
      { name: "Zapier", icon: Settings },
      { name: "Figma", icon: PenTool },
      { name: "Notion", icon: Book },
      { name: "Git/GitHub", icon: GitPullRequest },
      { name: "Jira", icon: CheckSquare },
      { name: "Postman", icon: Send },
    ],
    gradient: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.12)",
    Icon: Terminal,
  },
];

function SkillCard({ cat, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl p-7 border border-white/5 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 overflow-hidden hover:border-white/10 hover:-translate-y-1"
      style={{ boxShadow: `0 0 0 0 ${cat.glow}` }}
    >
      {/* Hover glow */}
      <div
        className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${cat.glow}, transparent 70%)` }}
      />

      {/* Icon */}
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-6 shadow-lg`}>
        <cat.Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
      </div>

      <h3 className="text-xl font-bold text-white mb-1.5">{cat.title}</h3>
      <p className="text-white/40 text-sm font-light mb-6 leading-relaxed">{cat.desc}</p>

      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill) => (
          <span
            key={skill.name}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-xs text-white/60 font-medium hover:bg-white/10 transition-colors cursor-default"
          >
            <skill.icon className="w-3 h-3" strokeWidth={1.5} />
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-36 px-6 md:px-16 border-t border-white/5">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-violet-700/8 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-xs tracking-widest uppercase text-violet-400 font-semibold mb-5">Capabilities</p>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">
            Technical<br />
            <span className="gradient-text">Arsenal.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
