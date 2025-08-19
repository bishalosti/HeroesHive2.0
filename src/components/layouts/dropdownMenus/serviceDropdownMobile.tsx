import { Link } from "react-router"
import * as motion from "motion/react-client"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const ServicesDropdownMobile = ({routes}:{routes:{ to: string;key:string; name: string; subRoutes?: { to: string; name: string, description?:string, icon?:React.ReactNode }[] }[]}) => {
  return (
        <div className="grid grid-cols-1 pb-[1rem] gap-[1rem]  pl-3">
            {routes.find((r) => r.key === "Services")?.subRoutes?.map((sub, ind) => {
              const totalLength = routes.find((r) => r.key === "Services")?.subRoutes?.length as unknown as number - 1;

              return(
                 <motion.div initial={"rest"}
            whileHover={"active"}
            animate={"rest"}>
              <Link
                key={sub.to}
                to={sub.to}
                className={` text-sm hover:text-orange-500 border-b-[1px] pt-[1rem] pb-[1.5rem] ${totalLength === ind && "!border-none py-0" } !text-[15px] flex flex-row gap-4 font-normal  !items-start `}
              >
                {sub.icon}
                <div className="flex flex-col justify-center mt-[-3px] ">
                  <div className=" flex-row  items-center rtl:hidden flex">
                    <motion.span variants={{rest:{color:"transparent"}, active:{"color":"black"}}} className="font-[Tektur] !text-xs"><FiberManualRecordIcon sx={{fontSize:"10px"}}/></motion.span>
                    <motion.span  variants={{rest:{x:"-10px"}, active:{"x":"5px"}}} className="font-[Tektur] text-[15px]">{sub.name}</motion.span>
                  </div> 
                  <div className="hidden flex-row  items-center rtl:flex ">
                    <motion.span variants={{rest:{color:"transparent"}, active:{"color":"black"}}} className="font-[Tektur] !text-xs"><FiberManualRecordIcon sx={{fontSize:"10px"}}/></motion.span>
                    <motion.span  variants={{rest:{x:"10px"}, active:{"x":"-5px"}}} className="font-[Tektur] text-[15px]">{sub.name}</motion.span>
                  </div>                 
                  
                  <span className="font-[Poppins] font-normal text-[14px] text-gray-700">
                    {sub.description}
                  </span>

                </div>
                
              </Link>
              </motion.div>
            )})}
          </div>
    )
}