"use client";

import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section className="bg-[#121212] text-white py-32 px-6 md:px-16 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Metrics Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-900/40 p-8 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center aspect-square backdrop-blur-md"
           >
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent mb-2">20K+</h3>
              <p className="text-neutral-400 font-medium">YouTube Subscribers</p>
           </motion.div>
           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-neutral-900/40 p-8 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center aspect-square backdrop-blur-md"
           >
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">5M+</h3>
              <p className="text-neutral-400 font-medium">Global Views</p>
           </motion.div>
           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-neutral-900/40 p-8 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center aspect-square col-span-2 md:col-span-1 backdrop-blur-md"
           >
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">1,000+</h3>
              <p className="text-neutral-400 font-medium">Students Mentored</p>
           </motion.div>
           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl border border-blue-500 flex flex-col items-center justify-center text-center aspect-square col-span-2 md:col-span-1 shadow-[0_0_30px_rgba(37,99,235,0.3)]"
           >
              <h3 className="text-2xl font-bold text-white mb-2">B.Tech</h3>
              <p className="text-blue-200 font-medium text-sm">Computer Science (AI & ML)</p>
           </motion.div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">AI Thought Leadership & Digital Education</h2>
             <p className="text-xl text-neutral-300 font-light leading-relaxed mb-6">
               I am deeply committed to distilling technological complexity into clarity for the next generation of builders. 
             </p>
             <p className="text-lg text-neutral-400 font-light leading-relaxed mb-8">
               I don’t just consume trends; I actively teach them. I leverage my platform to simplify product engineering, demystify AI architecture, and mentor emerging technical talent.
             </p>
             
             <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-colors flex items-center gap-3 border border-white/10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                View YouTube Channel
             </button>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
