import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../assets/carasouel/3a85ad05f1104ab85031c2dff624ec175ff64d5d.png';
import image2 from '../../../assets/carasouel/8648468267d20d7afa3c3c9c79f085aef59f3ee6.png';
import image3 from '../../../assets/carasouel/ad8b48823b18d2f3e6b3c5471359217b37e8f15b.png';
import './index.css';
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import { useTranslation } from 'react-i18next';

const logoComponents = [
  <motion.div whileHover={{y:-10}} className="image1" onClick={() => {
    console.log("touched")
  }}>
    <span className="text-[26px]  text-wrap text-left font-medium font-[Tektur] text-white">
      Brand & Launch Pack
    </span>
    <span className="text-[16px] text-wrap text-left font-normal font-[Poppins] text-white">
      Everything you need to launch your brand logo, identity, website, and social kit.
    </span>
  </motion.div>,

  <motion.div whileHover={{y:-10}} className="image2" onClick={() => {
    console.log("touched")
  }}>
    <span className="text-[26px] text-wrap text-left font-medium font-[Tektur] text-white">
      Online Store Pack
    </span>
    <span className="text-[16px] text-wrap text-left  font-normal font-[Poppins] text-white">
      Build and launch a conversion-ready store with design, content, and dev.
    </span>
  </motion.div>,

  <motion.div whileHover={{y:-10}} className="image3" onClick={() => {
    console.log("touched")
  }}>
    <span className="text-[26px] text-wrap text-left font-medium font-[Tektur] text-white">
      Content & Ads Pack
    </span>
    <span className="text-[16px] text-wrap text-left font-normal font-[Poppins] text-white">
      Get consistent, high-quality visuals, videos, and ad creatives delivered monthly.
    </span>
  </motion.div>,
];

const arabicLogoComponents = [
<motion.div whileHover={{y:-10}} className="image1" onClick={() => {
 console.log("تم اللمس")
 }}>
 <span className="text-[26px] text-wrap text-right font-medium font-['Cairo'] text-white">
 باقة العلامة التجارية والإطلاق
 </span>
 <span className="text-[16px] text-wrap text-right font-normal font-['Cairo'] text-white">
 كل ما تحتاجه لإطلاق علامتك التجارية من شعار وهوية وموقع إلكتروني وأدوات للتواصل الاجتماعي.
 </span>
 </motion.div>,

 <motion.div whileHover={{y:-10}} className="image2" onClick={() => {
 console.log("تم اللمس")
 }}>
 <span className="text-[26px] text-wrap text-right font-medium font-['Cairo'] text-white">
 باقة المتجر الإلكتروني
 </span>
 <span className="text-[16px] text-wrap text-right font-normal font-['Cairo'] text-white">
 أنشئ وأطلق متجرًا جاهزًا لزيادة التحويلات يشمل التصميم والمحتوى والتطوير.
 </span>
 </motion.div>,

<motion.div whileHover={{y:-10}} className="image3" onClick={() => {
 console.log("تم اللمس")
 }}>
 <span className="text-[26px] text-wrap text-right font-medium font-['Cairo'] text-white">
 باقة المحتوى والإعلانات
 </span>
 <span className="text-[16px] text-wrap text-right font-normal font-['Cairo'] text-white">
 احصل على مرئيات ومقاطع فيديو وتصميمات إعلانية عالية الجودة بشكل مستمر، مع تسليم شهري.
 </span>
 </motion.div>,
];






