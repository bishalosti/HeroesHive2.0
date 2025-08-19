import React, { useEffect, useRef, useState } from 'react';


import image2 from './3deff45113120af75291132bff7942c2dd77fa90.png';
import image3 from './e44e7c34e0c16e29118063b6d18416685543f941.png';
import image4 from './e5f63250a381b905dd78a1c4acb6c9a78d1f9624.png';
import { Button } from '@mui/material';
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import { useTranslation } from 'react-i18next';

const logos = [
  { image: image2, text: 'Lukas Schneider' , country:'Germany', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat ac erat vitae ultrices. Suspendisse luctus commodo lectus sit amet interdum. Nullam id hendrerit lacus. Morbi nec fringilla erat, porttitor ultrices quam. Nam efficitur luctus ante sit amet hendrerit."},
  { image: image4, text: 'Noah Bennet', country:"Italy",  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat ac erat vitae ultrices. Suspendisse luctus commodo lectus sit amet interdum. Nullam id hendrerit lacus. Morbi nec fringilla erat, porttitor ultrices quam. Nam efficitur luctus ante sit amet hendrerit." },
  { image: image3, text: 'Zayn Mitchell', country:'China',  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat ac erat vitae ultrices. Suspendisse luctus commodo lectus sit amet interdum. Nullam id hendrerit lacus. Morbi nec fringilla erat, porttitor ultrices quam. Nam efficitur luctus ante sit amet hendrerit." },
  
];

const arabicLogos = [
  { image: image2, text: 'لوكاس شنايدر' , country:'ألمانيا',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat ac erat vitae ultrices. Suspendisse luctus commodo lectus sit amet interdum. Nullam id hendrerit lacus. Morbi nec fringilla erat, porttitor ultrices quam. Nam efficitur luctus ante sit amet hendrerit."},
  { image: image4, text: 'نوح بينيت', country:"إيطاليا" , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat ac erat vitae ultrices. Suspendisse luctus commodo lectus sit amet interdum. Nullam id hendrerit lacus. Morbi nec fringilla erat, porttitor ultrices quam. Nam efficitur luctus ante sit amet hendrerit."},
  { image: image3, text: 'زين ميتشل', country:'الصين' ,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat ac erat vitae ultrices. Suspendisse luctus commodo lectus sit amet interdum. Nullam id hendrerit lacus. Morbi nec fringilla erat, porttitor ultrices quam. Nam efficitur luctus ante sit amet hendrerit."},
  
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
    <div className="relative flex flex-row justify-center overflow-hidden">
      <div
        ref={scrollRef}
        className="flex flex-row overflow-x-auto scrollbar-hide py-3 cursor-grab w-[100vw]"

        style={{ whiteSpace: 'nowrap' }}
      >
        {repeated.map((src, idx) => (
          <div
            key={idx}
            className={`max-h-[75vh] p-[1rem] flex flex-col 'justify-start' w-fit  items-start shrink-0`}
          >
            <img
              draggable={false}
              src={src.image}
              alt={`Logo ${idx}`}
              className="h-[80%] object-cover object-top rounded-t-xl w-[28rem]"
              onClick={(e) => e.preventDefault()}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            />
            <div className={` font-medium  w-[28rem] overflow-hidden flex flex-col justify-start items-start px-5 py-5 font-[Tektur] rounded-b-md ${idx % 2 === 0 ? "bg-black" :"bg-[#FF8200]"} text-white `}>
                <div className=' text-[1.2rem] md:text-[1.2rem] w-full flex flex-row justify-between items-center'>
                    {src.text}
                    
                            
                            <Button variant='outlined' sx={{borderColor:"white", color:"white", borderRadius:"20px"}}  >{src.country}</Button>
                        
                    

                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



const baseSpeed = 40; // pixels/sec

export const AboutUsCarasoule = () => {

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
            className={` p-[1rem] flex flex-col justify-start w-fit items-start shrink-0`}
          >

              <motion.img
               variants={{
                rest:  { height: '60vh' }, 
                active: { height: '50vh' } 
              }}
                transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
                draggable={false}
                src={src.image}
                alt={`Logo ${idx}`}
                className="h-full !object-cover !object-top rounded-t-xl !w-[28rem]"
                onClick={(e) => e.preventDefault()}
              />

                 <motion.div
            inherit={true}
              variants={{
                rest:  { height: '12vh'  },
                active: { height: '22vh' }
              }} className={` font-medium   w-[80vw] md:w-[28rem] overflow-hidden flex flex-col justify-start items-start px-5 py-5 font-[Tektur] rounded-b-md ${idx % 2 === 0 ? "bg-black" :"bg-[#FF8200]"} text-white `}>
                <div className=' text-[1rem] md:text-[1.2rem] w-full flex flex-row justify-between items-center'>
                    {src.text} <Button variant='outlined' sx={{borderColor:"white", color:"white", borderRadius:"20px"}} className='md:!text-inherit !text-[12px]'  >{src.country}</Button>
                </div>
                                 <motion.div
            inherit={true}
              variants={{
                rest:  { display:"none"  },
                active: { display: 'block' }
              }} >
                <div className=' text-[14px] font-[Poppins] font-normal text-left w-full flex flex-row justify-between items-center py-[2vh]'>
                  {src.description}
                </div>
            </motion.div>
            </motion.div>
              </motion.div>
           
        ))}

      </motion.div>
    </div>
  );
};
