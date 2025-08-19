import { ForwardRefComponent, HTMLMotionProps, motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

type Props = { children: React.ReactNode,  } |  HTMLMotionProps<"div">;

const variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3, // optional for a snappier exit
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.5,
    },
  },
};

export const SpringAnimate = ({ children, ...props }: Props) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount:"some" });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref as any}
      variants={variants as any}
      initial="hidden"
      animate={controls}
      {...props}
    >
      {children}
    </motion.div>
  );
};
