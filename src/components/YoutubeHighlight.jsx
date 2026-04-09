import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VIDEOS = [
  {
    id: 1,
    title: "How to pass BEE",
    img: "https://img.youtube.com/vi/MXrTlfnkAYs/maxresdefault.jpg",
    link: "https://youtu.be/MXrTlfnkAYs",
    views: "117K views",
    badge: "Top Video",
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
  },
];

export default function YoutubeHighlight() {
  return (
    <section
      id="youtube"
      className="relative bg-[#0a0a0a] text-white py-36 px-6 md:px-16 border-t border-white/5 overflow-hidden"
    >
      {/* Red ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-700/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: Channel Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[42%]"
          >
            {/* Channel Badge */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.4)] shrink-0">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">dms ai edu tech</h3>
                <p className="text-red-400 text-sm font-medium">20,000+ Subscribers · 5M+ Views</p>
              </div>
            </div>

            <p className="text-xs tracking-widest uppercase text-red-400 font-semibold mb-5">Content</p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-tight mb-6">
              Demystifying AI for the{" "}
              <span className="gradient-text">next generation.</span>
            </h2>
            <p className="text-base text-white/50 font-light leading-relaxed mb-10">
              I produce high-impact educational content simplifying complex machine learning frameworks, delivering technology insights, and helping students break into AI automation and product building.
            </p>

            <a
              href="https://www.youtube.com/@dmsaiedutech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-red-600 rounded-full text-sm font-semibold text-white hover:bg-red-500 transition-colors shadow-[0_0_25px_rgba(220,38,38,0.3)]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              Subscribe on YouTube
            </a>
          </motion.div>

          {/* Right: Video Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[58%] grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Featured */}
            <a
              href={VIDEOS[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:col-span-2 group relative rounded-2xl overflow-hidden block border border-white/8 hover:border-red-500/40 transition-all duration-300"
            >
              <div className="aspect-[16/9] relative">
                <img
                  src={VIDEOS[0].img}
                  alt={VIDEOS[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center shadow-xl scale-90 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  {VIDEOS[0].badge && (
                    <span className="inline-block text-[10px] font-black tracking-widest uppercase bg-white text-black px-2.5 py-1 rounded-full mb-3">
                      {VIDEOS[0].badge}
                    </span>
                  )}
                  <h4 className="text-lg font-bold text-white line-clamp-1">{VIDEOS[0].title}</h4>
                  <p className="text-sm text-white/50 mt-0.5">{VIDEOS[0].views}</p>
                </div>
              </div>
            </a>

            {/* Secondary videos */}
            {VIDEOS.slice(1).map((v) => (
              <a
                key={v.id}
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden block border border-white/8 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="aspect-[16/9] relative">
                  <img
                    src={v.img}
                    alt={v.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-red-600/90 transition-colors duration-300">
                      <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <h4 className="text-sm font-bold text-white line-clamp-2">{v.title}</h4>
                    <p className="text-xs text-white/40 mt-0.5">{v.views}</p>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="https://www.youtube.com/@dmsaiedutech/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            View More Videos
          </a>
        </div>
      </div>
    </section>
  );
}
