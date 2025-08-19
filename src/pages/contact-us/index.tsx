import { Button, Grid, IconButton, MenuItem, Select, Stack, TextField } from "@mui/material"
import "./contact-us.css"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TabletMockup from '../../assets/useCases-page/tabletMockup.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ShampooPhone from '../../assets/useCases-page/ShampooPhone.png'
import HipsterInBlueRoom from '../../assets/useCases-page/HipsterInBlueRoom.png'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { formatT } from "../../util";


const logos = [
  {image:TabletMockup, text:"Brand & Launch Pack", subtext:"Craft your logo, visual identity, and social kit — ready to launch or relaunch your store."}, 
  {image:ShampooPhone, text:"Online Store Pack", subtext:"From homepage to product pages, we build your storefront with conversion in mind."}, 
  {image:HipsterInBlueRoom, text:"Content & Ads Pack", subtext:"Get social posts, ads, and short-form videos designed to drive traffic and boost sales."}, 

];

export const ContactUs = () => {
    return (
        <div className="text-center text-white mb-[3rem] "> 
                
      <div className=" topFrame !pb-[5rem]  md:px-[4rem] md:!pb-[8rem] max-sm:!pb-[8rem] !py-[5rem] max-sm:!py-[3rem] max-sm:!px-[2rem]   ">
        <div className="font-[Tektur]  md:max-w-[60rem]   w-full text-center  text-[28px] md:font-semibold font-medium md:text-[50px] m-auto">
        <span className="text-white">
          {formatT(["contactUs.hero.title"])}   
        </span>

        </div>
        <div className=" pb-[1rem] pt-[1rem]  mt-3 max-w-[47rem] w-ful font-[Poppins] paragraphText !font-extralight text-white  m-auto  ">
        <span>
                {formatT(["contactUs.hero.description"])}  
            </span>
        </div>
        <div className="grid-container md:mt-[1rem] mt-[1rem] ">
          <div className="blur blur-left"></div>
          <div className="blur blur-right"></div>
<div className="md:pb-[1rem] m-auto flex md:flex-row justify-center items-center gap-3">
        <Button className="primaryButton md:!text-inherit !text-[14px]">{formatT(["contactUs.hero.buttons.startProject"])}</Button>
        <Button className="secondaryButton md:!text-inherit !text-[14px]">{formatT(["contactUs.hero.buttons.scheduleConsultation"])}</Button>
        </div>
        </div>
        
      </div>

      
        <div className="px-[2rem] w-full flex gap-10 md:flex-row flex-col  h-full bg-white text-black md:px-[4rem] box-border md:py-[5rem] py-[2rem] justify-center items-start "> 
            <div  className=" md:w-[60%]  px-[3rem] pr-[4rem] text-left flex-col flex !bg-[#FFF9F2] p-[2rem] rounded-lg">
                <div className={"md:min-w-fit  font-[Tektur] font-semibold text-[25px] w-fit  " }>
                    {formatT(["contactUs.formSection.title"])}
                    </div>
                <div className={"md:min-w-fit  py-4 font-normal text-[1.1rem]  max-md:!w-full font-[Poppins] rtl:text-right" }>
                    {formatT(["contactUs.formSection.description"])}
                    </div>

                    <Stack justifyContent={"center"} alignItems={"left"} gap={2} className="rtl:text-right">
                        <Stack direction={"column"} fontSize={"14px"}>
                            {formatT(["contactUs.formSection.fields.name"])}
                            <TextField  size="small" slotProps={{input:{
                                sx:{bgcolor:"white"}
                            }}} placeholder="John Doe"/>
                        </Stack>
                        <Stack direction={"column"} fontSize={"14px"}>
                            Email
                            <TextField  size="small" slotProps={{input:{
                                sx:{bgcolor:"white"}
                            }}} placeholder="Johndoe4@gmail.com"/>
                        </Stack><Stack direction={"column"} fontSize={"14px"}>
                            {formatT(["contactUs.formSection.fields.company"])}
                            <TextField  size="small" slotProps={{input:{
                                sx:{bgcolor:"white"}
                            }}} placeholder="ABC Company"/>
                        </Stack><Stack direction={"column"} fontSize={"14px"}>
                            {formatT(["contactUs.formSection.fields.helpTopic"])}

                            <Select size="small" value={"Select"} slotProps={{input:{
                                sx:{bgcolor:"white"}

                            }}} > <MenuItem value={"Select"}>Select</MenuItem>
                        </Select> 
                        </Stack><Stack direction={"column"} fontSize={"14px"}>
                            {formatT(["contactUs.formSection.fields.message"])}
                            <TextField multiline  minRows={3} slotProps={{input:{
                                sx:{bgcolor:"white"}
                            }}} placeholder="Type your message here.."/>
                        </Stack>
                        <Button className="primaryButton">{formatT(["contactUs.formSection.submitButton"])}</Button>

                    </Stack>


            </div>

            <div className="md:w-[40%] md:min-w-[20rem]   py-5 pr-5 rounded-lg">
                <Stack direction={"column"} textAlign={"left"} fontWeight={500} gap={6} className="text-wrap">
                    <Stack direction={"column"} textAlign={"left"} fontWeight={500} gap={5} className="text-wrap">
                        <div className="flex-col  flex w-14 h-14 rounded-lg justify-center items-center bg-[#FFDFBC] text-[#FF8200]"><MailOutlineIcon fontSize="small"/></div>
                        <div>
                            <div className="text-[20px] font-semibold font-[Tektur] rtl:!text-right">{formatT(["contactUs.contactInfo.email.label"])}</div>
                            <div className="font-normal  rtl:!text-right ">hello@heroshive.com</div>
                        </div>
                    </Stack>
                     <Stack direction={"column"} textAlign={"left"} fontWeight={500} gap={5} className="text-wrap">
                        <div className="flex-col  flex w-14 h-14 rounded-lg justify-center items-center bg-[#FFDFBC] text-[#FF8200]"><ChatBubbleOutlineIcon fontSize="small"/></div>
                        <div>
                            <div className="text-[20px] font-semibold font-[Tektur] rtl:!text-right ">{formatT(["contactUs.contactInfo.liveChat.label"])}</div>
                            <div className="font-normal underline   rtl:!text-right">{formatT(["contactUs.contactInfo.liveChat.value"])}</div>
                        </div>
                    </Stack>
                     <Stack direction={"column"} textAlign={"left"} fontWeight={500} gap={5} className="text-wrap">
                        <div className="flex-col  flex w-14 h-14 rounded-lg justify-center items-center bg-[#FFDFBC] text-[#FF8200]"><LocalPhoneOutlinedIcon fontSize="small"/></div>
                        <div>
                            <div className="text-[20px] font-semibold font-[Tektur] rtl:!text-right ">{formatT(["contactUs.contactInfo.bookCall.label"])}</div>
                            <div className="font-normal underline rtl:!text-right ">{formatT(["contactUs.contactInfo.bookCall.value"])}</div>
                        </div>
                    </Stack>



                </Stack>
            </div>
        </div>

                        <div className="flex md:flex-row flex-col w-full   md:pl-[4rem] box-border bg-[#FF8200]  justify-between items-center ">
                    <div className=" md:py-[8rem] py-[4rem] p-[2rem] w-full flex flex-col justify-center items-center">
                        <div className="  text-[28px] md:font-semibold font-medium md:text-[40px] md:text-center  text-left w-full font-[Tektur]">
{formatT(["contactUs.joinSquad.title"])}                             </div>  
                        <div className=" font-normal text-[20px]   text-left w-full md:text-center md:max-w-[55rem]">
{formatT(["contactUs.joinSquad.description"])}                         </div>     
                    <div className="md:py-[1rem]  m-auto flex md:flex-row mt-5  flex-col w-full !justify-start !items-start md:!justify-center md:!items-center  gap-3">
                        <Button className="secondaryButton md:!text-inherit w-fit !border-none !border-0 !border-black !text-[14px]">{formatT(["contactUs.joinSquad.button"])} </Button>
                    </div>            
                    </div>
                    

                </div>

       
         

            </div>
    )
}