import { Link } from "react-router"

import * as motion from "motion/react-client"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const ServicesDropdown = ({routes}:{routes:{ to: string; name: string;key:string; subRoutes?: { to: string; name: string, description?:string, icon?:React.ReactNode }[] }[]}) => {
    return (
        <div className="grid grid-cols-2 pb-[1rem] gap-[3rem] md:gap-x-[10rem] xl:gap-x-[10rem] mw:gap-x-[3rem] rtl:text-right ">
            {routes.find((r) => r.key === "Services")?.subRoutes?.map((sub) => (
               <motion.div initial={"rest"}
            whileHover={"active"}
            animate={"rest"}>
              <Link
                key={sub.to}
                to={sub.to}
                className="text-sm hover:text-orange-500 border-b-[1px] pb-[2rem] !text-[14px] flex flex-row gap-4 font-normal  !items-center "
              >
                {sub.icon}
                <div className="flex flex-col">
                  <div className=" flex-row  items-center rtl:!hidden flex ">
                    <motion.span variants={{rest:{color:"transparent"}, active:{"color":"black"}}}  className="font-[Tektur] !text-xs"><FiberManualRecordIcon sx={{fontSize:"10px"}}/></motion.span>
                    <motion.span  variants={{rest:{x:"-10px"}, active:{"x":"5px"}}} className="font-[Tektur] text-[16px]">{sub.name}</motion.span>
                  </div>
                                  <div className=" flex-row  items-center hidden rtl:flex ">
                    <motion.span variants={{rest:{color:"transparent"}, active:{"color":"black"}}} className="font-[Tektur] !text-xs"><FiberManualRecordIcon sx={{fontSize:"10px"}}/></motion.span>
                    <motion.span  variants={{rest:{x:"10px"}, active:{"x":"-5px"}}} className="font-[Tektur] text-[16px]">{sub.name}</motion.span>
                  </div>
                  <span className="font-[Poppins] font-normal text-base text-gray-700">
                    {sub.description}
                  </span>

                </div>
                
              </Link>
              </motion.div>
            ))}
          </div>
    )
}