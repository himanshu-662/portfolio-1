import { motion } from "framer-motion";
import {
  Brain, MessageSquare, Link, Globe, Bot,
  Code, Wind, FileCode, Server, Database, Monitor,
  FileText, Map, Users, RefreshCcw, TrendingUp,
  GitBranch, Zap, PenTool, Layout, Book, CheckSquare,
  Send, GitPullRequest, Box, Terminal, Settings,
  Sparkles, Cpu, Smartphone, Layers, Shield, Calendar,
  DollarSign, LineChart
} from "lucide-react";

const CATEGORIES = [
  {
    title: "Data Science, AI & Machine Learning",
    desc: "Predictive modeling, deep learning architectures, statistical analysis, and data engineering.",
    skills: [
      { name: "Python", icon: FileCode },
      { name: "Machine Learning", icon: Brain },
      { name: "Deep Learning", icon: Cpu },
      { name: "NLP", icon: Globe },
      { name: "Transformers", icon: Sparkles },
      { name: "PyTorch", icon: Zap },
      { name: "TensorFlow", icon: Box },
      { name: "Computer Vision", icon: Monitor },
      { name: "NumPy", icon: Cpu },
      { name: "Pandas", icon: Layers },
      { name: "EDA", icon: LineChart },
      { name: "Data Preprocessing", icon: RefreshCcw },
      { name: "Data Visualization", icon: TrendingUp },
      { name: "Statistics", icon: LineChart },
    ],
    gradient: "from-indigo-500 to-cyan-500",
    glow: "rgba(99,102,241,0.15)",
    Icon: Brain,
  },
  {
    title: "Generative & Agentic AI",
    desc: "Engineering autonomous agents, RAG pipelines, and intelligent LLM systems.",
    skills: [
      { name: "Generative AI", icon: Brain },
      { name: "LLMs", icon: MessageSquare },
      { name: "RAG", icon: Database },
      { name: "LangChain", icon: Link },
      { name: "LangGraph", icon: GitBranch },
      { name: "LangSmith", icon: Settings },
      { name: "Hugging Face", icon: Sparkles },
      { name: "Prompt Engineering", icon: Settings },
      { name: "Fine-Tuning", icon: Cpu },
      { name: "AI Agents", icon: Bot },
      { name: "Tool/Function Calling", icon: Terminal },
      { name: "Multi-Agent Systems", icon: Users },
      { name: "AI Automation", icon: Bot },
      { name: "MCP", icon: Layers },
      { name: "RAGAS", icon: CheckSquare },
    ],
    gradient: "from-violet-500 to-purple-500",
    glow: "rgba(139,92,246,0.15)",
    Icon: Bot,
  },
  {
    title: "Backend, Web Dev & Databases",
    desc: "Building scalable APIs, microservices, reactive web UIs, and robust databases.",
    skills: [
      { name: "FastAPI", icon: Server },
      { name: "Flask", icon: Server },
      { name: "REST APIs", icon: Send },
      { name: "API Integration", icon: Link },
      { name: "SQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Pinecone", icon: Layers },
      { name: "ChromaDB", icon: Box },
      { name: "React.js", icon: Code },
      { name: "JavaScript", icon: FileCode },
      { name: "Tailwind CSS", icon: Wind },
      { name: "HTML / CSS", icon: Code },
      { name: "WordPress", icon: Monitor },
      { name: "Elementor", icon: Layout },
      { name: "Mobile-First Dev", icon: Smartphone },
      { name: "UI/UX Design", icon: PenTool },
    ],
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(52,211,153,0.12)",
    Icon: Server,
  },
  {
    title: "AI Tools & Platforms",
    desc: "Harnessing modern developer tooling and agent frameworks.",
    skills: [
      { name: "ChatGPT", icon: MessageSquare },
      { name: "Claude Code", icon: Terminal },
      { name: "Antigravity", icon: Sparkles },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitPullRequest },
      { name: "Docker", icon: Box },
      { name: "CrewAI", icon: Users },
      { name: "AutoGen", icon: Bot },
      { name: "n8n", icon: GitBranch },
      { name: "Make.com", icon: Zap },
      { name: "Zapier", icon: Settings },
      { name: "Figma", icon: PenTool },
      { name: "Framer", icon: Layout },
      { name: "Notion", icon: Book },
    ],
    gradient: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.12)",
    Icon: Terminal,
  },
  {
    title: "Product Management & Strategy",
    desc: "Translating customer research and data into high-impact roadmaps.",
    skills: [
      { name: "PRDs", icon: FileText },
      { name: "Roadmapping", icon: Map },
      { name: "User Research", icon: Users },
      { name: "Agile/Scrum", icon: RefreshCcw },
      { name: "KPI Tracking", icon: TrendingUp },
      { name: "Market Research", icon: Globe },
      { name: "Product Strategy", icon: Box },
    ],
    gradient: "from-rose-500 to-pink-500",
    glow: "rgba(244,63,94,0.12)",
    Icon: Box,
  },
  {
    title: "Enterprise Systems & HRIS",
    desc: "Designing secure employee architectures, payroll workflows, and access controls.",
    skills: [
      { name: "Multi-tenant Architecture", icon: Layers },
      { name: "Role-Based Access Control", icon: Shield },
      { name: "Attendance Management", icon: Calendar },
      { name: "Leave Management", icon: Calendar },
      { name: "Payroll Workflows", icon: DollarSign },
      { name: "HR Analytics", icon: LineChart },
      { name: "Employee Management", icon: Users },
      { name: "Compliance & Security", icon: Shield },
    ],
    gradient: "from-purple-500 to-fuchsia-500",
    glow: "rgba(168,85,247,0.15)",
    Icon: Shield,
  },
];

function SkillCard({ cat, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl p-5 border border-white/5 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 overflow-hidden hover:border-white/10 hover:-translate-y-1"
      style={{ boxShadow: `0 0 0 0 ${cat.glow}` }}
    >
      {/* Hover glow */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${cat.glow}, transparent 70%)` }}
      />

      {/* Icon */}
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-4 shadow-lg`}>
        <cat.Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
      </div>

      <h3 className="text-lg font-bold text-white mb-1">{cat.title}</h3>
      <p className="text-white/40 text-xs font-light mb-4 leading-relaxed">{cat.desc}</p>

      <div className="flex flex-wrap gap-1.5">
        {cat.skills.map((skill) => (
          <span
            key={skill.name}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-[11px] text-white/60 font-medium hover:bg-white/10 transition-colors cursor-default"
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
            Technical <span className="gradient-text">Arsenal.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} i={i} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
