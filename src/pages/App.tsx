
import '../index.css';
import { Box, BoxProps, Button, Grid, IconButton, Stack } from "@mui/material";
import HiveOutlinedIcon from '@mui/icons-material/HiveOutlined';
import { LogoCarousel } from "../components/carasouel/logo";
import { PopularCarasoul } from "../components/carasouel/popularPack";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import userImage from '../assets/unsplash_pAtA8xe_iVM.png';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import PolylineIcon from '@mui/icons-material/Polyline';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import image1 from '../assets/smallGridImages/0a00d0c6bca04ac7f22fb69e5a528d62dba095cf.jpg';
import image2 from '../assets/smallGridImages/3a85ad05f1104ab85031c2dff624ec175ff64d5d (1).png';
import image3 from '../assets/smallGridImages/fda76ed32be16766c106da8926e05489bd543c6e copy.jpg'
import image4 from '../assets/smallGridImages/6b18b26bd15d11c52d6ffad2962955fefdeda7ee.jpg';
import image5 from '../assets/smallGridImages/4a2be75cf77a3b0cfb7ce968610156bdaa49e183.jpg';
import image6 from '../assets/smallGridImages/8648468267d20d7afa3c3c9c79f085aef59f3ee6 (1).png';
import image7 from '../assets/smallGridImages/905196dd0f2f96a022edfdd16c4785337b536725.jpg';
import image8 from '../assets/smallGridImages/ad8b48823b18d2f3e6b3c5471359217b37e8f15b (1).png';
import image9 from '../assets/smallGridImages/fda76ed32be16766c106da8926e05489bd543c6e.jpg';
import image10 from '../assets/smallGridImages/66ca067a517d6e767e767f86bcfe848307d7947b.jpg';
import image11 from '../assets/smallGridImages/24bc0a5a0e538a0749c7a7e627a4da92f2322efd.jpg';
import image12 from '../assets/smallGridImages/d2a1e5dcd80fba0e8ce6a3cecb541e992eb4cc5f.jpg';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import screenInDesert from '../assets/usecases/cfab666871c29ee1056b5f462fef3f58a123bf60.jpg';
import redLines from '../assets/usecases/6b18b26bd15d11c52d6ffad2962955fefdeda7ee.jpg'
import laptopGuy from '../assets/usecases/609e1de332215fa4a9fc342c456c82c0d97cebb9.jpg'
import laughterMeeting from '../assets/usecases/fde154dd2ecf4c4e76b55e78c47b2262f0915e11.jpg'
import { BottomImageCarousel, BottomImageScroller, TopImageCarousel, TopImageScroller } from "../components/carasouel/topSection";
import JoinRightOutlinedIcon from '@mui/icons-material/JoinRightOutlined';
import { ArrowRightAlt, Engineering, FreeCancellation, GppGood, GppGoodOutlined } from "@mui/icons-material";
import { SpringAnimate } from "../components/animations/springAnimation";
import { MoveOnScroll } from "../components/animations/moveOnScrollAnimate";
import { formatT } from '../util';
import { useTranslation } from 'react-i18next';

