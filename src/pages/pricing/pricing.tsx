import { Button, Grid, IconButton, Stack } from "@mui/material"
import { NavBar } from "../../components/layouts/navbar"
import "./pricing.css"
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { HeaderCarasouel } from "../../components/carasouel/service/header";
import { UseCaseCarasoule } from "../../components/carasouel/useCaseCarasouel";
import { ServiceCarasoule } from "../../components/carasouel/service";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import userImage from '../../assets/unsplash_pAtA8xe_iVM.png';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import HiveOutlinedIcon from '@mui/icons-material/HiveOutlined';


import img1 from "../../assets/pricing/piggy.png"
import img2 from "../../assets/services/RedBlockCap.png"
import img3 from "../../assets/services/StudioApartment.png"
import img4 from "../../assets/services/BagHolder.png"
import img5 from "../../assets/services/shadowWalker.png"

import imgA from "../../assets/services/numbersBook.png"
import imgB from "../../assets/services/poloDupe.png"
import imgC from "../../assets/services/boxOfGoodies.png"
import imgD from "../../assets/services/beachShellLaptop.png"

import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import CheckIcon from '@mui/icons-material/Check';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { CheckBox } from "@mui/icons-material";
import { FAQComponent } from "../../components/FAQ";
import { EnterFromBottomAnimate } from "../../components/animations/enterFromBottomAnimate";
import { formatT } from "../../util";

const whatWeveCreatedSectionImages =[imgA, imgB, imgC, imgD];

