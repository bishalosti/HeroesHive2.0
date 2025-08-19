import { HTMLMotionProps, motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

type Props = { children: React.ReactNode, scrollMaxX?:number, scrollMinX?:number  } &  HTMLMotionProps<"div">;

export const MoveOnScroll = ({ children, scrollMaxX, scrollMinX, ...props }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  /** 1. Get local scroll progress of this element (0 → 1) */
  const { scrollYProgress } = useScroll({
    target: ref,                 // watch this element
    offset: ["start end", "end start"], // when top enters → when bottom leaves
  });

  useEffect(() => {
    return scrollYProgress.on("change", v => console.log("progress:", v));
  }, [scrollYProgress]);
  /** 2. Map that progress to a y‑offset (px) */
  const rawY = useTransform(scrollYProgress, [0, 1], [scrollMaxX || 30, scrollMinX || -30],); // 0‑10‑0 effect
  const y = useSpring(rawY, {
    stiffness: 60,      // lower = slower
    damping: 15,        // higher = less overshoot
    mass: 0.3,          // fine‑tune heft
  });
  return (
    <motion.div ref={ref as any} style={{ y }} {...props}>
      {children}
    </motion.div>
  );
};
