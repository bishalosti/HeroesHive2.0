import React, { useEffect, useRef, useState } from 'react';

import image2 from './daf4a96a1da14ddb79eff2d1169c9d1c33b16e1c.png';
import image3 from './c86007f954e1b1178fa0ef52ab46b93939b00905.png';
import image4 from './0199590945b47855e728c2ac875cfdf395e8d4f4.png';
import { Button, Stack } from '@mui/material';

import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import { useTranslation } from 'react-i18next';

const logos = [
  { image: image2, text: 'Logodesign' , buttons:['Primary', 'Secondary', 'Icon'],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate sagittis eros eu vehicula. is neque diam, sit amet suscipit nisi aliquet quis. In metus est, commodo non urna a, fringilla iaculis tortor.Nulla nec auctor lacus. Proin orci augue, porta sed leo non, fringilla commodo lectus. Suspendisse gravida ornare turpis ultrices facilisis."},
  { image: image4, text: 'Color palette and typography', buttons:[] ,  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate sagittis eros eu vehicula. is neque diam, sit amet suscipit nisi aliquet quis. In metus est, commodo non urna a, fringilla iaculis tortor.Nulla nec auctor lacus. Proin orci augue, porta sed leo non, fringilla commodo lectus. Suspendisse gravida ornare turpis ultrices facilisis."},
  { image: image3, text: 'Brand Guideline', buttons:['Pdf'] , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate sagittis eros eu vehicula. is neque diam, sit amet suscipit nisi aliquet quis. In metus est, commodo non urna a, fringilla iaculis tortor.Nulla nec auctor lacus. Proin orci augue, porta sed leo non, fringilla commodo lectus. Suspendisse gravida ornare turpis ultrices facilisis."},
];

const arabicLogos = [
  { image: image2, text: 'تصميم الشعار', buttons: ['رئيسي', 'ثانوي', 'أيقونة'],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate sagittis eros eu vehicula. is neque diam, sit amet suscipit nisi aliquet quis. In metus est, commodo non urna a, fringilla iaculis tortor.Nulla nec auctor lacus. Proin orci augue, porta sed leo non, fringilla commodo lectus. Suspendisse gravida ornare turpis ultrices facilisis."},

  { image: image4, text: 'لوحة الألوان والخطوط', buttons: [] ,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate sagittis eros eu vehicula. is neque diam, sit amet suscipit nisi aliquet quis. In metus est, commodo non urna a, fringilla iaculis tortor.Nulla nec auctor lacus. Proin orci augue, porta sed leo non, fringilla commodo lectus. Suspendisse gravida ornare turpis ultrices facilisis."},

  { image: image3, text: 'دليل العلامة التجارية', buttons: ['ملف PDF'] ,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate sagittis eros eu vehicula. is neque diam, sit amet suscipit nisi aliquet quis. In metus est, commodo non urna a, fringilla iaculis tortor.Nulla nec auctor lacus. Proin orci augue, porta sed leo non, fringilla commodo lectus. Suspendisse gravida ornare turpis ultrices facilisis."},

];

export const asd = () => {
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
      const walk = (x - startX) * 2; // scroll speed
      scrollRef.current!.scrollLeft = scrollLeft - walk;
    };
  

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
  

  // Repeat items to enable seamless loop
  const repeated = [...logos, ...logos, ...logos];

  return (
    <div className="relative flex flex-row justify-center !overflow-hidden w-[97vw]  md:w-[98vw] max-w-[2000px] ">
      <div
        ref={scrollRef}
        className="flex flex-row overflow-x-auto scrollbar-hide  py-6 cursor-grab  ml-[4rem] max-sm:ml-[1.5rem]  "

        style={{ whiteSpace: 'nowrap' }}
      >
        {repeated.map((src, idx) => (
          <div
            key={idx}
            className={`h-fit p-[1rem] flex flex-col 'justify-start' w-fit  items-start shrink-0`}
          >
            <img
              draggable={false}
              src={src.image}
              alt={`Logo ${idx}`}
              className="h-[80%] object-cover rounded-t-xl w-[24rem] aspect-[3/4]"
              onClick={(e) => e.preventDefault()}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            />
            <div className={` font-medium w-[24rem] text-wrap text-left  overflow-hidden flex flex-col justify-start items-start pl-5 pt-5  font-[Tektur] rounded-b-md ${idx % 2 === 0 ? "bg-black" :"bg-[#FF8200]"} text-white `}>
                <div className='  flex flex-col h-[7rem]  md:text-[25px] text-[24px]'>
                    {src.text}
                    <Stack direction={"row"} gap={1} mt={1}> 
                    {src.buttons.map((data) => {
                        return (
                            
                            <Button variant='outlined' sx={{borderColor:"white", color:"white", borderRadius:"20px"}}  className='md:text-[20px] text-[14px]' >{data}</Button>
                        )
                    })}
                    
                    </Stack>

                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const baseSpeed = 40; // pixels/sec

export const ServiceCarasoule = () => {
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
                rest:  { height: '8rem'  },
                active: { height: '26rem' }
              }}
           
              transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
              className={`md:w-[24rem] w-[80vw]   pl-5 pt-5 font-[Tektur] rounded-b-md ${
                idx % 2 === 0 ? 'bg-black' : 'bg-[#FF8200]'
              } text-white flex flex-col justify-start items-start`}
            >
              <span className="md:text-[25px] text-[16px] leading-tight text-left">
                {src.text}
              </span>

              <Stack direction="row" gap={1} mt={1}>
                {src.buttons.map((label) => (
                  <Button
                    key={label}
                    variant="outlined"
                    sx={{ borderColor: 'white', color: 'white', borderRadius: '20px' }}
                    className="md:text-[20px] !text-[12px] !p-1 !px-2"
                  >
                    {label}
                  </Button>
                ))}
              </Stack>
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