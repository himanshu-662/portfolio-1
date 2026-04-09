"use client";

import { motion } from "framer-motion";

export default function Overlay() {
  return (
    <>
      {/* 1st Scene: Hero */}
      <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center px-6 md:px-16 pointer-events-none z-10">
        <div className="absolute inset-0 bg-[#121212]/40 backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] -z-10" />
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.5 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl mb-6">
            Architecting <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Intelligent Products</span> <br className="hidden md:block"/>& High-Impact AI Experiences.
          </h1>
          <div className="flex gap-4 justify-center mt-10 pointer-events-auto">
            <button key="primary" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors">
              <a href="#projects">View My Work</a>
            </button>
            <button key="secondary" className="px-8 py-3 bg-neutral-900/80 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors">
              <a href="#contact">Let's Build Together</a>
            </button>
          </div>

          <div className="flex justify-center gap-8 mt-12 pointer-events-auto">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 1.46 5.33 2.78 2.78 0 0 0 1.94 2C8.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 1.46-5.33 29 29 0 0 0-1.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* 2nd Scene: Subheading */}
      <div className="absolute top-[150vh] left-0 w-full h-screen flex justify-start items-center px-10 md:px-32 pointer-events-none z-10">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ amount: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold drop-shadow-xl max-w-3xl bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent">
            Bridging the gap between artificial intelligence, systems thinking, and intuitive design to build scalable solutions.
          </h2>
        </motion.div>
      </div>

      {/* 3rd Scene: About / Statement */}
      <div className="absolute top-[300vh] left-0 w-full h-screen flex justify-end items-center px-10 md:px-32 pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.5 }}
          className="text-right max-w-2xl"
        >
          <p className="text-xl md:text-2xl text-blue-400 font-medium mb-4 tracking-wider uppercase drop-shadow-md">
            The Mission
          </p>
          <h2 className="text-3xl md:text-5xl font-bold drop-shadow-xl leading-tight text-white mb-6">
            I am Himanshu Molkapuri.
          </h2>
          <p className="text-lg md:text-2xl text-gray-300 font-light drop-shadow-md">
             A Product Builder and Developer specialized in turning complex AI capabilities into functional, market-ready products with measurable impact. I don’t just write code; I build solutions.
          </p>
        </motion.div>
      </div>
    </>
  );
}
