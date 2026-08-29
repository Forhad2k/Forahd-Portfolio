"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const ringX = useSpring(x, { stiffness: 220, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 220, damping: 30, mass: 0.6 });

  useEffect(() => {
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = (e.target as HTMLElement).closest("[data-cursor]") as HTMLElement | null;
      if (target) {
        setActive(true);
        setLabel(target.dataset.cursor || "");
      } else {
        setActive(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          x: springX,
          y: springY,
          scale: active ? 0 : 1,
        }}
        aria-hidden="true"
      />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: active ? 72 : 44,
          height: active ? 72 : 44,
          marginLeft: active ? -36 : -17,
          marginTop: active ? -36 : -17,
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      >
        {label}
      </motion.div>
    </>
  );
}
