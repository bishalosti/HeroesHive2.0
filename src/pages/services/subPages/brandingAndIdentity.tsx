import { Button, Grid, IconButton, Stack } from "@mui/material"
import { NavBar } from "../../../components/layouts/navbar"
import "../services.css"
import { HeaderCarasouel } from "../../../components/carasouel/service/header";
import { ServiceCarasoule } from "../../../components/carasouel/service";
import PolylineIcon from '@mui/icons-material/Polyline';

import img1 from "../../../assets/services/pinkCoatGirl.png"
import img2 from "../../../assets/services/RedBlockCap.png"
import img3 from "../../../assets/services/StudioApartment.png"
import img4 from "../../../assets/services/BagHolder.png"
import img5 from "../../../assets/services/shadowWalker.png"
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

import imgA from "../../../assets/services/numbersBook.png"
import imgB from "../../../assets/services/poloDupe.png"
import imgC from "../../../assets/services/boxOfGoodies.png"
import imgD from "../../../assets/services/beachShellLaptop.png"

import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { Diversity3Outlined, Engineering, FreeCancellation, GppGoodOutlined, GroupOffOutlined } from "@mui/icons-material";
import { UserEndorsements } from "../../../components/userEndorsements";
import { SpringAnimate } from "../../../components/animations/springAnimation";
import { EnterFromBottomAnimate } from "../../../components/animations/enterFromBottomAnimate";
import { formatT } from "../../../util";