function App() {

  function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={[
          (theme) => ({
            bgcolor: '#fff',
            color: 'grey.800',
            border: '1px solid',
            borderColor: 'grey.300',
            p: 1,
            borderRadius: 2,
            textAlign: 'center',
            fontSize: '0.875rem',
            fontWeight: '700',
            ...theme.applyStyles('dark', {
              bgcolor: '#101010',
              color: 'grey.300',
              borderColor: 'grey.800',
            }),
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      />
    );
  }
  const {t} = useTranslation()

  const smallGridImages = [image1, image2, image4, image5, image6, image7, image8, image9, image10]

  const topImages = [image8,image5,image3, image4, image6];
  const bottomImages = [image12,image5,image10, image1, image2, image11];



    return (
    <div className="text-center text-white py-[2rem]  "> 
      <div className="min-h-100vh topFrame !pt-0 ">
        <div className="font-[Tektur] !w-full md:max-w-[40rem] text-[22px] mw:mb-4 font-medium  md:text-[35px]  mt-0 m-auto">
          {formatT(["home.hero.title"])}
        </div>
        <div className=" pb-[1rem] max-sm:pt-2 font-[Poppins] text-[15px] !font-light  mw:text-[16px] md:text-[15px] text-white md:w-[50%] m-auto  ">
        <span>
            {formatT(["home.hero.subtitle"])}
          </span>
        </div>
      
        <div className="md:pb-[1rem] mt-2 m-auto flex md:flex-row  justify-center items-center gap-3">
        <Button className="primaryButton md:!text-inherit ">{formatT(["home.hero.buttons.start"])}</Button>
        <Button className="secondaryButton md:!text-inherit"> {formatT(["home.hero.buttons.schedule"])}</Button>
        </div>

        <div className="grid-container md:mt-[1rem] mt-[1rem] !p-0 ">
          <div className="blur blur-left"></div>
          <div className="blur blur-right"></div>
            {/* <TopImageCarousel/> */}
            <TopImageScroller/>
            <BottomImageScroller/>
        </div>


        
      </div>
      
      <div className="trustedBySection  max-w-[2000px]">
          <div className=" text-[16px] md:text-[24px] text-center max-w-[40rem] font-medium ">{formatT(["home.trusted.title"])}</div>
          <LogoCarousel/>
      </div>

      <div className="whatIsHeroesHive max-sm:!py-[3rem] rtl:text-right">
        {/* textArea */}
          <div className="flex flex-col justify-center items-start  md:w-[50%] w-[100%] " >
            <div className="sectionAboveText !mb-2 sm:mb-10">{formatT(["home.whatIs.sectionTitle"])}</div>
            <div className="md:text-[36px] text-[28px] md:font-semibold font-medium font-[Tektur]">{formatT(["home.whatIs.headline"])}</div>
            <div className="mt-5 paragraphText">
              {formatT(["home.whatIs.paragraphs.0"])}
            </div>

            <div className="mt-5 paragraphText text-[#FF8200]">
              {formatT(["home.whatIs.paragraphs.1"])}
            </div>

            <Stack direction={"row"} gap={2} mt={5} className="!text-[16px] md:!text-[20px] md:!flex !hidden">
              <Button className="!text-white secondaryButton !px-4 !py-2 !rounded-[100px]">{formatT(["home.whatIs.buttons.video"])}</Button>
              <Button className="!text-black !px-4 !py-2 !rounded-[100px] tertiaryButton">{formatT(["home.whatIs.buttons.howItWorks"])}</Button>
            </Stack>

          </div>

          <div className="flex flex-col justify-center items-center md:w-[50%] md:h-[fit]  rounded-lg bg-[#FF8200] px-[2rem]  md:px-[2rem] lg:px-[7rem] xl:px-[8rem] mw:px-[10rem]"  >
              <Grid container spacing={1} overflow={"hidden min-h-full min-w-[20px]"}>
                {smallGridImages.map((img) => {
                  return (<Grid size={4} className={"overflow-hidden"} >
                    <img src={img} draggable={false} className="min-h-full min-w-full object-cover aspect-square imageZoomIn hover:!scale-125 " />
                  </Grid>)
                })}
                
              </Grid>
          </div>  
            <Stack direction={"row"} gap={2} mt={1} className="!text-[16px] md:!text-[20px] md:!hidden !flex md:justify-start !justify-center ">
              <Button className="!text-white secondaryButton  !rounded-[100px]">{formatT(["home.whatIs.buttons.video"])}</Button>
              <Button className="!text-black !rounded-[100px] tertiaryButton">{formatT(["home.whatIs.buttons.howItWorks"])}</Button>
            </Stack>     

      </div>

      <div className="howItWorks  max-sm:!py-[3rem] max-sm:!px-[2rem]">
          <div className="flex flex-col justify-center items-center w-full  md:w-[50%] " >
            <div className="text-[20px] max-md:text-[16px] font-medium mb-2 uppercase">{formatT(["home.howItWorks.sectionTitle"])}</div>
            <div className="md:text-[40px] text-[30px] font-medium md:font-semibold font-[Tektur] w-full">{formatT(["home.howItWorks.headline"])}</div>
            <div className="mt-1  md:!min-w-[40rem] paragraphText">
              {formatT(["home.howItWorks.description"])}
            </div>

              <MoveOnScroll>

              <Stack direction={"row"} justifyContent={"space-evenly"} alignItems={"center"} gap={4} mt={5} className="text-[20px] md:w-[90vw] max-w-[2000px] md:!flex-row !flex-col">
                 <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}>
                  <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center">
                      <HiveOutlinedIcon fontSize="medium"/>
                  </div>
                  <div className="text-[18px] font-semibold  font-[Tektur]">{formatT(["home.howItWorks.steps.0"])}</div>
                </Stack>
               
                <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}>
                  <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center">
                      <PolylineIcon fontSize="medium"/>
                  </div>
                  <div className="text-[18px] font-semibold  font-[Tektur]">{formatT(["home.howItWorks.steps.1"])}</div>
                </Stack>
                
                <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}>
                  <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center">
                      <JoinRightOutlinedIcon fontSize="medium" className=" rotate-[30deg]"/>
                  </div>
                  <div className="text-[18px] font-semibold  font-[Tektur]">{formatT(["home.howItWorks.steps.2"])} </div>
                </Stack>

                <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}>
                  <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center">
                      <RocketLaunchOutlinedIcon fontSize="medium"/>

                  </div>  
                  <div className="text-[18px] font-semibold  font-[Tektur]">{formatT(["home.howItWorks.steps.3"])}</div>
                </Stack>

                

              </Stack>
            </MoveOnScroll>

            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={2} mt={5} className="!text-[16px] md:!text-[20px]">
              <Button className="!text-white !rounded-[100px] secondaryButton !normal-case">{formatT(["home.howItWorks.buttons.video"])}</Button>
              <Button className="!text-black !px-4 !py-2 !rounded-[100px] !border-2 !border-black tertiaryButton !normal-case">{formatT(["home.howItWorks.buttons.services"])}</Button>
            </Stack>

          </div>    

      </div>
      
                <div className="howItWorks popularPacks overflow-hidden max-sm:!py-[3rem] max-sm:!px-[2rem] !px-[2rem]  sm:!px-[4rem]  box-border sm:!py-[6rem] !py-[4rem]">
                    <div className="flex flex-col justify-center md:items-start items-center w-full" >
                        <div className="text-[16px] mb-2 font-medium uppercase">{formatT(["home.popularPacks.sectionTitle"])}</div>
                        <div className="md:text-[40px] text-[25px] font-[Tektur] max-md:font-medium font-semibold">{formatT(["home.popularPacks.headline"])}</div>
                        <Stack direction={"row"} gap={5} justifyContent={"space-between"} alignItems={"flex-end"} className="flex !flex-col w-full md:!flex-row !items-center">
                            <div className="mt-3 paragraphText w-full md:w-[50%] rtl:text-right md:text-left">
                            {formatT(["home.popularPacks.description"])}            
                            </div>
                            <Button className="!text-white secondaryButton  !px-4 !py-2 !rounded-[100px] md:!block !hidden">{formatT(["home.popularPacks.button"])}</Button>

                        </Stack>
                        <PopularCarasoul/>
                    <Button className="!text-white secondaryButton  !mt-4 !rounded-[100px] w-fit md:!hidden block">{formatT(["home.popularPacks.button"])}</Button> 

                       
                    </div>   
                   
                </div>

      <div className="howItWorks comparison  max-sm:!py-[3rem] max-sm:!px-[2rem]">
          <div className="flex flex-col justify-center items-center" >
            <div className="text-[16px]  mb-3 font-medium uppercase">{formatT(["home.comparison.sectionTitle"])}</div>
            <div className="text-[40px] max-sm:text-[25px] font-medium sm:font-semibold max-w-[35rem] font-[Tektur]">{formatT(["home.comparison.headline"])}</div>
            <div className="mt-3 mb-6 max-sm:mb-3 paragraphText md:w-[70%] ">
              {formatT(["home.comparison.description"])}              
            </div>
              
          </div> 

          <table className="w-full text-[20px] mb-9 max-sm:mb-5 " >
            <thead >
              <tr>
                <th>{" "}</th>
                <th className="bg-[#FF8200] z-10 rounded-t-lg !border-none text-white">{formatT(["home.comparisonTable.header.columns.1"])}</th>
                <th>{formatT(["home.comparisonTable.header.columns.2"])}</th>
                <th>{formatT(["home.comparisonTable.header.columns.3"])}</th>
                <th>{formatT(["home.comparisonTable.header.columns.4"])}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-left">{formatT(["home.comparisonTable.rows.0.feature"])}</th>
                <td className="bg-[#FF8200] z-10" style={{border:"none", color:"white"}}>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CheckCircleIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.0.values.0"])}</div>
                  </div>
                </td>              
                <td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CancelIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.0.values.1"])}</div>
                  </div>
                </td>              
                <td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CheckCircleIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.0.values.2"])}</div>
                  </div>
                </td>               
              <td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CancelIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.0.values.3"])}</div>
                  </div>
                </td></tr>
              <tr>
                <th className="text-left">{formatT(["home.comparisonTable.rows.1.feature"])}</th>
                <td className="bg-[#FF8200] z-10" style={{border:"none", color:"white"}}>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CheckCircleIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.1.values.0"])}</div>
                  </div>
                </td><td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CancelIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.1.values.1"])}</div>
                  </div>
                </td>               
                <td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CheckCircleIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.1.values.2"])}</div>
                  </div>
                </td>
              <td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CheckCircleIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.1.values.3"])}</div>
                  </div>
                </td></tr>
              <tr>
                <th className="text-left">{formatT(["home.comparisonTable.rows.2.feature"])}</th>
                <td className="bg-[#FF8200] z-10" style={{border:"none", color:"white"}}>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CheckCircleIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.2.values.0"])}</div>
                  </div>
                </td>                
                <td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CheckCircleIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.2.values.1"])}</div>
                  </div>
                </td>                
                <td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CancelIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.2.values.2"])}</div>
                  </div>
                </td>              
                <td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CancelIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.2.values.3"])}</div>
                  </div>
                </td>              
                </tr>
              <tr>
                <th className="text-left">{formatT(["home.comparisonTable.rows.3.feature"])}</th>
                <td className="bg-[#FF8200] z-10" style={{border:"none", color:"white"}}>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CheckCircleIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.3.values.0"])}</div>
                  </div>
                </td>                
                <td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <ErrorIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.3.values.1"])}</div>
                  </div>
                </td>              
                <td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <ErrorIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.3.values.2"])}</div>
                  </div>
                </td>              
                <td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CancelIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.3.values.3"])}</div>
                  </div>
                </td>            
                </tr>
              <tr>
                <th className="text-left">{formatT(["home.comparisonTable.rows.4.feature"])}</th>
                <td  className="bg-[#FF8200] z-10" style={{border:"none", color:"white"}}>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CheckCircleIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.0.values.0"])}</div>
                  </div>
                </td>                
                <td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CancelIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.4.values.1"])}</div>
                  </div>
                </td>                
                <td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CheckCircleIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.4.values.2"])}</div>
                  </div>
                </td>
              <td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CheckCircleIcon fontSize="small" />
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.4.values.3"])}</div>
                  </div>
                </td>              
                </tr>
              <tr>
                <th className="text-left">{formatT(["home.comparisonTable.rows.5.feature"])}</th>
                <td className="bg-[#FF8200] z-10 " style={{border:"none", color:"white"}} >
                  <div className="flex flex-col justify-center items-center gap-1" >
                    <CheckCircleIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.5.values.0"])}</div>
                  </div>
                </td>                
                <td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CancelIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.5.values.1"])}</div>
                  </div>
                </td>              
                <td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CancelIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.5.values.2"])}</div>
                  </div>
                </td>
              <td>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <CancelIcon fontSize="small"/>
                    <div className="md:text-[16px] font-medium">{formatT(["home.comparisonTable.rows.5.values.3"])}</div>
                  </div>
                </td>              
              </tr>
              <tr className="!border-none">
                <th className="text-left !border-none"></th>
                <td className="bg-[#FF8200] z-10 rounded-b-lg " style={{border:"none", color:"white"}} >
                 
                </td>                
                <td className="!border-none">
                  <div className="flex flex-col justify-center items-center gap-1 !border-none">
                  
                  </div>
                </td>              
                <td className="!border-none">
                  <div className="flex flex-col justify-center items-center gap-1 !border-none">
                  
                  </div>
                </td>
                <td className="!border-none">
                  <div className="flex flex-col justify-center items-center gap-1 !border-none">
                    
                  </div>
                </td>              
              </tr>
            </tbody>

          </table>

           <div className="text-[30px] max-sm:text-[25px] font-semibold max-sm:font-medium w-full sm:max-w-[50rem] font-[Tektur]">{formatT(["home.comparison.summaries.0"])}</div>
            <div className="mt-0 text-[20px] max-sm:text-[16px] w-full md:w-[50%] paragraphText ">
              {formatT(["home.comparison.summaries.1"])}           
            </div>
            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={2} className="text-[16px] md:text-[20px]">
              <Button className="!text-white watchVideoBtn  md:!px-4 md:!py-2 !rounded-[100px] secondaryButton">{formatT(["home.comparison.buttons.open"])}</Button>
              <Button className="!text-black md:!px-4 md:!py-2 !rounded-[100px] !border-2 !border-black tertiaryButton">{formatT(["home.comparison.buttons.expert"])}</Button>
            </Stack>   
      </div>
    
      <div className="howItWorks comparison !bg-[#FFF9F2] useCases gap-0 h-fit max-sm:!py-[3rem] max-sm:!px-[2rem]  ">
            <div className="text-[16px] font-medium uppercase ">{formatT(["home.useCases.sectionTitle"])}</div>
            <div className="md:text-[40px]  text-[25px] font-medium sm:font-semibold md:w-[50%] font-[Tektur] mt-[-1rem]">{formatT(["home.useCases.headline"])}</div>              

            <div
              style={{
                display: 'grid',
                gridAutoFlow: 'row',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(2, 16rem)',
                backgroundColor:"transparent",
                gap: 1,
              }}
              className="md:!grid !hidden !bg-transparent rtl:text-right  "              
            >
              <Item sx={{ gridColumn: '1', gridRow: 'span 2', border:"none" }} className="max-h-[60rem]  !bg-[#FFF9F2] ">
                <div style={{backgroundImage: `url(${laptopGuy})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", borderRadius:'10px' }}
                  className="text-left text-white p-5 h-full max-h-[60rem] !object-center zoom-in  rtl:text-right backgroundImageOverlay w-full flex flex-col justify-between" >
                    <div className="text-[30px] relative z-20 font-normal font-[Tektur] ">{formatT(["home.useCases.cards.0.title"])}</div>
                    <div className="max-sm:text-[16px] relative z-20 text-[16px] font-normal max-w-[18rem]">{formatT(["home.useCases.cards.0.description"])}</div>

                </div>
              </Item>
              <Item sx={{ gridColumn: '2', gridRow: '1', border:"none" }} className="max-h-[30rem]  !bg-[#FFF9F2] ">
                <div style={{backgroundImage: `url(${screenInDesert})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", borderRadius:'10px',}}
                  className="text-left text-white p-5  h-full  relative max-h-[30rem] rtl:text-right !object-center backgroundImageOverlay  w-full flex flex-col justify-between zoom-in overflow-hidden " >
                    <div className=" text-[30px] relative  z-20  font-normal  font-[Tektur]">{formatT(["home.useCases.cards.1.title"])}</div>
                    <div className="text-[16px]  relative  z-20 font-normal">{formatT(["home.useCases.cards.1.description"])}</div>

                </div>
              </Item>
              <Item sx={{ gridColumn: '3', gridRow: '1', border:"none" }} className="max-h-[30rem]  !bg-[#FFF9F2]">
                <div style={{backgroundImage: `url(${redLines})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", borderRadius:'10px',}}
                  className="text-left text-white p-5  h-full  relative max-h-[30rem] rtl:text-right w-full flex flex-col justify-between zoom-in  backgroundImageOverlay " >
                    <div className=" text-[30px] relative  z-20  font-normal font-[Tektur]">{formatT(["home.useCases.cards.2.title"])}</div>
                    <div className="text-[16px] relative  z-20  font-normal">{formatT(["home.useCases.cards.2.description"])}</div>
                </div>
              </Item>
              <Item sx={{ gridColumn: '2/4', gridRow: '2', border:"none" }} className="max-h-[30rem]  !bg-[#FFF9F2]">
                <div style={{backgroundImage: `url(${laughterMeeting})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", borderRadius:'10px',}}
                  className="text-left text-white p-5   h-full  relative max-h-[30rem] rtl:text-right !object-center backgroundImageOverlay  w-full flex flex-col justify-between zoom-in overflow-hidden   " >
                    <div className=" text-[30px] relative z-20 font-normal font-[Tektur]">{formatT(["home.useCases.cards.3.title"])}s</div>
                    <div className="text-[16px] relative z-20 font-normal">{formatT(["home.useCases.cards.3.description"])}</div>
                </div>
              </Item>


            </div>

            
            <div
              style={{
                display: 'grid',
                gridAutoFlow: 'row',
                gridTemplateColumns: 'repeat(1, 1fr)',
                gridTemplateRows: 'repeat(4, 14rem)',
                gap: 1,
              }}
              className="md:!hidden !grid !gap-3  rtl:text-right"              
            >
              <Item sx={{  border:"none" }} className=" !bg-transparent">
                <div style={{backgroundImage: `url(${laptopGuy})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", borderRadius:'10px',}}
                  className="text-left text-white p-5 py-5 gap-[1rem] h-full w-full flex flex-col justify-between rtl:text-right  zoom-in " >
                    <div className="text-[30px] font-normal  relative z-20 font-[Tektur] ">{formatT(["home.useCases.cards.0.title"])}</div>
                    <div className="text-[16px] relative z-20 font-normal ">{formatT(["home.useCases.cards.0.description"])}</div>

                </div>
              </Item>
              <Item sx={{  border:"none" }} className=" !bg-transparent">
                <div style={{backgroundImage: `url(${screenInDesert})`, backgroundRepeat: "no-repeat", backgroundSize: "fit-content", borderRadius:'10px',}}
                  className="text-left text-white p-5 py-5 gap-[1rem] rtl:text-right h-full w-full flex flex-col justify-between zoom-in" >
                    <div className=" text-[30px] font-normal relative  z-20  font-[Tektur]">{formatT(["home.useCases.cards.1.title"])}</div>
                    <div className="text-[16px] font-normal relative  z-20 ">{formatT(["home.useCases.cards.1.description"])}</div>

                </div>
              </Item>
              <Item sx={{  border:"none" }}>
                <div style={{backgroundImage: `url(${redLines})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", borderRadius:'10px',}}
                  className="text-left text-white p-5 py-5 gap-[1rem] rtl:text-right h-full w-full flex flex-col justify-between zoom-in" >
                    <div className=" text-[30px] font-normal relative  z-20  font-[Tektur]">{formatT(["home.useCases.cards.2.title"])}</div>
                    <div className="text-[16px] font-normal relative  z-20 ">{formatT(["home.useCases.cards.2.description"])}</div>
                </div>
              </Item>
              <Item sx={{  border:"none" }}>
                <div style={{backgroundImage: `url(${laughterMeeting})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", borderRadius:'10px',}}
                  className="text-left text-white p-5 gap-[1rem] h-full rtl:text-right w-full flex flex-col justify-between zoom-in" >
                    <div className=" text-[30px] font-normal relative  z-20  font-[Tektur]">{formatT(["home.useCases.cards.3.title"])}</div>
                    <div className="text-[16px] font-normal relative  z-20 ">{formatT(["home.useCases.cards.3.description"])}</div>
                </div>
              </Item>


            </div>
  
            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={2}  className="text-[20px]">
              <Button className="!text-white watchVideoBtn !px-4  !rounded-[100px] secondaryButton">{formatT(["home.useCases.button"])}</Button>
            </Stack>   
      </div>

      <div className="whyHeroesHive font-[Tektur]  mx-auto max-sm:!py-[3rem] max-sm:!px-[3rem]  ">
            <div className="text-[16px] font-medium  md:w-[50%] font-[Poppins] ">{formatT(["home.whyHeroesHive.sectionTitle"])}</div>
            <div className="text-[30px] md:text-[40px] font-medium  md:font-semibold md:max-w-[40rem]">{formatT(["home.whyHeroesHive.headline"])}</div>

            <Stack direction={"row"} justifyContent={"space-between"} fontFamily={"Poppins"} alignItems={"baseline"} gap={5} mt={5} className="paragraphText w-full md:!flex-row !flex-col ">
              
                            <SpringAnimate className="w-full sm:max-w-[25rem] max-md:!items-start max-md:!text-left rtl:text-right">

              <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2} className="w-full sm:max-w-[25rem] max-md:!items-start max-md:!text-left">
                <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center">
                    <Diversity3OutlinedIcon fontSize="medium"/>
                </div>
                <div className="text-[24px] font-semibold rtl:text-right  font-[Tektur]">{formatT(["home.whyHeroesHive.features.vettedSquads.title"])}</div>
                <div className="">{formatT(["home.whyHeroesHive.features.vettedSquads.description"])}</div>

              </Stack>
              </SpringAnimate>

                            <SpringAnimate className="w-full sm:max-w-[25rem] max-md:!items-start max-md:!text-left rtl:text-right">

              <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}  className="w-full sm:max-w-[25rem] max-md:!items-start max-md:!text-left">
                <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center">
                    <ArrowRightAlt fontSize="medium"/>
                </div>
                <div className="text-[24px] font-semibold rtl:text-right  font-[Tektur]">{formatT(["home.whyHeroesHive.features.builtInWorkflow.title"])}</div>
                <div className="">{formatT(["home.whyHeroesHive.features.builtInWorkflow.description"])}</div>

              </Stack>
                            </SpringAnimate>
                            <SpringAnimate className="w-full sm:max-w-[25rem] max-md:!items-start max-md:!text-left rtl:text-right">

              <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}  className="sm:max-w-[25rem] w-full max-md:!items-start max-md:!text-left">
                <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center">
                    <Engineering fontSize="medium"/>
                </div>
                <div className="text-[24px] font-semibold rtl:text-right w-fit text-wrap  font-[Tektur]">{formatT(["home.whyHeroesHive.features.squadManagers.title"])}</div>
                <div className="">{t("home.whyHeroesHive.features.squadManagers.description")}</div>

              </Stack>
                            </SpringAnimate>

                      

            </Stack>

            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}  gap={5} mt={5} className="paragraphText  w-full md:!flex-row font-[Poppins] !flex-col md:!mt-5 !mt-2">
                            <SpringAnimate className="w-full sm:max-w-[25rem] max-md:!items-start max-md:!text-left rtl:text-right">

             <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}   gap={2}  className="w-full sm:max-w-[25rem] max-md:!items-start max-md:!text-left ">
                <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center">
                    <FreeCancellation fontSize="medium"/>
                </div>
                <div className="text-[24px] font-semibold  font-[Tektur]">{formatT(["home.whyHeroesHive.features.flexiblePayment.title"])}</div>
                <div className="">{formatT(["home.whyHeroesHive.features.flexiblePayment.description"])}</div>

              </Stack>
                            </SpringAnimate>

                            <SpringAnimate className="w-full sm:max-w-[25rem] max-md:!items-start max-md:!text-left rtl:text-right">

             <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}  gap={2}  className=" w-full md:max-w-[25rem] max-md:!items-start max-md:!text-left ">
                <div className="bg-[#FFDFBC] !text-[#FF8200] w-[3rem] h-[3rem] rounded-lg flex flex-col justify-center items-center">
                    <GppGoodOutlined fontSize="medium"/>
                </div>
                <div className="text-[24px] font-semibold  font-[Tektur]">{formatT(["home.whyHeroesHive.features.securedPayment.title"])}</div>
                <div className="">{formatT(["home.whyHeroesHive.features.securedPayment.description"])}</div>

              </Stack>
                            </SpringAnimate>

            </Stack>


            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={2} mt={5} className="text-[20px] max-md:!mt-3">
              <Button className="!text-white watchVideoBtn  !px-4 !py-2 !rounded-[100px] secondaryButton">{formatT(["home.whyHeroesHive.ctaButton"])}</Button>
            </Stack>

      </div>  

      <div className="userEndorsements  max-md:!px-[2rem] ">
        <div className="userEndorsementCard  max-sm:!py-[3rem] !py-[80px] max-sm:!px-[2rem] ">
            <div className="text-[29px] sm:text-[40px] sm:font-medium font-[Tektur]">{formatT(["home.endorsement.title"])}</div>
            <div className="mt-1  sm:max-w-[35rem] paragraphText">
              {formatT(["home.endorsement.description"])}           
            </div>

            <Stack  gap={2}  justifyContent={"center"} alignItems={"center"}  className="  flex !flex-col md:!flex-row w-full">
              <div className="insideCard gap-2 w-full">
                <FormatQuoteIcon className="rotate-180 !text-[5rem]  text-[#FF8200]" fontSize="large"/>

                <div className="max-w-[45rem]">
                  {formatT(["home.endorsement.quote"])}
                </div>

                <Stack direction={"row"} gap={2} justifyContent={"center"} alignItems={"center"} mt={1}  >
                  <img src={userImage} draggable={false}/>
                    <Stack direction={"column"} gap={0}>
                        <div>{formatT(["home.endorsement.name"])}</div>
                      <div>{formatT(["home.endorsement.location"])}</div>

                    </Stack>
                </Stack>
              </div>
              <div className="tertiaryButtonWhite flex flex-row justify-center  items-center   md:flex-col md:!w-[3rem] md:!h-[5rem] md:rounded-2xl rounded-2xl w-[4rem]" >
                <IconButton className="!p-0 !rounded-full !text-inherit md:!block !hidden"><ArrowUpwardIcon/></IconButton>
                <IconButton className="!p-0  !rounded-full !text-inherit md:!block !hidden"><ArrowDownwardIcon/></IconButton>
                <IconButton className="!p-0 !rounded-full !text-inherit md:!hidden !block"><ArrowLeftIcon/></IconButton>
                <IconButton className="!p-0  !rounded-full !text-inherit md:!hidden !block"><ArrowRightIcon/></IconButton>
              </div>
            </Stack>

          </div>    

        </div>

      <div className="whyHeroesHive dateTimeSection gap-0 max-sm:!py-[3rem] max-sm:!px-[2rem]">
            <div className="text-[30px] mw:text-[40px] max-sm:text-[25px] font-medium sm:font-semibold w-full max-w-[50rem] font-[Tektur]">
                {formatT(["home.cta.headline"])}
              </div>
            <div className="max-md:text-[20px] text-[20px] mb-0 max-w-[50rem] ">{formatT(["home.cta.subheadline"])}</div>
            <div className=" max-md:text-[16px] text-[20px] mb-1 md:w-[50%] paragraphText ">{formatT(["home.cta.note"])}</div>

            <div className="datepickerComponent !rounded-[8px] text-left pt-4">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className="px-5 font-semibold">
                  {formatT(["home.cta.selectDate"])}

                </div>
                  <StaticDatePicker displayStaticWrapperAs="desktop"/>
              </LocalizationProvider>
            </div>
        
      </div>  

      </div>
  );
}

export default App;
