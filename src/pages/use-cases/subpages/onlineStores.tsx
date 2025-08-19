import { Button, Grid, IconButton, Stack } from "@mui/material"
import { NavBar } from "../../../components/layouts/navbar"
import "../use-cases.css"
import PassingScroll from '../../../assets/useCases-page/passingScroll.png'
import TabletMockup from '../../../assets/useCases-page/tabletMockup.png'
import ShampooPhone from '../../../assets/useCases-page/ShampooPhone.png'
import HipsterInBlueRoom from '../../../assets/useCases-page/HipsterInBlueRoom.png'
import { UseCaseCarasoule } from "../../../components/carasouel/useCaseCarasouel";
import { ArrowRightAlt, Diversity3Outlined, Engineering, FreeCancellation, GppGoodOutlined } from "@mui/icons-material";
import { UserEndorsements } from "../../../components/userEndorsements";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { EnterFromBottomAnimate } from "../../../components/animations/enterFromBottomAnimate"
import { SpringAnimate } from "../../../components/animations/springAnimation"
import { useTranslation } from "react-i18next"
import { formatT } from "../../../util"


const logos = [
  {image:TabletMockup, text: formatT(["onlineStores.suggestedPipelines.packs.brand.title"]), subtext:formatT(["onlineStores.suggestedPipelines.packs.store.description"])}, 
  {image:ShampooPhone, text: formatT(["onlineStores.suggestedPipelines.packs.content.title"]), subtext:formatT(["onlineStores.suggestedPipelines.packs.store.description"])}, 
  {image:HipsterInBlueRoom, text: formatT(["onlineStores.suggestedPipelines.packs.store.title"]), subtext:formatT(["onlineStores.suggestedPipelines.packs.store.description"])},  
];



