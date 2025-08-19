import { Button, Grid, IconButton, Stack } from "@mui/material"
import { NavBar } from "../../components/layouts/navbar"
import "./aboutUs.css"
import LaughingGuy from '../../assets/about-us/laughing-guy.png'
import Card from '../../assets/about-us/card.png'
import Card1 from '../../assets/about-us/1c403b808055a06ae8f70d13250b8f0773256c63.png'
import Card2 from '../../assets/about-us/c87bf06748342f35ee29fdc6cfe39a0e08382818.png'
import Card3 from '../../assets/about-us/e932b2e0600e2a8cdca62865c64b13cb7f6e2cc7.jpg'
import Card4 from '../../assets/about-us/f91c5d42d3abc3e98095acefb2d07468955c81f9.png'
import Card5 from '../../assets/about-us/efd7fddc47fd779ed79e9a7f3d0a8808d755cf48.png'
import TabletMockup from '../../assets/useCases-page/tabletMockup.png'
import ShampooPhone from '../../assets/useCases-page/ShampooPhone.png'
import HipsterInBlueRoom from '../../assets/useCases-page/HipsterInBlueRoom.png'
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import GroupOffOutlinedIcon from '@mui/icons-material/GroupOffOutlined';
import { AboutUsCarasoule } from "../../components/carasouel/about-us";
import { formatT } from "../../util";
import HandshakeIcon from '@mui/icons-material/Handshake';


const logos = [
  {image:TabletMockup, text:"Brand & Launch Pack", subtext:"Craft your logo, visual identity, and social kit — ready to launch or relaunch your store."}, 
  {image:ShampooPhone, text:"Online Store Pack", subtext:"From homepage to product pages, we build your storefront with conversion in mind."}, 
  {image:HipsterInBlueRoom, text:"Content & Ads Pack", subtext:"Get social posts, ads, and short-form videos designed to drive traffic and boost sales."}, 

];

