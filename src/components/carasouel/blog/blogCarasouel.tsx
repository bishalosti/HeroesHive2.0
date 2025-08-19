import React, { useEffect, useRef } from 'react';

import image1 from './0725713b360b80b87567e6e5df7f86b668c11bf3.jpg';
import image2 from './4b856875c12e812759550cff99930c5da209f62c.png';
import image3 from './d2844bace69259086d68cad57897200ec172630d.jpg';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

const logos = [
  { image: image2, text: 'How to Launch a Brand in 14 Days with a Remote Team' , subtitle:"Tips from our Squad Leads on executing fast with zero full-time hires."},
  { image: image3, text: '5 Common Startup Design Mistakes (And How to Avoid Them)', subtitle:"Real examples and visual fixes you can implement right now." },
  { image: image1, text: 'When to Start Paid Ads — and What to Do Before Spending a Dime', subtitle:"Our internal framework for launching ad-ready creative." }
];

export const BlogCarasoule = () => {
      const navigate = useNavigate();

  // Repeat items to enable seamless loop
  const repeated = [...logos, ...logos, ...logos];

  return (
    <div className=" gap-4 cursor-pointer font-semibold items-start justify-start text-left text-[1.5rem] carasouelsDir w-full font-[Tektur]">
        <div  className="w-full flex flex-row overflow-auto gap-4 noScrollbar font-semibold items-start justify-start text-left text-[1.5rem]  font-[Tektur]">
               
        {repeated.map((src, idx) => (
          <div
            key={idx}
            onClick={()=>{
                navigate("/blog/id")
            }}
            className={`min-h-[36rem] mt-5 max-w-[22rem] min-w-[22rem] bg-white p-5 !border-[1px] !border-solid rounded-lg !border-[#CCCCCC] flex flex-col items-start shrink-0`}
          >
            <img
              src={src.image}
              alt={`Logo ${idx}`}
              className="min-h-[20rem] w-full object-cover pb-2   aspect-video"
              onClick={(e) => e.preventDefault()}
            />
            <div className="font-medium text-sm font-[Poppins] text-[#6B6B6B] ">Startups & Entrepreneurship</div>
            <div className="font-medium font-[Poppins] text-lg pt-3 paragraphText">{src.text}</div>
            <div className="font-light font-[Poppins] text-sm mt-2 ">{src.subtitle}</div>

            <Button className='!bg-black !text-white !normal-case !rounded-lg !mt-2'>Read More</Button>
          </div>
        ))}
      </div>
    </div>
  );
};
