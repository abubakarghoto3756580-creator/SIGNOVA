'use client';
import { motion, useScroll } from 'motion/react';

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, #C8A36A, #A07840)'
      }}
    />
  );
}
