"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface TiltedCardProps {
  children: ReactNode;
  className?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
}

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export function TiltedCard({
  children,
  className = "",
  rotateAmplitude = 10,
  scaleOnHover = 1.02,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        perspective: "800px",
        transformStyle: "preserve-3d",
        // Must be none. This element sits at z=0 in the same 3D space as the
        // tilted child, so wherever the tilt pushes the child behind z=0 this
        // wrapper wins the hit test and swallows clicks meant for the card. The
        // dead band moved with the cursor, which is why it felt intermittent.
        // Mouse events still reach the handlers below by bubbling from children.
        pointerEvents: "none",
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* h-full/w-full matter: without a definite height here, a child's
          `h-full` resolves against an indefinite height and collapses to content
          height. That left the outer wrapper taller than its content — an
          unclickable strip along the bottom of every card. */}
      <motion.div
        className="h-full w-full"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
          pointerEvents: "auto",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
