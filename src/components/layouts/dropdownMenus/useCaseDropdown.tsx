import { Link } from "react-router"
import image1 from "../../../assets/usecases/609e1de332215fa4a9fc342c456c82c0d97cebb9.jpg"
import image2 from "../../../assets/usecases/6b18b26bd15d11c52d6ffad2962955fefdeda7ee.jpg"
import image3 from "../../../assets/usecases/cfab666871c29ee1056b5f462fef3f58a123bf60.jpg"
import image4 from "../../../assets/usecases/fde154dd2ecf4c4e76b55e78c47b2262f0915e11.jpg"
import { MoveToSideAnimate } from "../../animations/moveToSideOnHover"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import * as motion from "motion/react-client"


const useCaseImages = [image1,image3,image2, image4]


export const UseCaseDropdown = ({routes}:{routes:{ to: string; name: string; key:string; subRoutes?: { to: string; name: string, description?:string, icon?:React.ReactNode }[] }[]}) => {
    return (
        <motion.div 
             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  rtl:text-right  ">
            {routes.find((r) => r.key === "Use-Cases")?.subRoutes?.map((sub, ind) => (
              <motion.div initial={"rest"}
            whileHover={"active"}
            animate={"rest"}>
              <Link
                key={sub.to}
                to={sub.to}
                className="text-lg font-medium hover:text-orange-500 flex flex-col gap-3"
              >
                <div className="overflow-hidden rounded-xl ">
                <img
                  src={useCaseImages[ind]}
                  className="aspect-video object-cover rounded-xl imageZoomIn"
                />
                </div>
                
                
                <div className="flex flex-col">
                  <div className="flex flex-row  items-center rtl:hidden gap-1 ">
                  <motion.span variants={{rest:{color:"transparent"}, active:{"color":"black"}}}  className="font-[Tektur] !text-xs"><FiberManualRecordIcon sx={{fontSize:"10px"}}/></motion.span>
                  <motion.span  variants={{rest:{x:"-12px"}, active:{"x":"5px"}}} className="font-[Tektur] text-xl">{sub.name}</motion.span>
                  </div>
                  <div className="hidden flex-row  items-center rtl:flex gap-1 ">
                  <motion.span  variants={{rest:{color:"transparent"}, active:{"color":"black"}}}  className="font-[Tektur] !text-xs"><FiberManualRecordIcon sx={{fontSize:"10px"}}/></motion.span>
                  <motion.span  variants={{rest:{x:"12px"}, active:{"x":"-5px"}}} className="font-[Tektur] text-xl">{sub.name}</motion.span>
                  </div>
                   <span className="font-[Poppins] max-w-[30rem] font-normal paragraphText text-wrap">
                    {sub.description}
                  </span>
                </div>
              </Link>
              </motion.div>
            ))}
          </motion.div>
    )
}