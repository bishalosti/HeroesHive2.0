import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import img from "../../../assets/carasouel/ad8b48823b18d2f3e6b3c5471359217b37e8f15b.png";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  animate
} from "framer-motion";
import { useTranslation } from 'react-i18next';

const logos = [
  { image: img, text: "Logo design" },
  { image: img, text: "Banner Design" },
  { image: img, text: "Brand Book" },
  { image: img, text: "Typography System" },
  { image: img, text: "Social Media Branding" }
];

const arabicLogos = [
  { image: img, text: "تصميم شعار" },
  { image: img, text: "تصميم بانر" },
  { image: img, text: "دليل العلامة التجارية" },
  { image: img, text: "نظام الطباعة" },
  { image: img, text: "العلامة التجارية لوسائل التواصل الاجتماعي" }
];

export function HeaderCarasouel({ baseVelocity = 100 }: { baseVelocity?: number }) {

  const {i18n} = useTranslation();
  // ---------- 1. motion values ----------
  const baseX = useMotionValue(0);     
  const speed  = useMotionValue(0.3);   
    const [loopWidth, setLoopWidth] = useState(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  }); 

  // ---------- 2. measure width once ----------
  const scrollerRef = useRef<HTMLDivElement>(null);




    /* measure once and keep in sync with ResizeObserver */
  useLayoutEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => setLoopWidth(el.scrollWidth / 2);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* offset the starting position for RTL */
  useEffect(() => {
    if (loopWidth) baseX.set(-loopWidth);
  }, [loopWidth]);

  /* wrap to 0‒loopWidth, then negate */
  const x = useTransform(baseX, v => {
    if (!loopWidth) return '0px';
    const wrapped = ((v % loopWidth) + loopWidth) % loopWidth;
    return `${-Math.round(wrapped)}px`;
  });


    const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = -directionFactor.current * baseVelocity * (delta / 1000) * speed.get()  ;

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get() ;

    baseX.set(baseX.get() + moveBy);
  });

    const repeated = i18n.language === "en" ?  [...logos, ...logos, ...logos] :  [...arabicLogos, ...arabicLogos, ...arabicLogos, ...arabicLogos, ...arabicLogos]; // repeat more times for arabic, since content is shorter


  // ---------- 5. hover handlers ----------
  const slow   = () => animate(speed, 0.2, { duration: 0.4 });
  const normal = () => animate(speed, 0.3,   { duration: 0.4 });

  return (
    <div className="relative flex flex-row justify-center overflow-hidden carasouelsDir">
      <motion.div
        ref={scrollerRef}
        
    className="flex flex-grow scrollbar-hide px-[2rem] pt-3 pb-10  w-[85vw] !gap-4 scroller noScrollbar"
        style={{ x }}
        onMouseEnter={slow}
        onMouseLeave={normal}
      >
        {repeated.map((src, idx) => (
          <div
            key={idx}
            className="w-fit whitespace-nowrap rounded-md text-black p-[.5rem] flex flex-row justify-center items-center gap-2 shrink-0 bg-[#FEF9F3]"
          >
            <img
              draggable={false}
              src={src.image}
              alt={`Logo ${idx}`}
              className="object-cover w-[5rem] h-[3rem] rounded-sm"
              onClick={(e) => e.preventDefault()}
            />
            <div className="font-medium paragraphText normal-case">{src.text}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export const asd = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.pageX - scrollRef.current!.offsetLeft;
    scrollLeftRef.current = scrollRef.current!.scrollLeft;
    scrollRef.current!.style.scrollBehavior = 'auto';
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startXRef.current) * 1.2;
    scrollRef.current!.scrollLeft = scrollLeftRef.current - walk;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    scrollRef.current!.style.scrollBehavior = 'smooth';
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const singleSetWidth = el.scrollWidth / 3;
    el.scrollLeft = singleSetWidth; // Start in the middle copy

    const handleScroll = () => {
      const maxScroll = el.scrollWidth;
      const scrollLeft = el.scrollLeft;
      const sectionWidth = maxScroll / 3;

      if (scrollLeft < sectionWidth * 0.5) {
        // Near the start
        el.scrollLeft += sectionWidth;
      } else if (scrollLeft > sectionWidth * 1.5) {
        // Near the end
        el.scrollLeft -= sectionWidth;
      }
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const repeated = [...logos, ...logos, ...logos]; // Repeat 3x for seamlessness

  return (
    <div className="relative flex flex-row justify-center overflow-hidden">
      <div
        ref={scrollRef}
        className="flex h-full flex-row overflow-x-scroll scrollbar-hide pt-2 pb-10 cursor-grab w-[100vw] gap-10 noScrollbar"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{ whiteSpace: 'nowrap' }}
      >
        {repeated.map((src, idx) => (
          <div
            key={idx}
            className="w-fit whitespace-nowrap rounded-md text-black p-[.5rem] flex flex-row justify-center items-center gap-2 shrink-0 bg-[#FEF9F3]"
          >
            <img
              draggable={false}
              src={src.image}
              alt={`Logo ${idx}`}
              className="object-cover w-[5rem] h-[3rem] rounded-sm"
              onClick={(e) => e.preventDefault()}
            />
            <div className="font-medium">{src.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
