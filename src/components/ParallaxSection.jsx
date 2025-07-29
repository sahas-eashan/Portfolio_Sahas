import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ParallaxSection({ children, offset = 80 }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -offset]);
  return (
    <motion.section ref={ref} style={{ y }}>
      {children}
    </motion.section>
  );
}
