import React, { useEffect, useLayoutEffect, useRef } from 'react';

import image1 from  '../../../assets/smallGridImages/0a00d0c6bca04ac7f22fb69e5a528d62dba095cf.jpg';
import image2 from  '../../../assets/smallGridImages/3a85ad05f1104ab85031c2dff624ec175ff64d5d (1).png';
import image3 from  '../../../assets/smallGridImages/fda76ed32be16766c106da8926e05489bd543c6e copy.jpg'
import image4 from  '../../../assets/smallGridImages/6b18b26bd15d11c52d6ffad2962955fefdeda7ee.jpg';
import image5 from  '../../../assets/smallGridImages/4a2be75cf77a3b0cfb7ce968610156bdaa49e183.jpg';
import image6 from  '../../../assets/smallGridImages/8648468267d20d7afa3c3c9c79f085aef59f3ee6 (1).png';
import image7 from  '../../../assets/smallGridImages/905196dd0f2f96a022edfdd16c4785337b536725.jpg';
import image8 from  '../../../assets/smallGridImages/ad8b48823b18d2f3e6b3c5471359217b37e8f15b (1).png';
import image9 from  '../../../assets/smallGridImages/fda76ed32be16766c106da8926e05489bd543c6e.jpg';
import image10 from '../../../assets/smallGridImages/66ca067a517d6e767e767f86bcfe848307d7947b.jpg';
import image11 from '../../../assets/smallGridImages/24bc0a5a0e538a0749c7a7e627a4da92f2322efd.jpg';
import image12 from '../../../assets/smallGridImages/d2a1e5dcd80fba0e8ce6a3cecb541e992eb4cc5f.jpg';


const topImages = [image8,image5,image3, image4, image6];
const bottomImages = [image12,image5,image10, image1, image2, image11];

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



import {  useState } from "react";