export const ServicesBrandingAndIdentity = () => {
    const walkAwayWith = [
        {icon:<DashboardCustomizeOutlinedIcon className="text-[#FF8200]"/>, text:"A fully developed, scalable brand system"},
        {icon:<DownloadingOutlinedIcon className="text-[#FF8200]"/>, text:"Assets that are ready to use across digital and print"},
        {icon:<AllInclusiveOutlinedIcon className="text-[#FF8200]"/>, text:"Confidence that your brand looks consistent everywhere"},
        {icon:<SaveAsIcon className="text-[#FF8200]"/>, text:"Editable source files and guidance for future use"}

    ]
    return (
  <div className="text-center text-white mb-[3rem] bg-white "> 
                
                <div className=" bg-[url(././assets/services/twoBoxes.png)] bg-no-repeat bg-cover  max-sm:!pb-[3rem]  h-fit !overflow-hidden relative   bg-center ">

                    <NavBar/>
                    <div className="servicesAndBrandIdentity-topBlur "/>
                    <div className=" flex flex-col md:px-[4rem] px-[2rem] box-border md:py-[5rem] py-[2rem]  w-full rtl:text-right "> 
                        <div className="text-[28px] md:text-[50px] md:w-[40%] md:text-left font-medium z-10 font-[Tektur] rtl:!text-right">
                        {formatT(["servicesAndBrandIdentity.header.title"])}
                            <div className="paragraphText max-sm:font-light font-extralight mt-[1rem] font-[Poppins] rtl:!text-right">
                        {formatT(["servicesAndBrandIdentity.header.description"])}
                        </div>
                        </div>

                        <div className="md:py-[1rem] md:m-0 mt-4  m-auto flex sm:flex-row  gap-2  md:gap-3 rtl:!text-right">
                            <Button className="primaryButton md:!text-inherit !text-[14px] sm:w-fit">{formatT(["servicesAndBrandIdentity.header.buttons.startProject"])}</Button>
                            <Button className="secondaryButton md:!text-inherit !text-[14px] sm:w-fit">{formatT(["servicesAndBrandIdentity.header.buttons.freeConsultation"])}</Button>
                        </div> 

                    </div>
                    <HeaderCarasouel/>

                            
                </div>

                <div className=" bg-white text-black flex flex-col  max-sm:!py-[3rem] max-sm:!px-[2rem]  md:px-[4rem]  w-full box-borde gap4 !px-[2rem] !py-[2rem] md:!py-[6rem]  justify-center items-center "> 
                    <div className="md:w-[90%] text-[24px] xl:w-[70%] md:text-[32px] mt-[1rem] font-medium font-[Tektur]">
                        
                    {formatT(["servicesAndBrandIdentity.intro.text1"])}     
                    {formatT(["servicesAndBrandIdentity.intro.text2"])}                     
                
                    
    
                    </div>

                </div>



                {/* what can we help you with section */}
                <div className=" bg-[#FFF9F2] text-black max-sm:!py-[3rem] max-sm:!pb-[3rem]  max-sm:!px-[2rem] flex flex-col md:!px-[4rem] gap-2 !px-[2rem] !py-[2rem]  w-full  md:!py-[6rem] justify-center items-center ">
                    <span className="font-medium md:text-[16px] text-[20px] ">{formatT(["servicesAndBrandIdentity.whatIncluded.subtitle"])}     </span>
                    <div className="w-[100%] font-medium lg:w-[40%]  md:w-[60%]  justify-between text-center md:text-[40px] text-[28px]  font-[Tektur]">
                            {formatT(["servicesAndBrandIdentity.whatIncluded.headline"])}     
                    </div>
                    <span className="text-[#FF8200] w-[100%] font-normal lg:w-[40%]  md:w-[60%]  text-[20px]  font-[Poppins]">
                            {formatT(["servicesAndBrandIdentity.whatIncluded.note"])}     
                        </span>

                    <ServiceCarasoule/>

                </div>

                {/* who its perfect for secsiont*/}
                <div className="  max-sm:!py-[3rem] max-sm:!px-[2rem]  bg-white font-medium text-black flex flex-col md:!px-[4rem] gap-2 !px-[2rem] w-full  md:!py-[6rem]  justify-center items-center ">
                    <span className="md:text-[20px] text-[16px]">{formatT(["servicesAndBrandIdentity.whoThisFor.subtitle"])}</span>
                    <div className=" text-[#FF8200] w-[100%] font-medium lg:w-[40%]  md:w-[60%] justify-between text-center md:text-[40px] text-[28px]   font-[Tektur]">
{formatT(["servicesAndBrandIdentity.whoThisFor.headline"])}                   </div>

                    <Grid container fontWeight={500} fontSize={'16px'} mt={2}  spacing={4} >
                        <Grid size={{md:6, "sm":12, "xs":12}} borderRadius={6} className={"relative overflow-hidden"} > 
                        <div className="h-[25rem] mb-3 overflow-hidden rounded-lg  ">
                                                            <img src={img2} className="h-[25rem]  w-full object-cover rounded-lg overflow-hidden imageZoomIn "/>

                                </div>    
                            {formatT(["servicesAndBrandIdentity.whoThisFor.audienceGrid.items.0.text"])} 
                        </Grid>
                        <Grid size={{md:6, "sm":12, "xs":12}} >
                        <div className="h-[25rem] mb-3 overflow-hidden rounded-lg  ">
                            <img src={img3} className="h-full w-full  mb-3 object-cover imageZoomIn"/>
                        </div>
                        <div>
                            {formatT(["servicesAndBrandIdentity.whoThisFor.audienceGrid.items.1.text"])} 
                        </div>
                        </Grid>
                        <Grid size={{md:6, "sm":12, "xs":12}}>
                                                    <div className="h-[25rem] mb-3 overflow-hidden rounded-lg  ">

                        <img src={img1} className="h-[25rem] w-full  mb-3 object-cover rounded-lg imageZoomIn"/>
</div>
                            {formatT(["servicesAndBrandIdentity.whoThisFor.audienceGrid.items.2.text"])} 
                        </Grid>
                        <Grid size={{md:6, "sm":12, "xs":12}}>
                                                                                <div className="h-[25rem] mb-3 overflow-hidden rounded-lg  ">

                        <img src={img4} className="h-[25rem] w-full mb-3 object-cover rounded-lg imageZoomIn"/>
</div>
                            {formatT(["servicesAndBrandIdentity.whoThisFor.audienceGrid.items.3.text"])} 
                        </Grid>
                    </Grid>

                </div>
                
                {/* walk away with secsiont*/}
                <div className=" bg-[#FFF9F2]  text-black flex flex-col md:!px-[4rem] gap-2 !px-[2rem] w-full box-border md:!py-[6rem] justify-center items-center max-sm:!py-[3rem] max-sm:!px-[2rem]  ">
                    <div className=" justify-between text-left items-center flex flex-col md:flex-row    w-full gap-10 ">
                    <Stack className="h-[50%] md:h-[100%] w-[100%]  md:w-[50%] justify-center  rtl:text-right  ">
                    <span className="font-[Poppins] md:text-[20px] font-medium text-[16px]">{formatT(["servicesAndBrandIdentity.walkAwayWith.title"])}</span>
                        <span className="text-[#FF8200] w-[100%] font-medium lg:w-[100%] md:w-[90%] md:text-[40px] text-[28px] ">
                            {formatT(["servicesAndBrandIdentity.walkAwayWith.heading"])} 
                                                       
                        </span>
                        <Stack gap={4} mt={"2rem"} className=" md:text-xl text-lg font-medium">
                        {walkAwayWith.map((data, ind) => {
                            return (
                                <EnterFromBottomAnimate>
                                    <Stack direction={"row"} gap={2} alignItems={"center"}>
                                    <div className="p-2 px-3 rounded-lg bg-[#FEDFBC]" >
                                        {data.icon}
                                    </div>
                                    {formatT([`servicesAndBrandIdentity.walkAwayWith.items.${ind}`])}
                                </Stack>
                                </EnterFromBottomAnimate>
                                
                            )
                        })}
                        </Stack>
                        
                        </Stack>
                        <Stack className="h-[50%] md:h-[100%] w-[100%]  md:w-[50%]">
                        <img src={img5} className="w-[100%] rounded-lg md:max-h-[90vh] object-center z-50 object-cover"/>

                        </Stack>
                    </div>
                  

                </div>

                {/* why heroes section */}

                <div className="whyHeroesHive font-[Tektur]  mx-auto">
                        <div className="font-medium  md:text-[40px] w-full text-[28px]   sm:font-semibold md:max-w-[30rem]">
                            {formatT(["servicesAndBrandIdentity.whyHeroes.title"])}
                            </div>

                        <Stack direction={"row"} justifyContent={"space-between"} fontFamily={"Poppins"} alignItems={"baseline"} justifyItems={"center"} gap={5} mt={5} className="text-[20px] max-md:!mt-3  w-full md:!flex-row !flex-col ">
                        
                        <SpringAnimate  className="w-full sm:max-w-[20rem]">


                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}  className="w-full sm:max-w-[20rem]">
                            <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center">
                                <PolylineIcon fontSize="medium"/>
                            </div>
                            <div className="sm:text-[20px] text-[16px] font-semibold  font-[Tektur]">{formatT(["servicesAndBrandIdentity.whyHeroes.features.workflow.headline"])}</div>
                            <div className="paragraphText">{formatT(["servicesAndBrandIdentity.whyHeroes.features.workflow.description"])}</div>

                        </Stack>
                        </SpringAnimate>
                        <SpringAnimate  className="w-full sm:max-w-[20rem]">


                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2} className="w-full sm:max-w-[20rem]">
                            <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center">
                                <Diversity3Outlined fontSize="medium"/>
                            </div>
                             <div className="sm:text-[20px] text-[16px] font-semibold  font-[Tektur]">{formatT(["servicesAndBrandIdentity.whyHeroes.features.squads.headline"])}</div>
                            <div className="paragraphText">{formatT(["servicesAndBrandIdentity.whyHeroes.features.squads.description"])}</div>
                        </Stack>
                                    </SpringAnimate>

                        <SpringAnimate  className="w-full sm:max-w-[20rem]">


                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}  className="!w-full sm:max-w-[20rem]">
                            <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center">
                                <Engineering fontSize="medium"/>
                            </div>
                             <div className="sm:text-[20px] text-[16px] font-semibold  font-[Tektur]">{formatT(["servicesAndBrandIdentity.whyHeroes.features.managers.headline"])}</div>
                            <div className="paragraphText">{formatT(["servicesAndBrandIdentity.whyHeroes.features.managers.description"])}</div>             
                        </Stack>           
                        </SpringAnimate>

                        </Stack>

                        <Stack direction={"row"} justifyContent={"space-between"} fontFamily={"Poppins"} alignItems={"baseline"} justifyItems={"center"} gap={5} mt={5} className="text-[20px] max-md:!mt-3  w-full md:!flex-row !flex-col ">

                        <SpringAnimate  className="w-full sm:max-w-[20rem]">


            <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}   className="w-full sm:max-w-[20rem]">
                            <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center ">
                                <TrackChangesIcon fontSize="medium"/>
                            </div>
                             <div className="sm:text-[20px] text-[16px] font-semibold   font-[Tektur]">{formatT(["servicesAndBrandIdentity.whyHeroes.features.revisions.headline"])}</div>
                            <div className="paragraphText">{formatT(["servicesAndBrandIdentity.whyHeroes.features.revisions.description"])}</div>

                        </Stack>
                                    </SpringAnimate>
                        <SpringAnimate  className="w-full sm:max-w-[20rem]">


                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}  className="!w-full sm:max-w-[20rem]">
                            <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center">
                                <FreeCancellation fontSize="medium"/>
                            </div>
                             <div className="sm:text-[20px] text-[16px] font-semibold  !w-full font-[Tektur]">{formatT(["servicesAndBrandIdentity.whyHeroes.features.payment.headline"])}</div>
                            <div className="paragraphText">{formatT(["servicesAndBrandIdentity.whyHeroes.features.payment.description"])}</div>

                        </Stack>
                                    </SpringAnimate>

                        <SpringAnimate  className="w-full sm:max-w-[20rem]">


                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}  className="w-full sm:max-w-[20rem]">
                            <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex  flex-col justify-center items-center">
                                <GppGoodOutlined fontSize="medium"/>
                            </div>
                             <div className="sm:text-[20px] text-[16px] font-semibold  font-[Tektur]">{formatT(["servicesAndBrandIdentity.whyHeroes.features.security.headline"])}</div>
                            <div className="paragraphText">{formatT(["servicesAndBrandIdentity.whyHeroes.features.security.description"])}</div>

                        </Stack>
                                    </SpringAnimate>

                        </Stack>


                        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={2} mt={5} className="text-[20px]">
                        <Button className="!text-white watchVideoBtn  !px-4 !py-2 !rounded-[100px] secondaryButton ">{formatT(["servicesAndBrandIdentity.whyHeroes.learnMore"])}</Button>
                        </Stack>

                </div>  

                {/* see what weve created section*/}
                <div className="  bg-[#FFF9F2] font-medium  flex flex-col gap-2 md:px-[4rem] max-sm:!py-[3rem] max-sm:!px-[2rem] rtl:text-right  px-[2rem] w-full box-border  py-[4rem]  text-left justify-center ">
                    <span className=" text-left text-black md:text-[20px] text-[16px]  rtl:text-right ">{formatT(["servicesAndBrandIdentity.ourWork.subtitle"])}</span>
                    <div className="  w-[100%] font-medium text-left justify-between flex  max-md:flex-col flex-row  md:text-[40px] text-[28px]  font-[Tektur]">
                    <span className="text-black rtl:text-right">{formatT(["servicesAndBrandIdentity.ourWork.headline"])}</span>  

                    <Button  className="secondaryButton !text-white md:!text-inherit w-fit !h-fit !text-[14px] md:!block !hidden">{formatT(["servicesAndBrandIdentity.ourWork.seeMoreButton"])}</Button>           
                    </div>

                    <Grid container fontWeight={500} fontSize={'16px'} mt={2}  spacing={4} color={"black"} >
                        <Grid size={{md:6, "sm":12, "xs":12}} borderRadius={6}  className={"cursor-pointer"} >
                            <div className="h-[35rem] w-full overflow-hidden !mb-2 ">
                        <img src={imgA} className="h-[35rem]  w-full object-cover rounded-lg mb-3 imageZoomIn"/>
                        </div>
                           {formatT(["servicesAndBrandIdentity.ourWork.projects.0"])}                      
                        </Grid>
                        <Grid size={{md:6, "sm":12, "xs":12}} className={"cursor-pointer"}>
                            <div className="h-[35rem] w-full overflow-hidden !mb-2 ">
                        <img src={imgB} className="h-[35rem] w-full object-cover rounded-lg mb-3 imageZoomIn"/>
                        </div>
                           {formatT(["servicesAndBrandIdentity.ourWork.projects.1"])}                      
                        </Grid>
                        <Grid size={{md:6, "sm":12, "xs":12}} className={"cursor-pointer"}>
                            <div className="h-[35rem] w-full overflow-hidden !mb-2 ">
                            <img src={imgC} className="h-[35rem] w-full object-cover rounded-lg mb-3 imageZoomIn"/>
                        </div>
                           {formatT(["servicesAndBrandIdentity.ourWork.projects.2"])}                      
                        </Grid>
                        <Grid size={{md:6, "sm":12, "xs":12}} className={"cursor-pointer"}> 
                            <div className="h-[35rem] w-full overflow-hidden !mb-2 ">
                                <img src={imgD} className="h-[35rem] w-full object-cover rounded-lg mb-3 imageZoomIn"/>
                            </div>
                           {formatT(["servicesAndBrandIdentity.ourWork.projects.3"])}                      
                        </Grid>
                    </Grid>
                    <Button  className="secondaryButton !text-white md:!text-inherit w-fit !mt-[2rem] !self-center !text-[14px] md:!hidden !block">                           
                        {formatT(["servicesAndBrandIdentity.ourWork.seeMoreButton"])}                      
                    </Button>           

                </div>

                <UserEndorsements/>              

                {/* grow your store section*/}
                <div className="flex md:flex-row flex-col w-full   md:pl-[4rem] box-border bg-[#FF8200]  justify-between items-center ">
                    <div className=" md:py-[8rem] py-[4rem] p-[2rem] w-full">
                        <div className=" text-semibold text-[40px] max-sm:text-[25px] text-left md:text-center w-full font-[Tektur] font-medium ">
                            {formatT(["servicesAndBrandIdentity.growSection.title"])}                      
                        </div>  
                        <div className=" text-semibold text-[20px] text-left  md:text-center w-full  ">
                            {formatT(["servicesAndBrandIdentity.growSection.subtitle"])}     
                            </div>                 
                    <div className="md:py-[1rem] w-full m-auto flex md:flex-row mt-5 justify-center items-center align-center gap-3">
                        <Button className="startAProjectButton md:!text-inherit w-fit ">{formatT(["servicesAndBrandIdentity.growSection.buttons.startProject"])}</Button>
                        <Button className="secondaryButton md:!text-inherit w-fit ">{formatT(["servicesAndBrandIdentity.growSection.buttons.freeConsultation"])}</Button>
                    </div>            
                    </div>
                    

                </div>

            </div>
    )
}