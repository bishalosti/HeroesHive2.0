import { formatT } from "../../util"
import { EnterFromBottomAnimate } from "../animations/enterFromBottomAnimate"
import img from "../../assets/Gp5r4JZawAAq8tF.jpeg"

import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { Stack } from "@mui/material";
import React from "react";
import * as motion from "motion/react-client"


interface props {
   
    items:{icon:React.ReactNode, text:string}[],
    iconText:string,
    image:string,

    
}

export const AlternateWhatsIncluded = ({props}:{props:props[]}) => {


    return (
        <div className=" bg-[#FFF9F2]  text-black flex flex-col gap-10  w-full box-border md:!py-[2rem] justify-center items-center max-sm:!py-[1rem]   ">
        
        {props.map((data, ind) => {
            return (
            <div className={`justify-between text-left items-center flex flex-col ${ind % 2 === 0 ?"md:flex-row": "md:flex-row-reverse"  } h-fit  w-full md:gap-10 `}>
                <Stack className="h-[100%] md:w-[50%] w-full ">

                <motion.div
                    key={ind}
                    initial={"rest"}
                    whileHover={"active"}
                    animate={"rest"}
                    className="cursor-pointer flex flex-col !w-full p-4 "
                >
                    <motion.div
                    variants={{
                        rest:  { height: '30rem' }, 
                        active: { height: '25rem' } 
                    }}
                                
                    transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
                    className="  rounded-t-xl h-full w-full  z-50"
                    >
                        <img src={data.image} className="w-full rounded-t-lg h-full object-center z-50 object-cover"/>

                    </motion.div>

                    <motion.div
                    inherit={true}
                    variants={{
                        rest:  { height: '5rem'  },
                        active: { height: '12rem', paddingBottom:"1rem" }
                    }}
                
                    transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
                    className={`w-full pr-5  pl-5 pt-5 font-[Tektur] rounded-b-md ${
                        ind % 2 === 0 ? 'bg-black' : 'bg-[#FF8200]'
                    } text-white flex flex-col justify-start items-start`}
                    >
                    <span className="text-[20px] font-medium">{data.iconText}</span>

                    <motion.div className=" rtl:text-right text-left font-[Poppins] !text-[14px]  overflow-scroll noScrollbar" variants={{
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



                </Stack>
                <Stack className={`h-[50%] md:h-[100%] w-[100%]  md:w-[50%] justify-center rtl:text-right `}>
            
                <Stack gap={4} mt={"2rem"} className=" md:text-xl text-lg font-medium">
                {data.items.map((items, ind) => {
                    return (
                        <EnterFromBottomAnimate initial={{ y:100 }}
            whileInView={{ y:0 }}>
                            <Stack direction={"row"} gap={2} alignItems={"center"}>
                            <div className="p-2 px-3 rounded-lg bg-[#FEDFBC]" >
                                {items.icon}
                            </div>
                            {formatT([`websiteAndOnlineStores.walkAwayWith.items.${ind}`])}
                        </Stack>
                        </EnterFromBottomAnimate>
                        
                    )
                })}
                </Stack>
                
                </Stack>

            </div>
            )
        })}


        </div>
    )
}