export const UseCaseOnlineStore = () => {

    const {t} = useTranslation();

    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".imageScrollPin", {
            scrollTrigger:{
                trigger:".imageScrollPin",
                start:"top top",
                pin:true,
            }
        })
    },[])


    return (
        <div className="text-center text-white mb-[3rem] "> 
                
                {/* top banner section */}
                <div className=" bg-[url(././assets/useCases-page/useCasePageHeader.jpg)] bg-no-repeat bg-cover  h-fit !overflow-hidden relative  bg-center ">

                    <NavBar/>
                    <div className="useCases-topBlur"/>
                    <div className=" flex flex-col md:px-[4rem] px-[2rem] box-border md:py-[6rem] py-[2rem] max-sm:!py-[3rem] max-sm:!px-[2rem]  max-sm:!pb-[6rem]   "> 
                        <div className="text-[28px] font-medium md:font-semibold md:text-[50px] md:w-[40%] md:text-left z-10 font-[Tektur]">
                            {formatT(["onlineStores.header.title"])}
                                                        <div className="paragraphText font-light mt-[1rem] font-[Poppins]">
                            {formatT(["onlineStores.header.description"])}
                                                         </div>
                        </div>

                        <div className="md:py-[1rem] md:m-0 mt-4  m-auto flex md:flex-row  gap-3">
                            <Button className="primaryButton md:!text-inherit">{formatT(["onlineStores.header.buttons.startProject"])}</Button>
                            <Button className="secondaryButton md:!text-inherit ">{formatT(["onlineStores.header.buttons.freeConsultation"])}</Button>
                        </div> 
                    </div>
                            
                </div>

                {/* top text-image flex*/}
                <div className=" bg-white md:px-0 !px-[4rem] h-fit max-md:!py-[3rem] max-md:!px-[2rem]   lg:h-[40rem] text-black flex flex-col lg:flex-row  gap-10  w-full box-borde gap4 r md:py-[6rem] py-[2rem] justify-center items-start ">
                    <div className="  h-[100%] lg:max-w-[50rem] max-sm:gap-5 flex-col flex justify-between text-left text-[18px] md:text-[28px] leading-9 font-[Tektur]">
                        {formatT(["onlineStores.intro.text"])}
                        <span className="text-[#FF8200]">
                        {formatT(["onlineStores.intro.highlight"])}
                            </span>
                    </div>
                    <img src={PassingScroll} className="object-cover  w-full lg:w-[50%] h-[100%] rounded-lg"/>

                </div>

                {/* what can we help you with section */}
                <div className=" bg-[#FFF9F2] text-black max-sm:!py-[3rem] max-sm:!px-[2rem]  flex flex-col md:!px-[4rem] gap-2 px-[2rem] w-full box-borde gap4 r md:py-[6rem] py-[2rem] justify-center items-center ">
                    <span className="md:text-[20px] text-[16px] md:font-medium font-normal">
                        {formatT(["onlineStores.whatWeHelp.title"])}
                    </span>
                    <div className="w-[100%] font-medium  md:font-semibold max-w-[30rem] justify-between text-center md:text-[40px] text-[28px] font-[Tektur]">
                        {formatT(["onlineStores.whatWeHelp.subtitle"])}

                    </div>
                    <UseCaseCarasoule/>
                    <div className="w-[100%] md:w-[40%] h-[100%] font-medium  justify-between text-center text-[20px] md:text-[32px] font-[Tektur]">
                        {formatT(["onlineStores.whatWeHelp.footer"])}
                    </div>
                </div>


                {/* suggested pipelines section */}

                <div className=" bg-white imageScrollPin rtl:text-right md:!flex !hidden text-black min-h-[100vh]   flex-row px-[4rem] gap-2  w-full box-border   pb-[0rem] py-[1rem] justify-center align-middle items-center ">
                <div className="  bg-white text-black flex flex-col md:flex-row w-[100%] overflow-scroll noScrollbar  md:h-[40rem] ">
                        <div className="w-[100%] flex flex-col md:font-semibold font-medium  text-[28px] md:text-[40px]   md:w-[40%] md:justify-start text-left  rtl:text-right font-[Tektur] sticky top-0 ">
                                                   {formatT(["onlineStores.suggestedPipelines.title"])}
 
                            <div className=" !text-white md:block hidden">
                                <Button className="secondaryButton md:!text-inherit !text-[14px] !text-white  rtl:text-right"> {formatT(["onlineStores.suggestedPipelines.browse"])}
                            </Button>
                            </div>                      
                        </div>
                        
                        <div className=" font-medium  md:w-[60%]  justify-between text-center md:text-[1.5rem] text-[1.2rem]  font-[Tektur] md:mt-0 ">
                            {logos.map((image) => {
                                return(
                                    <div className="text-left pb-5 text-[24px] max-md:w-full  rtl:text-right md:text-[32px] ">
                                        <img src={image.image} className="w-full mb-5 "/>
                                        {image.text}
                                        <div className=" paragraphText font-normal md:w-[70%]  rtl:text-right font-[Poppins] mb-5">
                                            {image.subtext}
                                        </div>
                                    </div>
                                ) 
                            })}
                            <div className="mt-2 !text-white md:hidden block">
                                <Button className="secondaryButton md:!text-inherit !text-[14px] !text-white">{formatT(["onlineStores.suggestedPipelines.browse"])}</Button>
                            </div>  

                        </div>  
                    </div>
                                  
                </div>

                {/* suggested mobile section */}

                <div className=" bg-white md:!hidden  text-black !flex  max-sm:!py-[3rem] max-sm:!px-[2rem] flex-row md:px-[4rem] gap-2 px-[2rem] w-full box-border  md:pt-[6rem] md:pb-[2rem] py-[2rem] justify-center align-middle items-center ">
                <div className="  bg-white text-black flex flex-col w-[100%] overflow-scroll noScrollbar  md:h-[40rem] ">
                        <div className="w-[100%] flex flex-col md:font-semibold font-medium text-[28px] md:text-[40px]    md:w-[50%] md:justify-start text-left  rtl:text-right  font-[Tektur]  ">
                                                   {formatT(["onlineStores.suggestedPipelines.title"])}
                            <div className="mt-2 !text-white md:block hidden">
                                <Button className="secondaryButton md:!text-inherit !text-[14px]  rtl:text-right !text-white">{formatT(["onlineStores.suggestedPipelines.browse"])}</Button>
                            </div>                      
                        </div>
                        
                        <div className=" font-medium  md:w-[60%]  justify-between text-center md:text-[1.5rem] text-[1.2rem]  rtl:text-right  font-[Tektur] md:mt-0 mt-5 ">
                            {logos.map((image) => {
                                return(
                                    <div className="text-left pb-5 text-[24px] max-md:w-full  rtl:text-right md:text-[32px] ">
                                        <img src={image.image} className="w-full mb-5 "/>
                                        {image.text}
                                        <div className="text-[20px] md:text-[24px] font-normal md:w-[70%] font-[Poppins]   rtl:text-right mb-5">
                                            {image.subtext}
                                        </div>
                                    </div>
                                ) 
                            })}
                            <div className="mt-2 !text-white md:hidden block">
                                <Button className="secondaryButton md:!text-inherit !text-[14px]  rtl:text-right !text-white">{formatT(["onlineStores.suggestedPipelines.browse"])}</Button>
                            </div>  

                        </div>  
                    </div>
                                  
                </div>

                {/* why heroes section */}

      <div className="whyHeroesHive font-[Tektur] max-sm:!py-[3rem] max-sm:!px-[2.5rem] !pt-0  mx-auto ">
            <div className="text-[28px] md:text-[40px] font-medium md:font-semibold ">{formatT(["onlineStores.whyHeroes.title"])}</div>

            <Stack direction={"column"} justifyContent={"space-between"} alignItems={"stretch"} className="w-full" >
            <Stack direction={"row"} justifyContent={"space-between"} fontFamily={"Poppins"} alignItems={"baseline"} gap={5} mt={5} className="text-[20px] w-full md:!flex-row !flex-col ">
                         <SpringAnimate className="!w-full  md:max-w-[20rem] max-md:!items-start max-md:!text-left">
                 <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}  className="md:max-w-[20rem] w-full max-md:!items-start max-md:!text-left">
                <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center">
                    <Diversity3Outlined fontSize="medium"/>
                </div>
                <div className="text-[18px] font-semibold  font-[Tektur]">{formatT(["onlineStores.whyHeroes.features.squads"])}</div>

              </Stack>
            </SpringAnimate>
                         <SpringAnimate className="!w-full  md:max-w-[20rem] max-md:!items-start max-md:!text-left">

              <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}  className="md:max-w-[20rem] w-full max-md:!items-start max-md:!text-left  ">
                <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center">
                    <ArrowRightAlt fontSize="medium"/>
                </div>
                <div className="text-[18px] font-semibold  font-[Tektur] ">
                    {formatT(["onlineStores.whyHeroes.features.manager"])}

                </div>

              </Stack>
