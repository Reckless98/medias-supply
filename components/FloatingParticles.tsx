"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  baseOpacity: number;
  pulse: number;
  pulseSpeed: number;
};

export default function FloatingParticles({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const isDark = variant === "dark";

    const count = isDark ? 30 : 40;
    const maxSize = isDark ? 5 : 4;
    const minSize = isDark ? 2 : 2;
    const speed = isDark ? 0.4 : 0.3;
    const baseOpacity = isDark ? 0.6 : 0.45;
    const lineDistance = 180;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const init = () => {
      resize();
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: minSize + Math.random() * (maxSize - minSize),
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        opacity: baseOpacity * (0.7 + Math.random() * 0.3),
        baseOpacity: baseOpacity * (0.7 + Math.random() * 0.3),
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update positions
      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += p.pulseSpeed;
        p.opacity = p.baseOpacity * (0.6 + 0.4 * Math.sin(p.pulse));

        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
      }

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < lineDistance) {
            const lineOpacity = (1 - dist / lineDistance) * (isDark ? 0.25 : 0.18);
            const lineColor = isDark ? "251, 146, 60" : "185, 28, 28";
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${lineColor}, ${lineOpacity})`;
            ctx.lineWidth = isDark ? 1 : 1;
            ctx.stroke();
          }
        }
      }

      // Draw dots with glow effect
      for (const p of particles) {
        const dotColor = isDark ? "251, 146, 60" : "185, 28, 28";

        // Glow layer
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor}, ${p.opacity * 0.15})`;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor}, ${p.opacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    init();
    draw();

    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
