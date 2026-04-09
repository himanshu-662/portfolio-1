"use client";

import { motion } from "framer-motion";
import { 
  Brain, MessageSquare, Link, Globe, Bot, 
  Code, Wind, FileCode, Server, Database, Monitor, 
  FileText, Map, Users, RefreshCcw, TrendingUp, 
  GitBranch, Zap, PenTool, Layout, Book, CheckSquare, Send, GitPullRequest,
  Box, Terminal, BarChart, Settings
} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "AI & Machine Learning",
    skills: [
       { name: "Gen AI", icon: Brain },
       { name: "Large Language Models (LLMs)", icon: MessageSquare },
       { name: "LangChain", icon: Link },
       { name: "NLP", icon: Globe },
       { name: "AI Automation", icon: Bot }
    ],
    color: "from-purple-500 to-blue-500",
    Icon: Brain
  },
  {
    title: "Web Development",
    skills: [
       { name: "React.js", icon: Code },
       { name: "Tailwind CSS", icon: Wind },
       { name: "JavaScript/HTML/CSS", icon: FileCode },
       { name: "FastAPI & Python", icon: Server },
       { name: "MongoDB", icon: Database },
       { name: "WordPress", icon: Monitor }
    ],
     color: "from-emerald-500 to-teal-500",
     Icon: Code
  },
  {
    title: "Product Strategy",
    skills: [
       { name: "Product Requirements (PRDs)", icon: FileText },
       { name: "Roadmapping", icon: Map },
       { name: "User Research", icon: Users },
       { name: "Agile/Scrum", icon: RefreshCcw },
       { name: "KPI Tracking", icon: TrendingUp }
    ],
     color: "from-orange-500 to-pink-500",
     Icon: Box
  },
  {
    title: "Tools & Platforms",
    skills: [
       { name: "n8n", icon: GitBranch },
       { name: "Make.com", icon: Zap },
       { name: "Zapier", icon: Settings },
       { name: "Figma", icon: PenTool },
       { name: "Framer", icon: Layout },
       { name: "Notion", icon: Book },
       { name: "Jira", icon: CheckSquare },
       { name: "Postman", icon: Send },
       { name: "Git/GitHub", icon: GitPullRequest }
    ],
     color: "from-yellow-400 to-amber-600",
     Icon: Terminal
  }
];

export default function Skills() {
  return (
    <section className="bg-[#121212] text-white py-32 px-6 md:px-16 border-t border-white/5 relative z-20">
      <div className="max-w-[90rem] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Technical Arsenal</h2>
          <div className="w-24 h-1 bg-white/20 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, i) => (
             <motion.div
               key={category.title}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.15 }}
               className="bg-neutral-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-white/20 transition-colors shadow-2xl"
             >
               <div className={`w-14 h-14 rounded-2xl mb-8 bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                  <category.Icon className="w-7 h-7 text-white" />
               </div>
               <h3 className="text-2xl font-semibold mb-6 text-white">{category.title}</h3>
               <div className="flex flex-wrap gap-2">
                 {category.skills.map((skill) => (
                   <span key={skill.name} className="px-3 py-1.5 bg-white/5 rounded-full text-sm text-neutral-200 font-medium border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-colors">
                     <skill.icon className="w-4 h-4 text-neutral-400" />
                     {skill.name}
                   </span>
                 ))}
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
