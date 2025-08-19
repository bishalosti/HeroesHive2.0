import { Link } from "react-router"
import image1 from "../../../assets/usecases/609e1de332215fa4a9fc342c456c82c0d97cebb9.jpg"
import image2 from "../../../assets/usecases/6b18b26bd15d11c52d6ffad2962955fefdeda7ee.jpg"
import image3 from "../../../assets/usecases/cfab666871c29ee1056b5f462fef3f58a123bf60.jpg"
import image4 from "../../../assets/usecases/fde154dd2ecf4c4e76b55e78c47b2262f0915e11.jpg"
import * as motion from "motion/react-client"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const useCaseImages = [image1,image3,image2, image4]


export const UseCaseDropdownMobile = ({routes}:{routes:{ to: string; name: string; key:string; subRoutes?: { to: string; name: string, description?:string, icon?:React.ReactNode }[] }[]}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2   gap-6 ml-3 pb-[1rem]">
            {routes.find((r) => r.key === "Use-Cases")?.subRoutes?.map((sub, ind) => {
              const totalLength = routes.find((r) => r.key === "Use-Cases")?.subRoutes?.length as unknown as number - 1;

              return(
                 <motion.div initial={"rest"}
            whileHover={"active"}
            animate={"rest"}>
              <Link
                key={sub.to}
                to={sub.to}
                className={`text-[15px] font-semibold hover:text-orange-500 flex sm:flex-col gap-3 pb-[1rem]   max-sm:!border-b-[1px] ${totalLength=== ind && "!border-none !p-0" }`}
              >
                <img
                  src={useCaseImages[ind]}
                  className="aspect-video object-cover rounded-xl max-sm:max-w-[10rem]"
                />
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row  items-center rtl:hidden ">
                    <motion.span variants={{rest:{display:"none"}, active:{"display":"block"}}} className="font-[Tektur] !text-xs"><FiberManualRecordIcon sx={{fontSize:"10px"}}/></motion.span>
                    <motion.span  variants={{rest:{x:"0px"}, active:{"x":"5px"}}} className="font-[Tektur] text-xl">{sub.name}</motion.span>
                  </div>
                  <div className="hidden flex-row  items-center rtl:flex ">
                    <motion.span variants={{rest:{display:"none"}, active:{"display":"block"}}} className="font-[Tektur] !text-xs"><FiberManualRecordIcon sx={{fontSize:"10px"}}/></motion.span>
                    <motion.span  variants={{rest:{x:"0px"}, active:{"x":"-5px"}}} className="font-[Tektur] text-xl">{sub.name}</motion.span>
                  </div>
                  <span className="font-[Poppins] max-w-[30rem] font-extralight paragraphText">
                    {sub.description}
                  </span>
                </div>
              </Link>
              </motion.div>
            )})}
          </div>
          
    )
}