</SpringAnimate>
                         <SpringAnimate className="!w-full  md:max-w-[20rem] max-md:!items-start max-md:!text-left">

              <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}  className="md:max-w-[20rem] w-full  max-md:!items-start max-md:!text-left">
                <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center ">
                    <Engineering fontSize="medium"/>
                </div>
                <div className="text-[18px] font-semibold  font-[Tektur] ">
                                        {formatT(["onlineStores.whyHeroes.features.pricing"])}

                </div>
              </Stack>           
            </SpringAnimate>

            </Stack>


            <Stack direction={"row"} justifyContent={"space-between"} fontFamily={"Poppins"} alignItems={"baseline"} gap={5} mt={5} className="text-[20px] w-full md:!flex-row !flex-col ">

                         <SpringAnimate className="!w-full  md:max-w-[20rem] max-md:!items-start max-md:!text-left">
              <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}  className="md:!max-w-[20rem] w-full max-md:!items-start max-md:!text-left">
                <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center ">
                    <FreeCancellation fontSize="medium"/>
                </div>
                <div className="text-[18px] font-semibold ">
                    {formatT(["onlineStores.whyHeroes.features.solution"])}
                </div>

              </Stack>
                          </SpringAnimate>

                         <SpringAnimate className="!w-full  md:max-w-[20rem] max-md:!items-start max-md:!text-left">
           
              <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}  className="md:!max-w-[20rem] w-full  max-md:!items-start max-md:!text-left">
                <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center ">
                    <GppGoodOutlined fontSize="medium"/>
                </div>
                <div className= "text-[18px] font-semibold ">
                    {formatT(["onlineStores.whyHeroes.features.dashboard"])}
                    </div>

              </Stack>
              </SpringAnimate>

                         <SpringAnimate className="!w-full  md:max-w-[20rem] max-md:!items-start max-md:!text-left">

              <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}  className="md:max-w-[20rem] w-full  max-md:!items-start max-md:!text-left">
                <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center">
                    <GppGoodOutlined fontSize="medium"/>
                </div>
                <div className= "text-[18px] font-semibold ">
                    {formatT(["onlineStores.whyHeroes.features.protection"])}
                    </div>

              </Stack>
              </SpringAnimate>
            </Stack>

            </Stack>

            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={2} mt={5} className="text-[20px]  max-md:!items-start max-md:!text-left">
              <Button className="!text-white watchVideoBtn  !px-4 !py-2 !rounded-[100px] secondaryButton "> {formatT(["onlineStores.whyHeroes.learnMore"])}</Button>
            </Stack>

      </div>  

                {/* user endorsements section */}
      <UserEndorsements/>             

                {/* grow your store section*/}
                <div className="flex md:flex-row flex-col w-full max-sm:!py-[3rem] max-sm:!px-[2rem]   md:pl-[4rem] box-border bg-[#FF8200]  justify-between items-center ">
                    <div className=" md:py-[8rem] py-[4rem] w-full">
                        <div className=" text-semibold text-[25px] md:text-[30px] md:text-center text-left w-full font-[Tektur] font-medium ">
                                {formatT(["onlineStores.growSection.title"])}

                             </div>  
                        <div className=" text-semibold text-[16px] md:text-[20px] md:text-center text-left w-full  ">
                                {formatT(["onlineStores.growSection.description"])}
                        </div>     
                    <div className="md:py-[1rem] w-full m-auto flex md:flex-row mt-5  flex-row justify-center items-center align-center gap-3">
                        <Button className="primaryButton md:!text-inherit w-fit !text-[14px] startAProjectButton">
                                {formatT(["onlineStores.growSection.buttons.startProject"])}
                        </Button>
                        <Button className="secondaryButton md:!text-inherit w-fit !text-[14px]">
                                {formatT(["onlineStores.growSection.buttons.freeConsultation"])}
                            </Button>
                    </div>            
                    </div>
                    

                </div>
            </div>
    )
}