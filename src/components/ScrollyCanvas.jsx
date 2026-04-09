"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

function getCurrentFrame(index) {
  const paddedIndex = String(index).padStart(3, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.jpg`;
}

export default function ScrollyCanvas({ children }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  
  const [images, setImages] = useState([]);
  
  // Preload images
  useEffect(() => {
    const loadedImages = [];
    for (let i = 0; i < 120; i++) {
      const img = new Image();
      img.src = getCurrentFrame(i);
      loadedImages.push(img);
    }
    setImages(loadedImages);
    
    // Draw initial frame if possible (after first loads)
    if (loadedImages[0]) {
      loadedImages[0].onload = () => {
        drawFrame(loadedImages[0]);
      };
    }
  }, []);

  const drawFrame = (image) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high DPI
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    // Check if canvas dimensions changed
    if (canvas.width !== Math.floor(rect.width * dpr) || canvas.height !== Math.floor(rect.height * dpr)) {
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.scale(dpr, dpr);
    }

    // Object-fit: cover logic
    const canvasRatio = rect.width / rect.height;
    const imgRatio = image.width / image.height;
    
    let drawWidth = rect.width;
    let drawHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > canvasRatio) {
      drawHeight = rect.height;
      drawWidth = image.width * (rect.height / image.height);
      offsetX = (rect.width - drawWidth) / 2;
    } else {
      drawWidth = rect.width;
      drawHeight = image.height * (rect.width / image.width);
      offsetY = (rect.height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    let frameIndex = Math.floor(latest * 119);
    frameIndex = Math.min(119, Math.max(0, frameIndex));
    
    const img = images[frameIndex];
    if (img && img.complete) {
      requestAnimationFrame(() => drawFrame(img));
    }
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const scrollFraction = scrollYProgress.get();
      let frameIndex = Math.floor(scrollFraction * 119);
      frameIndex = Math.min(119, Math.max(0, frameIndex));
      if (images[frameIndex]?.complete) {
        drawFrame(images[frameIndex]);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
      {children}
    </div>
  );
}
