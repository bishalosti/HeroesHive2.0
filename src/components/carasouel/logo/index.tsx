import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import image1 from '../../../assets/trustedByImages/0c2a4ac9462a16a18103780373b897801c5eb0cd.png'
import image2 from '../../../assets/trustedByImages/4484d23be29d6cda44426ef4fa326e1fede01100.png'
import image3 from '../../../assets/trustedByImages/540bfe9e5077c32e2f48d950b14a14f51c501944.png'
import image4 from '../../../assets/trustedByImages/8f97d6fe8298466ffb8e5c90974e5df6cedaefcb.png'
import image5 from '../../../assets/trustedByImages/93345f65f88ca072f7a739106e99da2fadef921c.png'
import image6 from '../../../assets/trustedByImages/a0340b4a9a50dd978f615769abed8acab06dc9fd.png'
import image7 from '../../../assets/trustedByImages/b382ff57c9b6dd0e81094b7bac21fadfcf1e8720.png'
import image8 from '../../../assets/trustedByImages/d2438c732cdf86dc9d9973ecd7c7017afb3545fa.png'
import image9 from '../../../assets/trustedByImages/ee44adf0c97a735798d636222372e7f0c8226634.png'
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
import { wrap } from "@motionone/utils";


const logos = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

// export const LogoCarousel = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   let isDragging = false;
//   let startX = 0;
//   let scrollLeft = 0;

//   const handleMouseDown = (e: React.MouseEvent) => {
//     isDragging = true;
//     startX = e.pageX - scrollRef.current!.offsetLeft;
//     scrollLeft = scrollRef.current!.scrollLeft;
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - scrollRef.current!.offsetLeft;
//     const walk = (x - startX) * 2; // scroll speed
//     scrollRef.current!.scrollLeft = scrollLeft - walk;
//   };

//    useEffect(() => {
//     const el = scrollRef.current;
//     if (!el) return;

//     // Start halfway to allow seamless looping
//     el.scrollLeft = el.scrollWidth / 2;



//     const handleScroll = () => {
//       const scrollWidth = el.scrollWidth;
//       const scrollLeft = el.scrollLeft;
//       const clientWidth = el.clientWidth;
//       const midpoint = scrollWidth / 2;

//       if (scrollLeft <= 0) {
//         // Scrolled to the left end
//       } else if (scrollLeft >= scrollWidth - clientWidth - 100) {
//         // Scrolled near the right end
//         el.scrollLeft = midpoint - clientWidth;
//       }
//     };

//     el.addEventListener('scroll', handleScroll);
//     return () => el.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleMouseUp = () => {
//     isDragging = false;
//   };

//   return (
//     <div className="relative flex flex-row justify-center overflow-hidden">
//   <div className="fade-left" />
//   <div className="fade-right" />

//   <div
//     ref={scrollRef}
//     className="flex flex-row overflow-x-auto scrollbar-hide md:py-6 cursor-grab w-[90vw] max-w-[2000px] gap-10 noScrollbar"
//     onMouseDown={handleMouseDown}
//     onMouseMove={handleMouseMove}
//     onMouseUp={handleMouseUp}
//     onMouseLeave={handleMouseUp}
//   >
//     {[...logos,...logos].map((src, idx) => (
//       <div
//         key={idx}
//         className="bg-[#FF820005] text-[black] max-sm:min-w-[5rem] max-sm:max-w-[5rem]  min-w-[10rem] max-w-[10rem] h-[10rem] max-sm:p-[0.5rem] p-[1rem] flex flex-col justify-center items-center shrink-0"
//       >
//         <img
//           draggable={false}
//           src={src}
//           alt={`Logo ${idx}`}
//           className="max-sm:w-[100%]  w-[60%] h-auto object-contain  invert"
//           onClick={(e) => e.preventDefault()}
//         />
//       </div>
//     ))}
//   </div>
// </div>

//   );
// };

export function LogoCarousel({ baseVelocity = 100 }: { baseVelocity?: number }) {
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

  /* drive the marquee */
  useAnimationFrame((_, delta) => {
    const moveBy = -baseVelocity * speed.get() * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative flex flex-row justify-center overflow-hidden carasouelsDir">
  <div className="fade-left" />
  <div className="fade-right" />      <motion.div
        ref={scrollerRef}
        className="flex flex-row scrollbar-hide md:py-6 w-[90vw] max-w-[2000px] gap-10 noScrollbar"
        style={{ x }}
        
      >
       {[...logos,...logos].map((src, idx) => (
      <div
        key={idx}
        className="bg-[#FF820005] text-[black] max-sm:min-w-[5rem] max-sm:max-w-[5rem]  min-w-[10rem] max-w-[10rem] h-[10rem] max-sm:p-[0.5rem] p-[1rem] flex flex-col justify-center items-center shrink-0"
      >
        <img
          draggable={false}
          src={src}
          alt={`Logo ${idx}`}
          className="max-sm:w-[100%]  w-[60%] h-auto object-contain  invert"
          onClick={(e) => e.preventDefault()}
        />
      </div>
    ))}
      </motion.div>
    </div>
  );
}