export const AboutUs = () => {
    return (
        <div className="text-center text-white mb-[3rem] "> 
                
                {/* top banner section */}
                <div className=" bg-[url(./assets/about-us/how-it-works-header.jpg)] bg-no-repeat bg-cover  h-fit !overflow-hidden relative  bg-center ">

                    <NavBar/>
                    <div className="about-us-topBlur"/>
                    <div className=" flex flex-col md:px-[4rem] px-[2rem] box-border md:py-[6rem] md:pb-[8rem] py-[2rem] max-sm:py-[3rem]  max-sm:pb-[6rem] "> 
                        <div className="text-[26px] font-[Tektur] md:text-[50px] md:max-w-[38rem] md:font-medium mw:!text-[40px] max-md:font-medium md:text-left z-10 rtl:text-right ">
                            {formatT(["aboutUs.topBanner.headline"])}
                                                        <div className="text-[14px] font-light md:text-[18px] mt-[1rem] font-[Poppins] rtl:text-right">
                                                          {formatT(["aboutUs.topBanner.subheadline"])}
                                                          </div>
                        </div>

                        <div className="md:py-[1rem] md:m-0 mt-4  m-auto flex flex-row   gap-3">
                            <Button className="primaryButton md:!text-inherit !w-fit ">{formatT(["aboutUs.topBanner.buttons.startProject"])}</Button>
                            <Button className="secondaryButton md:!text-inherit !w-fit ">{formatT(["aboutUs.topBanner.buttons.scheduleConsultation"])}</Button>
                        </div> 
                    </div>
                            
                </div>

                {/* top text-image flex*/}
                <div className=" bg-black md:px-[4rem] gap-[2rem] md:gap-[15rem] px-[2rem]  mw:h-[30rem] max-sm:!py-[3rem]  max-sm:!px-[2rem]   text-black flex flex-col md:flex-row
                w-full box-border md:pt-[7rem] py-[2rem] justify-between items-start">
                    <div className=" max-md:gap-[1rem]  md:h-[100%] md:w-[40%] flex-col flex justify-between text-left text-[1.2rem] md:text-[1.3rem]  font-[Tektur]">
                      <div className="text-base flex-col flex text-[#FF8200;] font-medium !font-[Poppins] rtl:text-right">
                        {formatT(["aboutUs.whoWeAreSection.title"])}
                        <div className="!text-[35px] max-md:!text-[25px] font-normal leading-[2rem] font-[Tektur] rtl:text-right md:leading-[3rem] mt-1 text-white ">
                          {formatT(["aboutUs.whoWeAreSection.description"])}
                          </div>
                      </div>
                        <span className="  text-[18px] max-md:mt-10 max: font-[Poppins] text-white rtl:text-right">
                          {formatT(["aboutUs.whoWeAreSection.summary"])}
                        </span>
                    </div>
                    <img src={LaughingGuy} className="object-cover  w-full lg:max-w-[45%] md:w-[35%] h-[100%] max-h-[30rem]  rounded-lg"/>                  
                </div>

                               
                <div className=" bg-black md:px-[4rem] gap-[2rem] md:gap-[15rem] px-[2rem] max-sm:!py-[3rem] max-sm:!pt-[2rem] max-sm:!px-[2rem] h-fit text-white text-left flex flex-col md:flex-row 
                w-full box-border md:pb-[3rem] py-[2rem] justify-between items-baseline">
                  <div className="flex-col flex rounded-lg text-[18px] justify-center  max-md:w-full  items-start gap-3   text-white">
                    <div className="flex-col  flex w-14 h-14 rounded-lg justify-center items-center  bg-[#FFDFBC] text-[#FF8200]"><GroupOffOutlinedIcon fontSize="small"/></div>
                      <span className="max-w-[23rem] ">{formatT(["aboutUs.keyPoints.0"])}</span>
                    </div>  
                     <div className="flex-col flex rounded-lg text-[18px] justify-center max-md:w-full  items-start gap-3  text-white">
                    <div className="flex-col  flex w-14 h-14 rounded-lg justify-center items-center bg-[#FFDFBC] text-[#FF8200]"><MouseOutlinedIcon fontSize="small"/></div>
                      <span className="max-w-[23rem]">{formatT(["aboutUs.keyPoints.1"])}</span>
                    </div>     
                     <div className="flex-col flex rounded-lg text-[18px] justify-center max-md:w-full  items-start gap-3  text-white">
                    <div className="flex-col  flex w-14 h-14 rounded-lg justify-center items-center bg-[#FFDFBC] text-[#FF8200]"><GroupOffOutlinedIcon fontSize="small"/></div>
                      <span className="max-w-[23rem]">{formatT(["aboutUs.keyPoints.2"])} </span>                
                      </div>          
                </div>

                <div className=" bg-white max-sm:!py-[3rem] max-sm:!px-[2rem] h-fit md:px-[4rem] gap-[3rem] px-[2rem] text-black flex flex-col md:flex-row w-full box-border md:py-[4rem] py-[2rem] justify-between items-start">
                    <div className="md:w-[30%] flex-col flex justify-between text-left text-[1.2rem] md:text-[1.5rem]  rtl:text-right font-[Tektur]">
                      <div className="max-md:text-[16px] md:text-[20px] uppercase flex-col flex font-medium !font-[Poppins]">
                        {formatT(["aboutUs.ourMission.title"])}
                      </div>
                        
                    </div>
                    <div  className=" w-full h-fit  md:w-[100%] text-[30px] max-sm:text-[25px] flex flex-col font-[Tektur] font-medium text-left  max-md:rtl:text-right  rounded-lg">
                      <div>{formatT(["aboutUs.ourMission.content"])}</div>
                      <div className=" text-[#FF8200]">{formatT(["aboutUs.ourMission.highlight"])}</div>
                    </div>                  
                </div>

                 <div className=" bg-[#FFF9F2] max-sm:!py-[3rem] max-sm:!px-[2rem]  h-fit md:px-[4rem] gap-[1rem] px-[2rem] text-black flex flex-col md:flex-col w-full box-border md:py-[4rem] py-[2rem] justify-between items-start">
                    <div className="md:w-[30%] flex-col flex justify-between text-left text-[1.2rem] md:text-[1.5rem]  font-[Tektur]">
                      <div className="max-md:text-[16px] md:text-[24px] uppercase flex-col flex font-medium !font-[Poppins] rtl:text-right">
                        {formatT(["aboutUs.ourStory.title"])}
                      </div>
                        
                    </div>
                    <div  className=" w-full h-fit   md:w-[100%]  text-[30px] max-md:text-[25px] flex flex-col font-[Tektur] font-light text-left rtl:text-right rounded-lg">
                      <div>
                        {formatT(["aboutUs.ourStory.content"])}                       
                      </div>
                    </div>    

                      <div className="w-full min-h-[300px] h-fit rounded-lg backgroundImageDiv   md:py-[4rem] py-[2rem] p  text-left rtl:text-right md:px-[4rem] gap-[2rem] md:gap-[1rem] px-[2rem]" >
                          <div className="md:w-[20rem] md:min-h-[10rem]  bg-white rounded-xl flex flex-col gap-2 items-start justify-between py-[1rem] px-[2rem] ">
                            <div className="flex-col  flex w-14 h-14 rounded-lg justify-center items-center text-[14px]  bg-[#FFDFBC] text-[#FF8200]">
                              <HandshakeIcon fontSize="large"/>
                            </div>
                            <div className="md:text-[24px] font-medium text-wrap">{formatT(["aboutUs.backgroundImageCards.card1"])}</div>
                          </div>     
                          <div className="md:w-[20rem] md:h-[10rem]  bg-white rounded-xl flex flex-col gap-2 items-start justify-between py-[1rem] px-[2rem] ">
                            <div className="flex-col  flex w-14 h-14 rounded-lg justify-center items-center text-[14px]  bg-[#FFDFBC] text-[#FF8200]">
                              <HandshakeIcon fontSize="large"/>
                            </div>
                            <div className="md:text-[24px] text-wrap font-medium">{formatT(["aboutUs.backgroundImageCards.card2"])}</div>
                          </div>                          
                        <div className="md:w-[20rem] md:h-[10rem] bg-white rounded-xl flex flex-col gap-2 items-start justify-between py-[1rem] px-[2rem] ">
                            <div className="flex-col  flex w-14 h-14 rounded-lg justify-center items-center  bg-[#FFDFBC] text-[#FF8200]">
                              <HandshakeIcon fontSize="large"/>
                            </div>
                            <div className="md:text-[24px] text-wrap font-medium">{formatT(["aboutUs.backgroundImageCards.card3"])}</div>
                          </div>
                      </div>

                    <Stack direction={"row"} gap={2} justifyContent={"space-between"} alignItems={"center"} className=" w-full h-fit font-[Poppins] mt-2 md:w-[100%] max-md:!flex-col max-md:!gap-10 max-md:text-[20px] md:text-[24px ]flex flex-col paragraphText  font-light text-left rounded-lg">
                      <div className="max-w-[33rem] rtl:text-right">
{formatT(["aboutUs.founderMessage.text1"])}                    </div>
                      <div className="text-[#FF8200]  max-w-[25rem] rtl:text-right">
{formatT(["aboutUs.founderMessage.text2"])}                     </div>
                    </Stack>    


                </div>

                 <div className=" bg-white h-fit sm:flex max-sm:!py-[3rem] max-sm:!px-[2rem]  md:px-[4rem] gap-[1rem] px-[2rem] text-black hidden flex-col md:flex-col w-full box-border md:py-[4rem] py-[2rem] justify-between ">
                    <div className="flex-col flex justify-between text-center font-[Tektur]">
                      <div className="gap-2 flex w-full text-center  text-[24px]  md:text-[40px] items-center mb-5  justify-center font-medium md:font-semibold  rtl:text-right">
                        {formatT(["aboutUs.whyWereDifferent.title"])}
                      </div>
                       <div className="flex flex-col ">
                          <Grid container  direction={"row"} size="grow"  sx={{
                            justifyContent: "center",
                            alignItems: "stretch",
                          }}  spacing={4}   >
                          
                          
                          <Grid  size={{md:4, xs:12}} className={"!h-full"} >
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col h-full items-start text-left ">
                             <div className="overflow-hidden rounded-md w-full">
                            <img src={Card5} alt="Execution First" className="rounded-md mb-4 w-full max-w[30rem] max-h-[30rem] object-cover imageZoomIn " />
                          </div>
                            <h3 className="font-semibold text-[30px] mb-1 rtl:text-right ">{formatT(["aboutUs.whyWereDifferent.cards.0.title"])}</h3>
                            <p className="paragraphText max-w-[27rem] !flex-grow font-[Poppins] rtl:text-right text-gray-600">{formatT(["aboutUs.whyWereDifferent.cards.0.description"])}</p>
                          </div>
                          </Grid>


 
                          <Grid size={{md:4, xs:12}} height={"100%"}>
                        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col  h-full items-left text-left">
                            <div className="overflow-hidden rounded-md w-full">
                            <img src={Card2} alt="Remote By Design" className="rounded-md mb-4 w-full max-w[30rem] max-h-[30rem] object-cover aspect-[10/16] imageZoomIn" />
                          </div>
                            <h3 className="font-semibold text-[30px] mb-1 rtl:text-right">{formatT(["aboutUs.whyWereDifferent.cards.1.title"])}</h3>
                            <p className="paragraphText max-w-[27rem] rtl:text-right font-[Poppins] text-gray-600">{formatT(["aboutUs.whyWereDifferent.cards.1.description"])}</p>
                          </div>
                          </Grid>

                          <Grid size={{md:4, xs:12}} height={"100%"}>
                        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col  h-full  items-left text-left rtl:text-right">
                          <div className="overflow-hidden rounded-md w-full">
                            <img src={Card3} alt="Pipeline-Powered" className="rounded-md mb-4  w-full max-h-[30rem] object-cover aspect-[10/16] imageZoomIn" />
                          </div> 
                            <h3 className="font-semibold text-[30px] mb-1 rtl:text-right">{formatT(["aboutUs.whyWereDifferent.cards.2.title"])}</h3>
                            <p className="paragraphText max-w-[27rem] font-[Poppins] text-gray-600 rtl:text-right">{formatT(["aboutUs.whyWereDifferent.cards.2.description"])}</p>
                          </div>
                          </Grid>

                        

                       
                        </Grid>
                        <Grid container width={"100%"} alignItems={"center"} justifyContent={"center"} mt={4} spacing={4}>
                          <Grid size={{md:4, xs:12}} height={"100%"}>

                        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col h-full   items-left text-left rtl:text-right">
                          <div className="overflow-hidden rounded-md">
                          <img src={Card4} alt="Fully Managed" className="rounded-md mb-4 w-full max-h-[30rem] object-cover aspect-[10/16] imageZoomIn" />
                          </div>                        
                        <h3 className="font-semibold text-[30px] mb-1 rtl:text-right">{formatT(["aboutUs.whyWereDifferent.cards.3.title"])}</h3>
                        <p className="paragraphText max-w-[27rem] font-[Poppins] text-gray-600 rtl:text-right">{formatT(["aboutUs.whyWereDifferent.cards.3.description"])}</p>
                      </div>
                      </Grid>

                          <Grid size={{md:4, xs:12}} height={"100%"}>


                        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col  h-full  items-left text-left rtl:text-right">
                          <div className="overflow-hidden rounded-md">
                        <img src={Card1} alt="Flexible" className="rounded-md mb-4 w-full max-h-[30rem] object-cover aspect-[10/16] imageZoomIn" />

                          </div>
                        <h3 className="font-semibold text-[30px] mb-1 rtl:text-right">{formatT(["aboutUs.whyWereDifferent.cards.4.title"])}</h3>
                        <p className="paragraphText max-w-[27rem] font-[Poppins] text-gray-600 rtl:text-right">{formatT(["aboutUs.whyWereDifferent.cards.4.description"])}</p>
                      </div>
                      </Grid>
                    </Grid>

                

                
              </div>
                                    
                          </div>
                                


                </div>

                                 <div className=" bg-white h-fit sm:hidden  max-sm:!py-[3rem] max-sm:!px-[2rem]  md:px-[4rem] gap-[1rem] px-[2rem] text-black flex flex-col md:flex-col w-full box-border md:py-[4rem] py-[2rem] justify-between ">
                    <div className="flex-col flex justify-between text-center font-[Tektur]">
                      <div className="gap-2 flex w-full text-center  text-[24px]  md:text-[40px] items-center mb-5  justify-center font-medium md:font-semibold ">
                        {formatT(["aboutUs.whyWereDifferent.title"])}
                      </div>
                       <div className="flex flex-col ">
                          <Grid container  direction={"row"}   sx={{
                            justifyContent: "center",
                            alignItems: "stretch",
                          }}  spacing={4}   >
                          
                          
                          <Grid  size={{md:4, xs:12}} className={"!h-full"} >
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col h-full items-start text-left">
                             <div className="overflow-hidden w-full">
                            <img src={Card5} alt="Execution First" className="rounded-md mb-4 w-full max-w[30rem] max-h-[30rem] object-cover imageZoomIn rtl:text-right " />
                          </div>
                            <h3 className="font-semibold text-[30px] mb-1 rtl:text-right">{formatT(["aboutUs.whyWereDifferent.cards.0.title"])}</h3>
                            <p className="paragraphText max-w-[27rem] !flex-grow font-[Poppins] rtl:text-right text-gray-600">{formatT(["aboutUs.whyWereDifferent.cards.0.description"])}</p>
                          </div>
                          </Grid>


 
                          <Grid size={{md:4, xs:12}} height={"100%"}>
                        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col  h-full items-left text-left rtl:text-right">
                            <div className="overflow-hidden w-full">
                            <img src={Card2} alt="Remote By Design" className="rounded-md mb-4 w-full max-w[30rem] max-h-[30rem] object-cover aspect-[10/16] imageZoomIn " />
                          </div>
                            <h3 className="font-semibold text-[30px] mb-1">{formatT(["aboutUs.whyWereDifferent.cards.1.title"])}</h3>
                            <p className="paragraphText max-w-[27rem] !flex-grow font-[Poppins] text-gray-600">{formatT(["aboutUs.whyWereDifferent.cards.1.description"])}</p>
                          </div>
                          </Grid>

                          <Grid size={{md:4, xs:12}} height={"100%"}>
                        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col  h-full  items-left text-left rtl:text-right">
                          <div className="overflow-hidden w-full">
                            <img src={Card3} alt="Pipeline-Powered" className="rounded-md mb-4  w-full max-h-[30rem] object-cover aspect-[10/16] imageZoomIn" />
                          </div> 
                            <h3 className="font-semibold text-[30px] mb-1">{formatT(["aboutUs.whyWereDifferent.cards.2.title"])}</h3>
                            <p className="paragraphText max-w-[27rem] !flex-grow font-[Poppins] text-gray-600">{formatT(["aboutUs.whyWereDifferent.cards.2.description"])}</p>
                          </div>
                          </Grid>

                        

                       
                        </Grid>
                        <Grid container width={"100%"} alignItems={"center"} justifyContent={"center"} mt={4} spacing={4}>
                          <Grid size={{md:4, xs:12}} height={"100%"}>

                        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col h-full   items-left text-left rtl:text-right">
                          <div className="overflow-hidden">
                          <img src={Card4} alt="Fully Managed" className="rounded-md mb-4 w-full max-h-[30rem] object-cover aspect-[10/16] imageZoomIn" />
                          </div>                        
                        <h3 className="font-semibold text-[30px] mb-1">{formatT(["aboutUs.whyWereDifferent.cards.3.title"])}</h3>
                            <p className="paragraphText max-w-[27rem] !flex-grow font-[Poppins] text-gray-600">{formatT(["aboutUs.whyWereDifferent.cards.3.description"])}</p>
                      </div>
                      </Grid>

                          <Grid size={{md:4, xs:12}} height={"100%"}>


                        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col  h-full  items-left text-left rtl:text-right">
                          <div className="overflow-hidden">
                        <img src={Card1} alt="Flexible" className="rounded-md mb-4 w-full max-h-[30rem] object-cover aspect-[10/16] imageZoomIn" />

                          </div>
                        <h3 className="font-semibold text-[30px] mb-1">{formatT(["aboutUs.whyWereDifferent.cards.4.title"])}</h3>
                            <p className="paragraphText max-w-[27rem] !flex-grow font-[Poppins] text-gray-600">{formatT(["aboutUs.whyWereDifferent.cards.4.description"])}</p>
                      </div>
                      </Grid>
                    </Grid>

                

                
              </div>
                                    
                          </div>                              
                </div>


                 <div className=" bg-[#FFF9F2] h-fit max-sm:!py-[3rem] max-sm:!px-[2rem]  md:px-[4rem] gap-[1rem] px-[2rem] text-black flex flex-col md:flex-col w-full box-border md:py-[4rem] md:pb-[0rem] py-[2rem] justify-between ">
                    <div className="flex-col flex justify-between text-center text-[1.2rem] md:text-[1.5rem]  font-[Tektur]">
                      <div className="gap-2 flex flex-col w-full text-center items-center max-md:text-[30px] mb-5 justify-center font-semibold text-[40px] ">
                         <span className=" ">
                                                  {formatT(["aboutUs.teamSection.title"])}

                         </span>
                                                  <span className="paragraphText font-normal font-[Poppins] max-w-[65rem]">
                                                    {formatT(["aboutUs.teamSection.description"])}</span>

                      </div>
                      <AboutUsCarasoule/>
                      
                                    
                          </div>
                                


                </div>

                                {/* grow your store section*/}
                <div className="flex md:flex-row flex-col max-sm:!py-[3rem] max-sm:!px-[2rem]  px-[4rem]   w-full bg-white py-[5rem]   box-border  justify-center items-center  ">
                    <div className=" md:py-[8rem] py-[4rem] p-[2rem] w-full gradient rounded-2xl">
                        <div className=" text-semibold text-[30px] max-md:mb-5 max-sm:text-[25px] md:text-center w-full font-[Tektur] font-medium ">
                         {formatT(["aboutUs.growYourStore.headline"])}
                             </div>  
                        <div className=" text-semibold paragraphText text-center flex flex-row justify-center items-center  ">
                        <div className="max-w-[54rem]">{formatT(["aboutUs.growYourStore.subheadline"])}</div>                       </div>     
                    <div className="md:py-[1rem] w-full m-auto flex md:flex-row mt-5  justify-center items-center align-center gap-3">
                        <Button className="primaryButton md:!text-inherit w-fit !text-[14px]">{formatT(["aboutUs.growYourStore.buttons.applyAsSquad"])}</Button>
                        <Button className="secondaryButton md:!text-inherit w-fit !text-[14px]">{formatT(["aboutUs.growYourStore.buttons.partnerWithUs"])}</Button>
                    </div>            
                    </div>
                    

                </div>

           <div className="flex md:flex-row flex-col w-full   md:pl-[4rem] box-border bg-[#FF8200]  justify-between items-center ">
                    <div className=" md:py-[8rem] py-[4rem] p-[2rem] w-full">
                        <div className=" font-medium   md:font-semibold text-[28px] md:text-[40px] md:text-center text-left w-full font-[Tektur] rtl:text-center">
{formatT(["aboutUs.letsBuildTogether.title"])}                             </div>  
                        <div className="text-[20px] md:text-[20px]  text-left md:text-center rtl:text-center w-full my-1 ">
                        {formatT(["aboutUs.letsBuildTogether.subtitle"])}                 
                        </div>  
                        <div className=" text-semibold  paragraphText  text-left md:text-center w-full mt-4  rtl:text-center">
                        {formatT(["aboutUs.letsBuildTogether.description"])}                 
                        </div> 
                    <div className="md:py-[1rem] w-full m-auto flex flex-row mt-5  justify-center items-center align-center gap-3">
                        <Button className="startAProjectButton md:!text-inherit !w-fit !text-[14px]">{formatT(["aboutUs.letsBuildTogether.buttons.startProject"])} </Button>
                        <Button className="secondaryButton md:!text-inherit !w-fit !text-[14px]">{formatT(["aboutUs.letsBuildTogether.buttons.scheduleConsultation"])} </Button>
                    </div>            
                    </div>
                    

                </div>


            </div>
    )
}