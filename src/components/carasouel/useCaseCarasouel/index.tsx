import React, { useEffect, useRef, useState } from 'react';

import { Button } from '@mui/material';
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import image1 from './b1f29192cd6e87bbf3de119fda3efb0bbca2c7bb.png';
import image2 from './ad6df76e08b6e503ccaecd3e0abfefa41fda557a.png';
import image3 from './93b6867b6d07546efcad4ac84e5038a2cd3c22d0.png';
import image4 from './b332fd22f3630af2db1afa92e5fa998f7eed8296.png';
import { useTranslation } from 'react-i18next';

const logos = [
  { image: image2, text: 'Brand identity & logo design' },
  { image: image4, text: 'Product page visuals & lifestyle mockups' },
  { image: image3, text: 'Shopify/WooCommerce storefront setup' },
  { image: image1, text: 'Homepage, cart, and collection page design' },
];

const arabicLogos = [
  { image: image2, text: 'هوية العلامة التجارية وتصميم الشعار' },
  { image: image4, text: 'مرئيات صفحة المنتج ونماذج بالحجم الطبيعي لأسلوب الحياة' },
  { image: image3, text: 'إعداد واجهة متجر Shopify/WooCommerce' },
  { image: image1, text: 'تصميم الصفحة الرئيسية، سلة التسوق، وصفحة المجموعة' },
]

const baseSpeed = 40; // pixels/sec

export const UseCaseCarasoule = () => {
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
    const repeated = i18n.language === 'en' ?[...logos, ...logos, ...logos, ...logos, ...logos] : [...arabicLogos, ...arabicLogos, ...arabicLogos, ...arabicLogos, ...arabicLogos];


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
          whileHover={  {y:20} }
          transition={{
            duration: 0.3, // optional for a snappier exit
            ease: "easeOut",
          } }           
    key={idx}
            className={`h-[70vh] p-[1rem] flex flex-col ${
              idx % 2 === 0 ? 'justify-start' : 'justify-end'
            } items-start shrink-0`}
          >
            <img
              draggable={false}
              src={src.image}
              alt={`Logo ${idx}`}
              className="h-[80%] object-cover rounded-xl w-[auto] aspect-[0.92]"
              onClick={(e) => e.preventDefault()}
            />
            <div className="font-medium  text-[20px] max-w-[20rem] text-wrap text-left rtl:text-right rtl:!w-[100%]  ">{src.text}</div>
          </motion.div>
        ))}

      </motion.div>
    </div>
  );
};
