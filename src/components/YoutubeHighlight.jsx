"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VIDEOS = [
  {
    id: 1,
    title: "How to pass BEE",
    img: "https://img.youtube.com/vi/MXrTlfnkAYs/maxresdefault.jpg",
    link: "https://youtu.be/MXrTlfnkAYs",
    views: "117K views",
  },
  {
    id: 2,
    title: "How to pass JAVA",
    img: "https://i9.ytimg.com/vi/jqOsLqwQEJ4/mqdefault.jpg?v=65cc8289&sqp=CJjj3c4G&rs=AOn4CLCWmL0GDIoSi0T58olIqJqZijMhdg",
    link: "https://youtu.be/jqOsLqwQEJ4",
    views: "110K views",
  },
  {
    id: 3,
    title: "How to pass EDC",
    img: "https://img.youtube.com/vi/y98tsEkPlq4/maxresdefault.jpg",
    link: "https://youtu.be/y98tsEkPlq4",
    views: "100K views",
  }
];

export default function YoutubeHighlight() {
  return (
    <section className="bg-[#0f0f0f] text-white py-32 px-6 md:px-16 border-t border-white/5 relative z-20 overflow-hidden" id="youtube">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="w-full md:w-1/2"
           >
             <div className="flex items-center gap-4 mb-6">
               <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                 <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 1.46 5.33 2.78 2.78 0 0 0 1.94 2C8.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 1.46-5.33 29 29 0 0 0-1.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
               </div>
               <div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">dms ai edu tech</h2>
                  <p className="text-red-400 font-medium">20,000+ Subscribers • 5M+ Views</p>
               </div>
             </div>
             
             <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Demystifying AI for the next generation.</h3>
             <p className="text-xl text-neutral-400 font-light leading-relaxed mb-10">
               I produce high-impact educational content simplifying complex machine learning frameworks, delivering technology insights, and helping students break into the world of AI automation and product building.
             </p>
             <a href="#" className="inline-flex px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-500 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.3)] items-center gap-3">
               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 1.46 5.33 2.78 2.78 0 0 0 1.94 2C8.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 1.46-5.33 29 29 0 0 0-1.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
               Subscribe on YouTube
             </a>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
           >
              {/* Highlight Featured Video */}
              <a href={VIDEOS[0].link} target="_blank" rel="noopener noreferrer" className="sm:col-span-2 group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer block shadow-2xl hover:border-red-500/50 transition-colors">
                  <div className="aspect-[16/9] w-full">
                    <img src={VIDEOS[0].img} alt={VIDEOS[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                  </div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                     <div className="w-16 h-16 rounded-full bg-red-600/90 backdrop-blur-md flex items-center justify-center scale-90 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <Play className="w-6 h-6 text-white ml-1 pl-0.5" fill="currentColor" />
                     </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                     <span className="text-xs font-bold bg-white text-black px-2 py-1 rounded inline-block mb-3">LATEST VIDEO</span>
                     <h4 className="text-xl md:text-2xl font-bold text-white mb-1 line-clamp-1">{VIDEOS[0].title}</h4>
                     <p className="text-sm text-neutral-300">{VIDEOS[0].views}</p>
                  </div>
              </a>
              
              {/* Secondary Videos */}
              <a href={VIDEOS[1].link} target="_blank" rel="noopener noreferrer" className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer block hover:border-red-500/50 transition-colors">
                  <div className="aspect-[16/9] w-full">
                    <img src={VIDEOS[1].img} alt={VIDEOS[1].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100" />
                  </div>
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                     <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center scale-90 group-hover:scale-110 group-hover:bg-red-600/90 transition-all duration-300">
                        <Play className="w-5 h-5 text-white ml-1 pl-0.5" fill="currentColor" />
                     </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                     <h4 className="text-sm font-bold text-white mb-1 line-clamp-2">{VIDEOS[1].title}</h4>
                     <p className="text-xs text-neutral-400">{VIDEOS[1].views}</p>
                  </div>
              </a>
              
              <a href={VIDEOS[2].link} target="_blank" rel="noopener noreferrer" className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer block hover:border-red-500/50 transition-colors">
                  <div className="aspect-[16/9] w-full">
                    <img src={VIDEOS[2].img} alt={VIDEOS[2].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100" />
                  </div>
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                     <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center scale-90 group-hover:scale-110 group-hover:bg-red-600/90 transition-all duration-300">
                        <Play className="w-5 h-5 text-white ml-1 pl-0.5" fill="currentColor" />
                     </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                     <h4 className="text-sm font-bold text-white mb-1 line-clamp-2">{VIDEOS[2].title}</h4>
                     <p className="text-xs text-neutral-400">{VIDEOS[2].views}</p>
                  </div>
              </a>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
