import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120;

function getFrameUrl(index) {
  const padded = String(index).padStart(3, "0");
  return `${import.meta.env.BASE_URL}sequence/frame_${padded}_delay-0.066s.jpg`;
}

export default function ScrollyCanvas({ children }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [ready, setReady] = useState(false);
  const rafRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const drawFrame = useCallback((image) => {
    if (!image || !image.complete || image.naturalWidth === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    const targetW = Math.floor(rect.width * dpr);
    const targetH = Math.floor(rect.height * dpr);

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // object-fit: cover math
    const cw = rect.width;
    const ch = rect.height;
    const iw = image.naturalWidth;
    const ih = image.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const dx = (cw - iw * scale) / 2;
    const dy = (ch - ih * scale) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(image, dx, dy, iw * scale, ih * scale);
  }, []);

  // Preload all frames
  useEffect(() => {
    const imgs = [];
    const preloadBatch = (startIdx, batchSize) => {
      const end = Math.min(startIdx + batchSize, FRAME_COUNT);
      for (let i = startIdx; i < end; i++) {
        const img = new Image();
        img.src = getFrameUrl(i);
        img.onload = () => {
          if (i === 0) {
            drawFrame(img);
            setReady(true);
          }
        };
        img.onerror = () => {
          // allow graceful degradation
        };
        imgs.push(img);
      }
      if (end < FRAME_COUNT) {
        // Load next batch after a short delay so first frames render fast
        setTimeout(() => preloadBatch(end, batchSize), 100);
      }
    };
    // Load first 10 frames immediately, then rest in batches
    preloadBatch(0, 10);
    imagesRef.current = imgs;

    // Fallback reveal
    const fallback = setTimeout(() => setReady(true), 2000);
    return () => clearTimeout(fallback);
  }, [drawFrame]);

  // Sync scroll progress → frame
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const imgs = imagesRef.current;
    if (!imgs.length) return;
    const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(latest * (FRAME_COUNT - 1))));
    const img = imgs[idx];
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => drawFrame(img));
  });

  // Resize
  useEffect(() => {
    const handleResize = () => {
      const progress = scrollYProgress.get();
      const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(progress * (FRAME_COUNT - 1))));
      drawFrame(imagesRef.current[idx]);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame, scrollYProgress]);

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative" style={{ background: "#0a0a0a" }}>

      {/* Loading overlay — fades out once first frame is ready */}
      <div
        className="fixed inset-0 bg-[#0a0a0a] z-50 flex items-center justify-center"
        style={{
          opacity: ready ? 0 : 1,
          pointerEvents: ready ? "none" : "all",
          transition: "opacity 0.8s ease",
        }}
      >
        <div className="flex flex-col items-center gap-5">
          <div className="w-10 h-10 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
          <p className="text-white/30 text-xs tracking-widest uppercase">Loading</p>
        </div>
      </div>

      {/* Sticky viewport — the canvas lives here */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas — full-screen image sequence */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

        {/* Subtle dark overlay so text is readable — NOT blocking the image */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* Bottom fade into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none"
          style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 100%)" }}
        />
      </div>

      {/* Scrollytelling text overlays — positioned absolutely within 500vh space */}
      {children}
    </div>
  );
}