export const Pricing = () => {


    const whyItsWorthIt = [
        {icon:<DashboardCustomizeOutlinedIcon className="text-[#FF8200]"/>, text:formatT(["pricing.included.items.0"])},
        {icon:<DownloadingOutlinedIcon className="text-[#FF8200]"/>, text:formatT(["pricing.included.items.1"])},
        {icon:<AllInclusiveOutlinedIcon className="text-[#FF8200]"/>, text:formatT(["pricing.included.items.2"])},
        {icon:<SaveAsIcon className="text-[#FF8200]"/>, text:formatT(["pricing.included.items.3"])},
        {icon:<SaveAsIcon className="text-[#FF8200]"/>, text:formatT(["pricing.included.items.4"])},
        {icon:<SaveAsIcon className="text-[#FF8200]"/>, text:formatT(["pricing.included.items.5"])}

    ]

    const FAQData:{question:JSX.Element, answer:JSX.Element}[] = [
            {question:formatT(["pricing.faq.items.0.question"]), answer:formatT(["pricing.faq.items.0.answer"])},
            {question:formatT(["pricing.faq.items.1.question"]), answer:formatT(["pricing.faq.items.1.answer"])},
            {question:formatT(["pricing.faq.items.2.question"]), answer:formatT(["pricing.faq.items.2.answer"])}


        ]
    const payPerProjectText = [
        formatT(["pricing.plans.payPerProject.features.0"]),
        formatT(["pricing.plans.payPerProject.features.1"]),
        formatT(["pricing.plans.payPerProject.features.2"]),
        formatT(["pricing.plans.payPerProject.features.3"]),
    ]

    
    const monthlySquadPlans = [
        formatT(["pricing.plans.subscriptionPlans.features.0"]),
        formatT(["pricing.plans.subscriptionPlans.features.1"]),
        formatT(["pricing.plans.subscriptionPlans.features.2"]),
        formatT(["pricing.plans.subscriptionPlans.features.3"]),
    
    ]

    const monthlyPaymentText = [
         formatT(["pricing.plans.monthlyPayment.features.0"]),
        formatT(["pricing.plans.monthlyPayment.features.1"]),
        formatT(["pricing.plans.monthlyPayment.features.2"]),
        formatT(["pricing.plans.monthlyPayment.features.3"]),
       
    ]

    return (
  <div className="text-center text-white mb-[3rem] bg-white "> 
                
                <div className=" bg-[url(./assets/pricing/couns.png)] bg-no-repeat bg-cover pb-12  h-fit  !overflow-hidden relative  bg-center ">

                    <NavBar/>
                    <div className="pricing-topBlur "/>
                    <div className=" flex flex-col md:px-[4rem] max-md:!py-[3rem] max-md:!px-[2rem] max-md:!pb-[6rem]  px-[2rem] box-border md:py-[8rem] py-[2rem] "> 
                        <div className="text-[28px] md:font-medium font-medium md:text-[50px] max-w-[35rem] md:text-left z-10 font-[Tektur] rtl:text-right">
                        {formatT(["pricing.hero.title"])}
                        <div className="paragraphText font-light  mt-[1rem] font-[Poppins]">
                        {formatT(["pricing.hero.description"])}
                        </div>
                        </div>
{/* 
                        <div className="md:py-[1rem] md:m-0 mt-4  m-auto flex md:flex-row flex-col  gap-3">
                            <Button className="primaryButton md:!text-inherit !text-[14px]">Start a Project</Button>
                            <Button className="secondaryButton md:!text-inherit !text-[14px]">Schedule a Free Consulatation</Button>
                        </div>  */}

                    </div>
                            
                </div>

                <div className=" bg-white text-black max-sm:!py-[3rem] max-sm:!px-[2rem] flex flex-col md:px-[4rem] px-[2rem] w-full box-borde gap4 r md:py-[6rem] py-[2rem] justify-center items-center "> 
                    <div className="md:w-[90%] xl:w-[80%] text-[24px] md:text-[32px] mt-[1rem] font-medium font-[Tektur]">
                        {formatT(["pricing.intro.statement"])} {formatT(["pricing.intro.description"])}
                    </div>

                </div>




                                {/* what can we help you with section */}
                <div className="lg:!flex bg-[#FFF9F2] max-sm:!py-[3rem] max-sm:!px-[2rem]  text-black !hidden flex-col md:px-[4rem] gap-2 px-[2rem] w-full gap4 r md:py-[6rem] py-[2rem] justify-center items-center ">
                        <Grid container size="grow"  width={"100%"} height={"100%"} spacing={2}  className="!h-full flex-grow  !items-stretch " gridTemplateRows={"1fr"} alignContent={"center"}  alignItems={"stretch"} justifyItems={"stretch"} justifyContent={"center"}>
                            
                            <Grid size={{md:5, sm:12, xs:12,lg:3.5}}      className="relative bg-[#FF8200] p-4  px-6 rounded-xl h-full rtl:text-right"  sx={{height:"100%"}}>
                                <div className="badge">{formatT(["pricing.plans.payPerProject.badge"])}</div>

                                <Stack className="flex-col text-left gap-2 pt-2 md:pt-4 h-[100%] text-white" height={"100%"} >
                                    <div className="font-[Tektur] md:text-2xl rtl:text-right" >{formatT(["pricing.plans.payPerProject.title"])}</div>

                                    <hr className="text-[#EEEEEE] pb-2"/>
                                    {payPerProjectText.map((text) => {
                                        return<Stack flexDirection={"row"} gap={1} mb={2}  alignItems={"flex-start"}><CheckIcon fontSize="small"/> {text}</Stack>
                                    })}
                                    <Button className="secondaryButton !normal-case !border-none !mt-[1rem]">{formatT(["pricing.plans.payPerProject.cta"])}</Button>
                                    
                                </Stack>

                            </Grid>
                            <Grid size={{md:5, sm:12, xs:12,lg:3.5}} height={"100%"}  sx={{minHeight:"100%"}}   border={1} className="!border-[#CCCCCC] relative h-full  p-4  px-6  rounded-xl " width={"100%"}>
                                <Stack className="flex-col text-left gap-2 pt-2 md:pt-4 !min-h-[100%] text-black rtl:text-right"  >
                                    <div className="font-[Tektur] md:text-2xl">{formatT(["pricing.plans.monthlyPayment.title"])}t</div>

                                    <hr className="text-[#EEEEEE] pb-2"/>
                                    {monthlyPaymentText.map((text) => {
                                        return<Stack flexDirection={"row"} gap={1} mb={2}  alignItems={"flex-start"}><CheckIcon fontSize="small"/> {text}</Stack>
                                    })}
                                    <Button className=" !text-black !bg-transparent !normal-case   !mt-[1rem]" sx={{border:0.4, borderColor:"black", borderRadius:200}}>{formatT(["pricing.plans.monthlyPayment.cta"])}</Button>
                                        
                                </Stack>                            
                            </Grid>
                        </Grid>
                        <Grid container size={"grow"}  alignContent={"center"} alignItems={"center"} justifyContent={"center"} width={"100%"}> 
                            <Grid size={{md:10, sm:12, xs:12,lg:7}} className="  pricingLinearGradient !border-[#CCCCCC] md:h-[100%] p-4 rounded-xl">
                                 <div className=" md:px-[2rem] h-fit  md:min-h-[20rem] text-black flex flex-col md:flex-row justify-between max-md:gap-[2rem] gap-[5rem] w-full box-border  md:py-[1rem] py-[2rem] items-center  ">
                                <div className=" w-[100%] md:w-[50%] text-[#FF8200] h-[100%] flex-col flex justify-between  text-left rtl:text-right  text-[1.5rem] leading-9 font-[Tektur]">
                                                            
                                    <div className="flex flex-col w-[100%] rtl:text-right">{formatT(["pricing.plans.subscriptionPlans.comingSoon"])}  
                                        <span className="text-lg font-[Poppins] mt-2 text-white">{formatT(["pricing.plans.subscriptionPlans.subtitle"])}</span>
                                    </div>
                                    <Button className="max-md:!hidden align-bottom  !text-white w-[10rem]  !normal-case   !mt-[1rem]" sx={{border:0.4, borderColor:"white", borderRadius:200}}>{formatT(["pricing.plans.subscriptionPlans.cta"])}</Button>

                                </div>
                                <div className="flex flex-col text-left text-white  bg-[#181C1F] w-full md:w-[50%] h-[100%] rtl:text-right  gap-[2rem] p-[2rem] rounded-lg ">
                                    <div className="font-[Poppins] ">{formatT(["pricing.plans.subscriptionPlans.boxTitle"])}</div>

                                    <div>

                                  
                                    {monthlySquadPlans.map((text) => {
                                        return<Stack flexDirection={"row"} gap={1} mb={2}  alignItems={"flex-start"}><CheckIcon fontSize="small"/> {text}</Stack>
                                    })}
                                      </div>

                                    
                                </div>   
            
                            </div>
                            </Grid>
                            
                        
                    </Grid>
                    
                    
                   


                </div>

                                {/* what can we help you with section mobile and smaller screens */}
                <div className=" lg:!hidden  bg-[#FFF9F2] max-sm:!py-[3rem] max-sm:!px-[2rem]  text-black !flex flex-col md:px-[4rem] gap-10 px-[2rem] w-full gap4 r md:py-[6rem] py-[2rem] justify-center items-center ">
                        <Grid container size={12}  width={"100%"}  spacing={5}  className="!h-fit   " alignContent={"center"}    justifyContent={"center"}>
                            
                            <Grid size={{lg:10, sm:12}} className="relative bg-[#FF8200] p-4  px-6 rounded-xl h-fit rtl:text-right "  >
                                <div className="badge">{formatT(["pricing.plans.payPerProject.badge"])}</div>

                                <Stack className="flex-col text-left gap-2 pt-2 md:pt-4  text-white rtl:text-right " height={"100%"} >
                                    <div className="font-[Tektur] md:text-2xl" >Pay Per Project</div>

                                    <hr className="text-[#EEEEEE] pb-2"/>
                                    {payPerProjectText.map((text) => {
                                        return<Stack flexDirection={"row"} gap={1} mb={2}  alignItems={"flex-start"}><CheckIcon fontSize="small"/> {text}</Stack>
                                    })}
                                    <Button className="secondaryButton !normal-case !border-none !mt-[1rem]">{formatT(["pricing.plans.payPerProject.cta"])}</Button>
                                    
                                </Stack>

                            </Grid>
                            <Grid size={{lg:10, sm:12}} height={"100%"}    border={1} className="!border-[#CCCCCC]   p-4  px-6  rounded-xl" width={"100%"}>
                                <Stack className="flex-col text-left gap-2 pt-2 md:pt-4 !min-h-[100%] text-black rtl:text-right "  >
                                    <div className="font-[Tektur] md:text-2xl rtl:text-right ">{formatT(["pricing.plans.monthlyPayment.title"])}t</div>

                                    <hr className="text-[#EEEEEE] pb-2"/>
                                    {monthlyPaymentText.map((text) => {
                                        return<Stack flexDirection={"row"} gap={1} mb={2}  alignItems={"flex-start"}><CheckIcon fontSize="small"/> {text}</Stack>
                                    })}
                                    <Button className=" !text-black !bg-transparent !normal-case rtl:text-right !mt-[1rem] " sx={{border:0.4, borderColor:"black", borderRadius:200}}>{formatT(["pricing.plans.monthlyPayment.cta"])}</Button>
                                        
                                </Stack>                            
                            </Grid>
                        </Grid>
                        <Grid container size={12}   alignContent={"center"} alignItems={"center"} justifyContent={"center"} width={"100%"}> 
                            <Grid size={{lg:10, sm:12}} className="  pricingLinearGradient !border-[#CCCCCC] md:h-[100%] p-4 rounded-xl">
                                 <div className=" md:px-[2rem] h-fit  md:min-h-[20rem] text-black flex flex-col md:flex-row justify-between max-md:gap-[2rem] gap-[5rem] w-full box-border  md:py-[1rem] py-[2rem] items-center ">
                                <div className=" w-[100%] md:w-[50%] text-[#FF8200] rtl:text-right  h-[100%] flex-col flex justify-between  text-left text-[1.5rem] leading-9 font-[Tektur]">
                                                            
                                    <div className="flex flex-col w-[100%] rtl:text-right ">{formatT(["pricing.plans.subscriptionPlans.comingSoon"])}  
                                        <span className="text-lg font-[Poppins] mt-2 text-white">{formatT(["pricing.plans.subscriptionPlans.subtitle"])}</span>
                                    </div>
                                    <Button className="max-md:!hidden align-bottom  !text-white w-[10rem] rtl:text-right   !normal-case   !mt-[1rem]" sx={{border:0.4, borderColor:"white", borderRadius:200}}>Talk To Us</Button>

                                </div>
                                <div className="flex flex-col text-left text-white  bg-[#181C1F] w-full md:w-[50%] h-[100%] rtl:text-right  gap-[2rem] p-[2rem] rounded-lg ">
                                    <div className="font-[Poppins] ">{formatT(["pricing.plans.subscriptionPlans.boxTitle"])}</div>

                                    <div>

                                  
                                    {monthlySquadPlans.map((text) => {
                                        return<Stack flexDirection={"row"} gap={1} mb={2}  alignItems={"flex-start"}><CheckIcon fontSize="small"/> {text}</Stack>
                                    })}
                                      </div>

                                    <Button className="  !text-white !normal-case  " sx={{border:0.4, borderColor:"white", borderRadius:200}}>{formatT(["pricing.plans.subscriptionPlans.cta"])}</Button>

                                </div>   
            
                            </div>
                            </Grid>
                            
                        
                    </Grid>

                </div>

                {/* who its perfect for secsiont*/}
                <div className=" max-md:mt-[4rem] bg-white font-medium text-left text-black flex flex-col md:px-[4rem] gap-2 px-[2rem] w-full box-borde gap4 r md:py-[6rem]  justify-center ">
                    <span className="text-[16px] rtl:text-right  ">{formatT(["pricing.included.sectionLabel"])}</span>
                    <div className="  w-[100%] font-medium flex flex-row items-center justify-between  text-[24px] md:text-[40px]md:font-semibold  font-[Tektur]">
                    <div>{formatT(["pricing.included.title"])}</div>
                    <Button className="secondaryButton md:!block !hidden">{formatT(["pricing.included.seeHowItWorks"])}</Button>

                  </div>

                    <Grid container fontWeight={500} fontSize={'18px'} mt={2}  spacing={4} >
                        <Grid size={{md:4, "sm":12, "xs":12}} borderRadius={6}>
                            <img src={img1} className="w-full h-full object-cover rounded-lg"/>
                        </Grid>
                        <Grid container size={{md:8, "sm":12, "xs":12}} >
                            {whyItsWorthIt.map((data) => {
                               return (
                                        <Grid size={{md:6, xs:12}} bgcolor={""} fontFamily={"Poppins"} borderRadius={3}>
                                            <EnterFromBottomAnimate className=" flex w-full h-full bg-[#FFF8F3] rounded-lg align-middle  !items-center pt-4 pb-2 px-4">

                                            <Stack gap={2} className="font-semibold text-[1.2rem]">
                                            <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center">
                                            {data.icon} 
                                            </div>
                                            {data.text}
                                            </Stack>
                                                                                </EnterFromBottomAnimate>

                                        </Grid>
                                    
                                )
                            })}

                            
                           
                        </Grid>
                     

                    </Grid>

                </div>

                <FAQComponent props={FAQData}/>


                <div className=" flex md:flex-row flex-col w-full h-[40rem]  md:pl-[4rem] box-border bg-[#FF8200]  justify-between items-center ">
                    <div className=" md:py-[6rem] py-[4rem] p-[2rem] rtl:text-right ">
                        <div className=" font-medium md:font-semibold text-[28px] md:text-[40px] text-left w-full font-[Tektur] md:max-w-[35rem] rtl:text-center rtl:md:text-right   ">{formatT(["pricing.ctaBanner.title"])} </div>  
                        <div className=" font-notmal  text-[20px] text-left w-full   md:max-w-[35rem] rtl:text-center rtl:md:text-right   ">
                        {formatT(["pricing.ctaBanner.description"])}</div>     
                    <div className="md:py-[1rem] w-full m-auto flex md:flex-row mt-5  max-md:justify-center align-center gap-3 rtl:text-right ">
                        <Button className="startAProjectButton md:!text-inherit w-fit !text-[14px]">{formatT(["pricing.ctaBanner.startProject"])}</Button>
                        <Button className="secondaryButton md:!text-inherit w-fit !text-[14px]">{formatT(["pricing.ctaBanner.scheduleConsultation"])}n</Button>
                    </div>            
                    </div>
                    <div className=" w-full md:w-[50%] md:py-[6rem] py-[4rem] h-full overflow-hidden !bg-[url(./assets/pricing/82545477302aa7b3b781b0ba9fa48fb4defde124.png)]  !bg-cover bg-center bg-no-repeat z-40" >
                    </div>

                </div>
            </div>
    )
}