"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="bg-[#121212] text-white py-32 px-6 md:px-16 border-t border-white/5 relative z-20">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Experience</h2>
          <div className="w-24 h-1 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="relative border-l border-white/10 pl-8 md:pl-12 py-4 space-y-24">
          
          {/* Role 1: Product Manager */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 rounded-full bg-blue-500 -left-[41px] md:-left-[57px] top-2 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
              <h3 className="text-3xl font-bold text-white">Associate Product Manager Intern</h3>
              <span className="text-neutral-500 font-medium text-sm mt-2 sm:mt-0">June 2025 – Present</span>
            </div>
            
            <p className="text-xl text-blue-400 font-medium mb-6">Margam - Study abroad (On-site)</p>
            
            <p className="text-lg text-neutral-300 mb-8 font-light italic border-l-2 border-neutral-700 pl-4">
              "Led the development of AI-driven solutions for study abroad workflows, identifying inefficiencies and boosting operational efficiency."
            </p>

            <ul className="space-y-6">
              <li className="bg-neutral-900/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-2 text-white">Built & Deployed Margam AI</h4>
                <p className="text-neutral-400 font-light text-sm md:text-base">Engineered an LLM-powered assistant (currently in testing) to automate student guidance, minimizing manual overhead and redesigning internal workflows.</p>
              </li>
              <li className="bg-neutral-900/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-2 text-white">Drove Product Strategy</h4>
                <p className="text-neutral-400 font-light text-sm md:text-base">Authored comprehensive PRDs and collaborated directly with engineering teams to ensure rapid, user-centric feature delivery.</p>
              </li>
            </ul>
          </motion.div>

          {/* Role 2: YouTube Creator */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 rounded-full bg-red-500 -left-[41px] md:-left-[57px] top-2 shadow-[0_0_15px_rgba(239,68,68,0.8)]" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
              <h3 className="text-3xl font-bold text-white">YouTube Content Creator</h3>
              <span className="text-neutral-500 font-medium text-sm mt-2 sm:mt-0">September 2023 – Present</span>
            </div>
            
            <p className="text-xl text-red-500 font-medium mb-6">Channel: dms ai edu tech</p>
            
            <p className="text-lg text-neutral-300 mb-8 font-light italic border-l-2 border-neutral-700 pl-4">
              "Built and grew an engaged audience through a consistent, value-driven content strategy, simplifying complex academic concepts."
            </p>

            <ul className="space-y-6">
              <li className="bg-neutral-900/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-2 text-white">Community Engine</h4>
                <p className="text-neutral-400 font-light text-sm md:text-base">Organically grew the channel to over 20,000+ subscribers, generating 5M+ total views by delivering high-impact technological insights and trend updates.</p>
              </li>
              <li className="bg-neutral-900/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-2 text-white">Digital Education & Mentorship</h4>
                <p className="text-neutral-400 font-light text-sm md:text-base">Educated and directly mentored 1000+ students, accelerating their academic performance by breaking down technical engineering concepts.</p>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
