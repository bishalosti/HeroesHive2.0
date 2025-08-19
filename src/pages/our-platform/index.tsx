import { Button, Grid, IconButton, Stack } from "@mui/material"
import { NavBar } from "../../components/layouts/navbar"
import "./our-platform.css"

import CardA from './a0ad862a196acfff57631c997cf1e32edf867cea.png'
import CardB from './bdcd15c747884406cd9cdb6abf465535586ab93c.png'
import CardC from './f1e849a490bae8174f7fa897ed7b359bbea76d1e.png'

import Card1 from '../../assets/our-platform/CasinoPlayers.jpg'
import Card2 from '../../assets/our-platform/sillouteInReds.jpg'
import Card3 from '../../assets/our-platform/NeetGuy.png'
import Card4 from '../../assets/our-platform/pullTeam.png'
import Card5 from '../../assets/our-platform/cardGold.png'
import tv from '../../assets/our-platform/tvWatching.png'


import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { OurPlatformCarasouel } from "../../components/carasouel/our-platform";
import { formatT } from "../../util"

export const OutPlatform = () => {
    return (
        <div className="text-center text-white mb-[3rem] "> 
                
        {/* top banner section */}
        <div className=" bg-[url(./assets/our-platform/gridScreens.jpg)] !bg-right bg- bg-no-repeat bg-fit  h-fit !overflow-hidden relative  ">

            <NavBar/>
            <div className="about-us-topBlur"/>
            <div className=" flex flex-col md:px-[4rem] px-[2rem] box-border md:py-[6rem] py-[2rem] "> 
                <div className="text-[26px] md:text-[50px] font-medium md:w-[40%] md:text-left z-10 font-[Tektur] text-left rtl:text-right">
                    {formatT(["ourPlatform.hero.title"])}                                                        
                    <div className="text-[16px] mt-[1rem] text-left rtl:text-right">
                    {formatT(["ourPlatform.hero.subtitle"])}                                                        
                    </div>
                    </div>

                <div className="md:py-[1rem] md:m-0 mt-4  m-auto flex flex-row   gap-3">
                    <Button className="primaryButton md:!text-inherit ">
                    {formatT(["ourPlatform.hero.buttons.start"])}                                                        
                    </Button>
                    <Button className="secondaryButton md:!text-inherit">{formatT(["ourPlatform.hero.buttons.consult"])}   </Button>
                </div> 
            </div>
                    
        </div>
      <div className="whatIsHeroesHive !bg-white">
        {/* textArea */}
          <div className="flex flex-col justify-center items-start   md:w-[50%] w-[100%] " >
            <div className="text-[16px] mb-10">{formatT(["ourPlatform.whyPlatform.heading"])}   </div>
            <div className="md:text-[35px]  text-[26px] font-medium font-[Tektur] max-w-[35rem] text-left rtl:text-right">
              {formatT(["ourPlatform.whyPlatform.title"])}
            </div>
            <div className="mt-5 text-[20px] max-w-[33rem] text-left rtl:text-right">
              {formatT(["ourPlatform.whyPlatform.description"])}        </div>
            <Stack direction={"column"} gap={2} mt={5} mb={3} className="!text-[16px] md:!text-[16px] md:!flex !hidden">
                <div className="flex flex-row  items-center gap-2 font-medium"> <CheckOutlinedIcon fontSize="small"/> {formatT(["ourPlatform.whyPlatform.points.0"])} </div>
                <div className="flex flex-row  items-center gap-2 font-medium"> <CheckOutlinedIcon fontSize="small"/> {formatT(["ourPlatform.whyPlatform.points.1"])}</div>
                <div className="flex flex-row  items-center gap-2 font-medium"> <CheckOutlinedIcon fontSize="small"/> {formatT(["ourPlatform.whyPlatform.points.2"])}</div>
           
           
            </Stack>
            <div className="mt-5 text-[16px] max-w-[30rem] text-[#FF8200] text-left rtl:text-right">
              {formatT(["ourPlatform.whyPlatform.footer"])}           
            </div>



          </div>

          <div className="  min-h-full md:w-[50%] w-[100%]   rounded-lg overflow-hidden ">
            <img src={tv} className="object-cover w-[100%] h-full  rounded-lg imageZoomIn "  />

          </div>
            
  

      </div>

      <div className="whatIsHeroesHive !flex-col md:!gap-10 text-left rtl:text-right">
        {formatT(["ourPlatform.whatPowers.heading"])}
        <span className="md:text-[35px]  text-[26px] mb-3 font-medium font-[Tektur] max-w-[40rem]">
          {formatT(["ourPlatform.whatPowers.title"])}
        </span>
        <div className="whatIsHeroesHive text-left rtl:text-right  !p-0 md:!flex-row-reverse !flex-col-reverse md:!gap-[5rem] md:max-h-[35rem]">
        {/* textArea */}
          <div className="flex flex-col  justify-start items-start  md:w-[50%]  w-[100%] " >
            <div className="mt-5 text-[26px] max-w-[33rem] font-[Tektur] font-medium">
            {formatT(["ourPlatform.features.pipelines.title"])}          
            </div>
                     <div className=" text-left rtl:text-right paragraphText max-w-[35rem] mt-4 text-[#5D5D5D] ">
{formatT(["ourPlatform.features.pipelines.description"])}</div>
           </div>
          <div className="  min-h-full md:w-[50%] w-[100%]   rounded-lg overflow-hidden ">

          <img src={Card1} className="object-cover w-[100%] h-full imageZoomIn "  >
            
          </img>  
          </div>
  

        </div>

        <div className="whatIsHeroesHive text-left rtl:text-right !p-0 md:!flex-row-reverse !flex-col-reverse md:!gap-[5rem] md:max-h-[35rem]">
        {/* textArea */}
          <div className="flex flex-col justify-start items-start  md:w-[50%]  w-[100%] " >
            <div className="mt-5 text-[26px] max-w-[33rem] font-[Tektur] font-medium">
            {formatT(["ourPlatform.features.squads.title"])}          
            </div>
            <div className=" paragraphText text-left rtl:text-right max-w-[35rem] mt-4 text-[#5D5D5D]">
{formatT(["ourPlatform.features.squads.description"])}</div> </div>
<div className="  min-h-full md:w-[50%] w-[100%]   rounded-lg overflow-hidden ">
          <img src={Card2} className="object-cover w-[100%] imageZoomIn "  >
            
          </img>  
          </div>
  

        </div>
        <div className="whatIsHeroesHive text-left rtl:text-right !p-0 md:!flex-row-reverse !flex-col-reverse md:!gap-[5rem] md:max-h-[35rem]">
        {/* textArea */}
          <div className="flex flex-col justify-start items-start  md:w-[50%]  w-[100%] " >
            <div className="mt-5 text-[26px] max-w-[33rem] font-[Tektur] font-medium">
            {formatT(["ourPlatform.features.activityLog.title"])}       
            </div>
            <div className=" paragraphText text-left rtl:text-right max-w-[35rem] mt-4 text-[#5D5D5D]">
                            {formatT(["ourPlatform.features.activityLog.description"])}        </div>
           </div>
<div className="  min-h-full md:w-[50%] w-[100%]   rounded-lg overflow-hidden ">
          <img src={Card3} className="object-cover w-[100%]  imageZoomIn"  >
            
          </img>  
          </div>
  

        </div>
            
        <div className="whatIsHeroesHive text-left rtl:text-right !p-0 md:!flex-row-reverse !flex-col-reverse md:!gap-[5rem] md:max-h-[35rem]">
        {/* textArea */}
          <div className="flex flex-col justify-start items-start  md:w-[50%]  w-[100%] " >
            <div className="mt-5 text-[26px] max-w-[33rem] font-[Tektur] font-medium">
                       {formatT(["ourPlatform.features.squadManager.title"])}       
         
            </div>
                <div className=" paragraphText   text-left rtl:text-right max-w-[35rem] mt-4 text-[#5D5D5D]">
                       {formatT(["ourPlatform.features.squadManager.description"])}
                       </div>       

</div>
<div className="  min-h-full md:w-[50%] w-[100%]   rounded-lg overflow-hidden ">
          <img src={Card4} className="object-cover w-[100%]  imageZoomIn "  >
            
          </img>  
          </div>
  

        </div>
        <div className="whatIsHeroesHive text-left rtl:text-right !p-0 md:!flex-row-reverse !flex-col-reverse md:!gap-[5rem] md:max-h-[35rem]">
        {/* textArea */}
          <div className="flex flex-col justify-start items-start  md:w-[50%]  w-[100%] " >
            <div className="mt-5 text-[26px] max-w-[33rem] font-[Tektur] font-medium">
                       {formatT(["ourPlatform.features.payments.title"])}       
            </div>
                <div className=" paragraphText text-left rtl:text-right max-w-[35rem] mt-4 text-[#5D5D5D]">
                       {formatT(["ourPlatform.features.payments.description"])}  
                       </div>     

           </div>

<div className="  min-h-full md:w-[50%] w-[100%]   rounded-lg overflow-hidden ">

          <img src={Card5} className="object-cover w-[100%]  imageZoomIn"  >
            
          </img>  
          </div>
  

        </div>
      </div>



                               
            <div className=" h-fit bg-white  md:px-[4rem] gap-[1rem] px-[2rem] text-black flex flex-col md:flex-col w-full box-border md:py-[4rem] py-[2rem] justify-between ">
            <div className="flex-col w-full flex justify-between text-center text-[1.1rem] md:text-[1.2rem]  font-[Tektur]">
                                       {formatT(["ourPlatform.seeIt.heading"])}       

              <div className="gap-2  w-full text-center items-center mb-5 justify-center font-medium md:text-[35px]  text-[26px] ">
                                       {formatT(["ourPlatform.seeIt.title"])}       
              </div>
                <Grid container spacing={3} columnSpacing={3} >
                  <Grid size={12}>
                        <img src={CardC} className="w-full rounded-lg object-cover max-h-[40rem]"/>
                    </Grid>
                    <Grid size={{md:6, xs:12}}>
                        <img src={CardA} className="w-full h-auto object-cover rounded-lg"/>
                    </Grid>
                    <Grid size={{md:6, xs:12}} bgcolor={"#FFF9F2"}>
                        <img src={CardB} className="w-full h-auto object-cover rounded-lg"/>
                    </Grid>
                </Grid>
                            
                  </div>
                        


                </div>



                 <div className=" bg-[#FFF9F2] h-fit md:px-[4rem] gap-[1rem] px-[2rem] text-black flex flex-col md:flex-col w-full box-border md:py-[4rem] py-[2rem] justify-between ">
                    <div className="flex-col flex justify-between text-center text-[1.2rem] md:text-[1.5rem]  font-[Tektur]">
                        <span className="text-lg">                                       {formatT(["ourPlatform.whyItWorks.heading"])}       </span>
                      <div className="gap-2 flex flex-col w-full text-center items-center mb-5 justify-center font-medium md:text-[35px]  text-[26px] ">
                         <span className=" ">{formatT(["ourPlatform.whyItWorks.title"])}</span>
                                                  <span className=" text-[16px] font-normal font-[Poppins] max-w-[65rem]">{formatT(["ourPlatform.whyItWorks.subtitle"])}</span>

                      </div>
                      <OurPlatformCarasouel/>
                       <div className="md:py-[1rem] w-full m-auto flex flex-row mt-5   justify-center items-center align-center gap-3">
                        <Button className="secondaryButton  w-fit !normal-case !text-white !text-[14px]">{formatT(["ourPlatform.whyItWorks.buttons.howItWorks"])}</Button>
                        <Button className=" tertiaryButton !border-2 !text-black !normal-case !border-black !border-solid !rounded-full  !bg-white  w-fit">{formatT(["ourPlatform.whyItWorks.buttons.browseServices"])}</Button>
                    </div>
                                    
                          </div>
                                


                </div>

  <div className="flex md:flex-row flex-col w-full   md:pl-[4rem] box-border bg-[#FF8200]  justify-between items-center ">
                    <div className=" md:py-[8rem] py-[4rem] p-[2rem] w-full md:items-center items-start flex flex-col">
                        <div className=" text-semibold md:text-[35px]   text-[26px] md:text-center text-left max-md:rtl:text-right max-w-[50rem] font-[Tektur] font-medium ">
{formatT(["ourPlatform.cta.title"])}                            </div>  
                        <div className=" text-semibold text-[16px] text-left   max-md:rtl:text-right md:text-center w-full  ">
                        {formatT(["ourPlatform.cta.description"])}                   </div>     
                    <div className="md:py-[1rem] w-full md:m-auto flex  mt-5 flex-row justify-center items-center align-center gap-3">
                        <Button className="startAProjectButton primaryButton md:!text-inherit w-fit ">{formatT(["ourPlatform.cta.buttons.start"])} </Button>
                        <Button className="secondaryButton md:!text-inherit w-fit ">{formatT(["ourPlatform.cta.buttons.consult"])} </Button>
                    </div>            
                    </div>
                    

                </div>


                

         

            </div>
    )
}