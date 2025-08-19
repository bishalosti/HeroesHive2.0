import React, { useEffect, useRef, useState } from 'react';

import image2 from './c5c3353afe4b952efb4bb22b1eb96f4df58ad040.jpg';
import image3 from './b29a869714207610970962c2dd5c0f8028dae51a.jpg';
import image4 from './36252b243a2b6aed32b51a5d13c00c04052430ce.jpg';
import { Button, Stack } from '@mui/material';

import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import { useTranslation } from 'react-i18next';

const logos = [
  { image: image2, text: 'Repeatable results' , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate sagittis eros eu vehicula. is neque diam, sit amet suscipit nisi aliquet quis. In metus est, commodo non urna a, fringilla iaculis tortor.Nulla nec auctor lacus. Proin orci augue, porta sed leo non, fringilla commodo lectus. Suspendisse gravida ornare turpis ultrices facilisis."},
  { image: image4, text: 'Team consistency across projects',  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate sagittis eros eu vehicula. is neque diam, sit amet suscipit nisi aliquet quis. In metus est, commodo non urna a, fringilla iaculis tortor.Nulla nec auctor lacus. Proin orci augue, porta sed leo non, fringilla commodo lectus. Suspendisse gravida ornare turpis ultrices facilisis."},
  { image: image3, text: 'Faster turnaround with fewer revisions', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate sagittis eros eu vehicula. is neque diam, sit amet suscipit nisi aliquet quis. In metus est, commodo non urna a, fringilla iaculis tortor.Nulla nec auctor lacus. Proin orci augue, porta sed leo non, fringilla commodo lectus. Suspendisse gravida ornare turpis ultrices facilisis."},
];

const arabicLogos = [
  { image: image2, text: 'تصميم الشعار',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate sagittis eros eu vehicula. is neque diam, sit amet suscipit nisi aliquet quis. In metus est, commodo non urna a, fringilla iaculis tortor.Nulla nec auctor lacus. Proin orci augue, porta sed leo non, fringilla commodo lectus. Suspendisse gravida ornare turpis ultrices facilisis."},

  { image: image4, text: 'لوحة الألوان والخطوط' ,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate sagittis eros eu vehicula. is neque diam, sit amet suscipit nisi aliquet quis. In metus est, commodo non urna a, fringilla iaculis tortor.Nulla nec auctor lacus. Proin orci augue, porta sed leo non, fringilla commodo lectus. Suspendisse gravida ornare turpis ultrices facilisis."},

  { image: image3, text: 'دليل العلامة التجارية', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate sagittis eros eu vehicula. is neque diam, sit amet suscipit nisi aliquet quis. In metus est, commodo non urna a, fringilla iaculis tortor.Nulla nec auctor lacus. Proin orci augue, porta sed leo non, fringilla commodo lectus. Suspendisse gravida ornare turpis ultrices facilisis."},

];



const baseSpeed = 40; // pixels/sec

export const OurPlatformCarasouel = () => {
  const baseX = useMotionValue(0);
  const direction = useRef(1);
  const startXRef = useRef(0);
  const lastBaseXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const speed = useRef(baseSpeed); // dynamic speed
  const containerRef = useRef<HTMLDivElement>(null);

  const {i18n} = useTranslation();

  const [loopWidth, setLoopWidth] = useState(0);

  // Get loop width
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateWidth = () => setLoopWidth(el.scrollWidth / 2.5);
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
  const repeated = i18n.language === "en" ? [...logos, ...logos, ...logos, ...logos, ...logos] : [...arabicLogos, ...arabicLogos, ...arabicLogos,...arabicLogos,...arabicLogos,];

  return (
    //hidden description works only when static heights are given on the container. so heights might need to be changed depending on content.
    <div className="overflow-hidden w-full py-6 select-none carasouelsDir" >
      <motion.div
        ref={containerRef}
        className="flex gap-0 cursor-grab  active:cursor-grabbing touch-none "
        style={{ x }}
    onWheel={(e) => {
          direction.current = e.deltaY > 0 ? 1 : -1;
          speed.current = baseSpeed * 1.2; // quick burst
        }}
        drag={false} // we'll handle drag manually
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          startXRef.current = e.clientX;
          lastBaseXRef.current = baseX.get();
          isDraggingRef.current = true;
          speed.current = 0; // pause auto-scroll during drag
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
        {repeated.map((src, idx) => (
          <motion.div
            key={idx}
            initial={"rest"}
            whileHover={"active"}
            animate={"rest"}
            className="cursor-pointer flex flex-col w-fit shrink-0 p-4 "
          >
            <motion.div
              variants={{
                rest:  { height: '30rem' }, 
                active: { height: '12rem' } 
              }}
                        
              transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
              className=" w-[80vw]  md:w-[24rem] rounded-t-xl h-full  max-sm:!h-[20rem]"
            >
              <img
                src={src.image}
                draggable={false}
                alt={`Logo ${idx}`}
                className="w-full h-full object-cover pointer-events-none"
              />
            </motion.div>

            <motion.div
            inherit={true}
              variants={{
                rest:  { height: '7rem'  },
                active: { height: '25rem' }
              }}
           
              transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
              className={`md:w-[24rem] w-[80vw]   pl-5 pt-5 font-[Tektur] rounded-b-md ${
                idx % 2 === 0 ? 'bg-black' : 'bg-[#FF8200]'
              } text-white flex flex-col justify-start items-start`}
            >
              <span className="md:text-[25px] text-[16px] leading-tight text-left">
                {src.text}
              </span>

             
              <motion.div className="paragraphText text-left font-[Poppins] " variants={{
                rest:{
                  display:"none"
                }, 
                active:{
                  display:"inline",
                  marginTop:"5px"
                }
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate sagittis eros eu vehicula. 
                is neque diam, sit amet suscipit nisi aliquet quis. In metus est, commodo non urna a, fringilla iaculis tortor.
                Nulla nec auctor lacus. Proin orci augue, porta sed leo non, fringilla commodo lectus. Suspendisse gravida ornare turpis ultrices facilisis. 

              </motion.div>
              

            </motion.div>
          </motion.div>
        ))}

      </motion.div>
    </div>
  );
};