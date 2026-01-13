"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface MatrixImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function MatrixImage({ src, alt, width, height }: MatrixImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isConstructed, setIsConstructed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = document.createElement("img");
    img.src = src;
    
    img.onload = () => {
      canvas.width = width;
      canvas.height = height;

      // Create off-screen canvas to get pixel data
      const offscreenCanvas = document.createElement("canvas");
      const offscreenCtx = offscreenCanvas.getContext("2d");
      if (!offscreenCtx) return;

      offscreenCanvas.width = width;
      offscreenCanvas.height = height;
      offscreenCtx.drawImage(img, 0, 0, width, height);
      const imageData = offscreenCtx.getImageData(0, 0, width, height);

      // Create particles
      const particles: Array<{
        x: number;
        y: number;
        targetX: number;
        targetY: number;
        color: string;
        alpha: number;
        size: number;
      }> = [];

      const dotSpacing = 4;
      for (let y = 0; y < height; y += dotSpacing) {
        for (let x = 0; x < width; x += dotSpacing) {
          const index = (y * width + x) * 4;
          const r = imageData.data[index];
          const g = imageData.data[index + 1];
          const b = imageData.data[index + 2];
          const a = imageData.data[index + 3];

          if (a > 50) {
            particles.push({
              x: Math.random() * width,
              y: Math.random() * height - height,
              targetX: x,
              targetY: y,
              color: `rgb(${r}, ${g}, ${b})`,
              alpha: 0,
              size: 2,
            });
          }
        }
      }

      let frame = 0;
      const maxFrames = 120;

      const animate = () => {
        if (frame >= maxFrames) {
          setIsConstructed(true);
          return;
        }

        ctx.clearRect(0, 0, width, height);

        particles.forEach((particle) => {
          const progress = Math.min(frame / maxFrames, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3);

          particle.x += (particle.targetX - particle.x) * 0.1;
          particle.y += (particle.targetY - particle.y) * 0.1;
          particle.alpha = Math.min(easeProgress, 1);

          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.alpha;

          // Draw glowing dot
          ctx.shadowBlur = 4;
          ctx.shadowColor = "#8B5CF6";
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        frame++;
        requestAnimationFrame(animate);
      };

      animate();
    };
  }, [src, width, height]);

  return (
    <div className="relative w-full h-full">
      {!isConstructed && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ filter: "contrast(1.1)" }}
        />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isConstructed ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>
    </div>
  );
}
