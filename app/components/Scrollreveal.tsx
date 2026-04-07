"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  scaleFrom?: number;
  distance?: number;
  threshold?: number;
  repeat?: boolean;
}

const directionOffset: Record<Direction, string> = {
  up: "translateY({d}px)",
  down: "translateY(-{d}px)",
  left: "translateX({d}px)",
  right: "translateX(-{d}px)",
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 600,
  direction = "up",
  scaleFrom = 0.95,
  distance = 32,
  threshold = 0.15,
  repeat = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!repeat) observer.unobserve(el);
        } else if (repeat) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, repeat]);

  const translate = directionOffset[direction].replace("{d}", String(distance));

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : `${translate} scale(${scaleFrom})`,
        transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