export const asd = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  /* ---------- Drag state ---------- */
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  /* ---------- Auto‑scroll state ---------- */
  const baseSpeed = 1.2;              // normal speed (px per frame)
  const hoverSpeed = 1;            // slower speed on hover
  const speedRef = useRef(baseSpeed); // current live speed
  const isPaused = useRef(false);     // true only while dragging

  /* ---------- Drag handlers ---------- */
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging = true;
    isPaused.current = true;
    startX = e.pageX - scrollRef.current!.offsetLeft;
    scrollLeft = scrollRef.current!.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    
    isDragging = false;
    isPaused.current = false;
  };

  /* ---------- Hover handlers ---------- */
  const handleMouseEnter = () => {
    
    speedRef.current = hoverSpeed;   // slow down
  };

  const handleMouseLeave = () => {
    speedRef.current = baseSpeed;    // restore full speed
    handleMouseUp();                 // also finish any drag
  };

  /* ---------- Initial setup + edge warp ---------- */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const third = el.scrollWidth / 3;
    el.scrollLeft = third;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      if (scrollLeft <= 0)            el.scrollLeft = third;
      else if (scrollLeft >= scrollWidth - clientWidth)
                                      el.scrollLeft = third - clientWidth;
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  /* ---------- Auto‑scroll engine ---------- */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let id: number;
    const step = () => {
      if (!isPaused.current) {
        el.scrollLeft += speedRef.current;
      }

      /* keep it seamless */
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const third = scrollWidth / 3;
      if (scrollLeft <= 0)                 el.scrollLeft = third;
      else if (scrollLeft >= scrollWidth - clientWidth)
                                           el.scrollLeft = third - clientWidth;

      id = requestAnimationFrame(step);
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="relative flex justify-center overflow-hidden max-w-[2000px] w-[100vw]">
      <div
        ref={scrollRef}
        className="flex flex-row overflow-x-scroll !text-left scrollbar-hide pt-6 pb-2 cursor-grab gap-5"
        style={{ whiteSpace: 'nowrap' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}  // ← slow
        onMouseLeave={handleMouseLeave}  // ← fast
      >
        {[...logoComponents, ...logoComponents, ...logoComponents].map((comp, i) => (
          <div key={i} className="!text-left shrink-0 min-w-[350px]">
            {comp}
          </div>
        ))}
      </div>
    </div>
  );
};


const baseSpeed = 40; // pixels/sec

export const PopularCarasoul = () => {
  const {i18n} = useTranslation()
  const baseX = useMotionValue(0);
  const direction = useRef(1);
    const startXRef = useRef(0);
  const lastBaseXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const speed = useRef(baseSpeed); // dynamic speed
  const containerRef = useRef<HTMLDivElement>(null);

  const [loopWidth, setLoopWidth] = useState(0);

  // Get loop width
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateWidth = () => setLoopWidth(el.scrollWidth / 3);
    updateWidth();

    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Slow down on hover
  const handleMouseEnter = () => (speed.current = baseSpeed / 4);
  const handleMouseLeave = () => (speed.current = baseSpeed);

  // Animate on each frame
  useAnimationFrame((t, delta) => {
    const moveBy = direction.current * (delta / 1000) * speed.current;
    baseX.set(baseX.get() + moveBy);
  });

  // Transform to wrapped scroll
  const x = useTransform(baseX, (v) => {
    if (!loopWidth) return "0px";
    const wrapped = wrap(0, loopWidth, v);
    return `-${Math.round(wrapped)}px`;
  });


  const data = i18n.language === "en"? [...logoComponents, ...logoComponents, ...logoComponents] : [...arabicLogoComponents, ...arabicLogoComponents, ...arabicLogoComponents]
  return (
    <div className="overflow-hidden w-full py-6 select-none carasouelsDir" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.div
        ref={containerRef}
        className="flex gap-6 cursor-grab  active:cursor-grabbing  touch-none" 
        style={{ x }}
        onWheel={(e) => {
          direction.current = e.deltaY > 0 ? 1 : -1;
          speed.current = baseSpeed * 1.2; 
        }}
        drag={false} 
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          startXRef.current = e.clientX;
          lastBaseXRef.current = baseX.get();
          isDraggingRef.current = true;
          speed.current = 0; 
        }}
        onPointerMove={(e) => {
          if (!isDraggingRef.current) return;
          const dx = e.clientX - startXRef.current ;
          baseX.set((lastBaseXRef.current - dx));
        }}
        onPointerUp={(e) => {
          isDraggingRef.current = false;
          speed.current = baseSpeed; // resume auto-scroll
        }}
      >
        {data.map((logo, i) => {
          return (
            <>
              {logo}
            </>)
        })}
      </motion.div>
    </div>
  );
};