export function TopImageScroller({ baseVelocity = 100 }: { baseVelocity?: number }) {
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
  const [contentWidth, setContentWidth] = useState(0);
  useEffect(() => {
    setContentWidth((scrollerRef.current?.scrollWidth ?? 0) / 2);
  }, []);



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

  // ---------- 5. hover handlers ----------
  const slow   = () => animate(speed, 0.2, { duration: 0.4 });
  const normal = () => animate(speed, 0.3,   { duration: 0.4 });

  return (
    <div className="relative flex flex-row justify-center overflow-hidden carasouelsDir">
      <motion.div
        ref={scrollerRef}
    className="flex flex-grow scrollbar-hide px-[2rem] pt-3 pb-3  w-[85vw] gap-3 scroller noScrollbar"
        style={{ x }}
        onMouseEnter={slow}
        onMouseLeave={normal}
      >
        {[...topImages, ...topImages, ...topImages, ...topImages].map((src, i) => (
          <div
            key={i}
            className="w-[10rem] h-[10rem] shrink-0  "
          >
            <img
              src={src}
              alt={`Logo ${i}`}
              className="w-full h-full object-cover rounded-lg"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function BottomImageScroller({ baseVelocity = 100 }: { baseVelocity?: number }) {
  const baseX = useMotionValue(0);
  const speed = useMotionValue(0.3);
  const scrollerRef = useRef<HTMLDivElement>(null);
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
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000) * speed.get()  ;

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

  const slow   = () => animate(speed, 0.2, { duration: 0.4 });
  const normal = () => animate(speed, 0.3,   { duration: 0.4 });

  return (
    <div className="relative overflow-hidden w-[90vw] mx-auto px-4 carasouelsDir">
      <motion.div
        ref={scrollerRef}
        className="flex"
        style={{ x }}
        onMouseEnter={slow}
        onMouseLeave={normal}
      >
        {[...bottomImages, ...bottomImages, , ...bottomImages, , ...bottomImages].map((src, i) => (
          <div key={i} className="w-[10rem] h-[10rem] shrink-0 mr-3 rounded-lg">
            <img
              src={src}
              alt={`Logo ${i}`}
              className="w-full h-full object-cover  rounded-lg"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}






export const TopImageCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging = true;
    startX = e.pageX - scrollRef.current!.offsetLeft;
    scrollLeft = scrollRef.current!.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
      const walk = (x - startX) // scroll speed
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };


  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
  
    el.scrollLeft = el.scrollWidth / 2;
  
    const interval = setInterval(() => {
      el.scrollLeft += 1;
    }, 10); // speed
  
    return () => clearInterval(interval);
  }, []);


   useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Start halfway to allow seamless looping
    el.scrollLeft = el.scrollWidth / 2;



    const handleScroll = () => {
      const scrollWidth = el.scrollWidth;
      const scrollLeft = el.scrollLeft;
      const clientWidth = el.clientWidth;
      const midpoint = scrollWidth / 2;

      if (scrollLeft <= 0) {
        // Scrolled to the left end
      } else if (scrollLeft >= scrollWidth - clientWidth - 100) {
        // Scrolled near the right end
        el.scrollLeft = midpoint - clientWidth;
      }
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseUp = () => {
    isDragging = false;
  };

  return (
    <div className="relative flex flex-row justify-center overflow-hidden">

  <div
    ref={scrollRef}
    className="flex flex-row overflow-x-auto scrollbar-hide px-[2rem] pt-3 pb-3 cursor-grab w-[85vw] gap-3 noScrollbar"
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}
    onMouseLeave={handleMouseUp}
  >
    {[...topImages, ...topImages].map((src, idx) => (
<div
  key={idx}
  className="max-md:w-[10rem] max-md:h-[10rem] w-[10rem] h-[10rem]  justify-center items-center shrink-0"
>

        <img
          draggable={false}
          src={src}
          alt={`Logo ${idx}`}
          className=" w-[100%] h-full object-cover rounded-lg "
          onClick={(e) => e.preventDefault()}
        />
      </div>
    ))}
  </div>
</div>

  );
};


export const BottomImageCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
  
    const handleMouseDown = (e: React.MouseEvent) => {
      isDragging = true;
      startX = e.pageX - scrollRef.current!.offsetLeft;
      scrollLeft = scrollRef.current!.scrollLeft;
    };
  
    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current!.offsetLeft;
      const walk = (x - startX) ; // scroll speed
      scrollRef.current!.scrollLeft = scrollLeft - walk;
    };
  
    
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
    
        const midpoint = el.scrollWidth / 2;
        el.scrollLeft = midpoint;
    
        const scrollStep = 1;
        const resetBuffer = 100;
    
        const autoScroll = () => {
          if (!el) return;
          el.scrollLeft -= scrollStep;
    
          if (el.scrollLeft <= resetBuffer) {
            // Jump to second half to simulate infinite scroll from right to left
            el.scrollLeft = midpoint;
          }
        };
    
        const interval = setInterval(autoScroll, 10); // Adjust speed here
    
        return () => clearInterval(interval);
      }, []);

  
  
    const handleMouseUp = () => {
      isDragging = false;
    };
  
    return (
      <div className="relative flex flex-row justify-center overflow-hidden">

  
    <div
      ref={scrollRef}
      className="flex flex-row overflow-x-auto scrollbar-hide px-4 py-3 cursor-grab w-[90vw] gap-3  noScrollbar"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {[...bottomImages, ...bottomImages].map((src, idx) => (
<div
  key={idx}
  className="max-md:w-[10rem] max-md:h-[10rem] w-[10rem] h-[10rem]   justify-center items-center shrink-0"
>

         <img
           src={src}
           draggable={false}
           alt={`Logo ${idx}`}
           className=" w-[100%] h-full object-cover rounded-lg "
           onClick={(e) => e.preventDefault()}
         />
       </div>
      ))}
    </div>
  </div>
  
    );
  };