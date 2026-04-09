import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent, motion, useTransform } from "framer-motion";

const FRAME_COUNT = 120;

function getFrameUrl(index) {
  const padded = String(index).padStart(3, "0");
  return `/sequence/frame_${padded}_delay-0.066s.jpg`;
}

export default function ScrollyCanvas({ children }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [ready, setReady] = useState(false);
  const rafRef = useRef(null);
  const currentFrameRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll progress indicator at bottom of sticky viewport
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  /* ─────────────────────────────────────────
     Draw a single frame onto the canvas
  ───────────────────────────────────────── */
  const drawFrame = useCallback((image) => {
    if (!image || !image.complete || image.naturalWidth === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;

    // Resize only when needed
    const targetW = Math.floor(W * dpr);
    const targetH = Math.floor(H * dpr);
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // object-fit: cover
    const iw = image.naturalWidth;
    const ih = image.naturalHeight;
    const scale = Math.max(W / iw, H / ih);
    const dx = (W - iw * scale) / 2;
    const dy = (H - ih * scale) / 2;

    ctx.drawImage(image, dx, dy, iw * scale, ih * scale);
  }, []);

  /* ─────────────────────────────────────────
     Preload all frames — show as soon as
     FIRST frame is decoded, don't wait for all
  ───────────────────────────────────────── */
  useEffect(() => {
    const imgs = new Array(FRAME_COUNT);
    let firstReady = false;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = getFrameUrl(i);

      img.addEventListener("load", () => {
        if (i === 0 && !firstReady) {
          firstReady = true;
          requestAnimationFrame(() => {
            drawFrame(img);
            setReady(true);
          });
        }
      });

      // Even if it errors, we still mark it so onerror doesn't hang
      img.addEventListener("error", () => {
        /* silent — partial sequence is fine */
      });

      imgs[i] = img;
    }

    imagesRef.current = imgs;

    // Safety fallback: show UI after 2s regardless
    const t = setTimeout(() => setReady(true), 2000);
    return () => clearTimeout(t);
  }, [drawFrame]);

  /* ─────────────────────────────────────────
     Map scroll progress → frame index
  ───────────────────────────────────────── */
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const imgs = imagesRef.current;
    if (!imgs.length) return;

    const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(latest * (FRAME_COUNT - 1))));
    if (idx === currentFrameRef.current) return; // same frame, skip draw
    currentFrameRef.current = idx;

    const img = imgs[idx];
    if (!img) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => drawFrame(img));
  });

  /* ─────────────────────────────────────────
     Redraw on window resize
  ───────────────────────────────────────── */
  useEffect(() => {
    const onResize = () => {
      const idx = currentFrameRef.current;
      const img = imagesRef.current[idx];
      if (img?.complete) drawFrame(img);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [drawFrame]);

  return (
    <div
      ref={containerRef}
      style={{ height: "500vh", background: "#0a0a0a", position: "relative", width: "100%" }}
    >
      {/* Loading screen — fades out once first frame is drawn */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#0a0a0a",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1.25rem",
          opacity: ready ? 0 : 1,
          pointerEvents: ready ? "none" : "all",
          transition: "opacity 0.6s ease",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.15)",
            borderTopColor: "rgba(255,255,255,0.8)",
            animation: "spin 0.8s linear infinite",
          }}
        />
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Loading
        </p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>

      {/* ── Sticky viewport ── */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Canvas fills the entire sticky viewport */}
        <canvas
          ref={canvasRef}
          style={{ display: "block", width: "100%", height: "100%", background: "#0a0a0a" }}
        />

        {/* ── Cinematic overlays on top of canvas ── */}
        {/* Radial vignette - darkens edges */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.72) 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
        {/* Bottom fade — blends into the next section */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "220px",
            background: "linear-gradient(to bottom, transparent, #0a0a0a)",
            pointerEvents: "none",
            zIndex: 3,
          }}
        />
        {/* Top gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "160px",
            background: "linear-gradient(to bottom, rgba(10,10,10,0.5), transparent)",
            pointerEvents: "none",
            zIndex: 3,
          }}
        />

        {/* ── Scroll progress bar ── */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "rgba(255,255,255,0.06)",
            zIndex: 10,
          }}
        >
          <motion.div
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #6366f1, #34d399)",
              scaleX: lineScaleX,
              transformOrigin: "left",
            }}
          />
        </div>
      </div>

      {/* ── Text overlay scenes — absolute within the 500vh space ── */}
      {children}
    </div>
  );
}
