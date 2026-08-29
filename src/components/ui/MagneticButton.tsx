"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  cursorLabel?: string;
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className,
  href,
  onClick,
  type = "button",
  cursorLabel,
  disabled,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.span
      style={{ x: springX, y: springY }}
      className={cn("inline-flex items-center justify-center", className)}
    >
      {children}
    </motion.span>
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
      data-cursor={cursorLabel}
    >
      {href ? (
        href.startsWith("#") ? (
          <a href={href} onClick={onClick}>
            {content}
          </a>
        ) : (
          <Link href={href} onClick={onClick}>
            {content}
          </Link>
        )
      ) : (
        <button type={type} onClick={onClick} disabled={disabled}>
          {content}
        </button>
      )}
    </div>
  );
}
