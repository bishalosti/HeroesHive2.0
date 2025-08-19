    import { Button, Grid, Stack } from "@mui/material"
    import { NavBar } from "../../components/layouts/navbar"
    import Diversity3Icon from '@mui/icons-material/Diversity3';
    import RouteIcon from '@mui/icons-material/Route';
    import './howItWorks.css';
    import image1 from '../../assets/smallGridImages/0a00d0c6bca04ac7f22fb69e5a528d62dba095cf.jpg';
    import image2 from '../../assets/smallGridImages/3a85ad05f1104ab85031c2dff624ec175ff64d5d (1).png';
    import image3 from '../../assets/smallGridImages/fda76ed32be16766c106da8926e05489bd543c6e copy.jpg'
    import image4 from '../../assets/smallGridImages/6b18b26bd15d11c52d6ffad2962955fefdeda7ee.jpg';
    import image5 from '../../assets/smallGridImages/4a2be75cf77a3b0cfb7ce968610156bdaa49e183.jpg';
    import image6 from '../../assets/smallGridImages/8648468267d20d7afa3c3c9c79f085aef59f3ee6 (1).png';
    import image7 from '../../assets/smallGridImages/905196dd0f2f96a022edfdd16c4785337b536725.jpg';
    import image8 from '../../assets/smallGridImages/ad8b48823b18d2f3e6b3c5471359217b37e8f15b (1).png';
    import image9 from '../../assets/smallGridImages/fda76ed32be16766c106da8926e05489bd543c6e.jpg';
    import image10 from '../../assets/smallGridImages/66ca067a517d6e767e767f86bcfe848307d7947b.jpg';
    import image11 from '../../assets/smallGridImages/24bc0a5a0e538a0749c7a7e627a4da92f2322efd.jpg';
    import image12 from '../../assets/smallGridImages/d2a1e5dcd80fba0e8ce6a3cecb541e992eb4cc5f.jpg';

    import one from '../../assets/howItWorks/blurScreen.jpg';
    import two from '../../assets/howItWorks/nightMeeting.jpg';
    import three from '../../assets/howItWorks/redFigures.jpg';
    import four from '../../assets/howItWorks/tooCloseToTheScreen.jpg';
    import five from '../../assets/howItWorks/typingwithCoffee.png';
    import six from '../../assets/howItWorks/astronaut.png';

    import { PopularCarasoul } from "../../components/carasouel/popularPack";
import { FAQComponent } from "../../components/FAQ";
import { MoveOnScroll } from "../../components/animations/moveOnScrollAnimate";
import { EnterFromBottomAnimate } from "../../components/animations/enterFromBottomAnimate";
import { formatT } from "../../util";
import { useTranslation } from "react-i18next";


    


    export const HowItWorks = () => {

        const FAQData:{question:JSX.Element, answer:JSX.Element}[] = [
            {question: formatT(["howItWorks.faq.items.0.question"]), answer:formatT(["howItWorks.faq.items.0.answer"]), },
            {question: formatT(["howItWorks.faq.items.1.question"]), answer:formatT(["howItWorks.faq.items.1.answer"]), },
            {question: formatT(["howItWorks.faq.items.2.question"]), answer:formatT(["howItWorks.faq.items.2.answer"]), },


        ]
        const steps = [
    {
        id: "01",
        title: "Choose a Pipeline",
        desc: "We’ve simplified creative and marketing projects into clear, ready-made workflows — from branding to websites to ad campaigns. You pick the goal. We handle the process.",
        img: two, 
        imgLeft: false,
    },
    {
        id: "02",
        title: "Match with a Squad",
        desc: "Once you choose a pipeline, we assign a fully vetted Squad — a remote team built specifically for your needs. Every Squad is led by a Squad Manager who ensures quality, communication, and on-time delivery.",
        img: three,
        imgLeft: true,
    },
    {
        id: "03",
        title: "Review Scope & Start",
        desc: "We walk you through the project plan, scope, and timeline. You’ll approve deliverables before work begins.",
        img: one,
        imgLeft: false,
    },
    {
        id: "04",
        title: "Execute & Track Everything",
        desc: "Work begins inside your private workspace (your Hive).You’ll see progress, leave feedback, and receive updates via your Activity Log — no chasing emails or managing freelancers.",
        img: five,
        imgLeft: true,
    },
    {
        id: "05",
        title: "Review & Launch",
        desc: "Your project is delivered with all final files and editable source files. Need help post-launch? We offer follow-up support and long-term Squad options.",
        img: four,
        imgLeft: false,
    },
    ];

    const {i18n} = useTranslation()

        const smallGridImages = [image1, image2, image4, image5, image6, image7, image8, image9, image10]
        
        return (
            <div className="text-center text-white mb-[3rem] "> 
                
                <div className=" bg-[url(./assets/howItWorks/topBannerImage.png)] bg-no-repeat bg-cover  h-fit !overflow-hidden relative  bg-center ">

                    <NavBar/>
                    <div className="howItWorks-topBlur "/>
                    <div className=" flex flex-col md:px-[4rem] px-[2rem] box-border md:!py-[6rem] md:!pb-[8rem] max-sm:!pb-[8rem] !py-[4rem] rtl:text-right !pb-[6rem] "> 
                        <div className="text-[28px] md:font-semibold text-medium md:text-[50px] max-w-[38rem] md:text-left z-10 font-[Tektur] rtl:text-right">
                            {formatT(["howItWorks.hero.title"])}
                            <div className="paragraphText max-md:text-[14px] mt-[1rem] font-light font-[Poppins] rtl:text-right">
                            {formatT(["howItWorks.hero.description"])}
                                </div>
                        </div>

                        <div className="md:py-[1rem] md:m-0 mt-4  m-auto flex md:flex-row  gap-3 max-md:!items-center">
                            <Button className="primaryButton  max-md:!w-fit">{formatT(["howItWorks.hero.buttons.startProject"])}</Button>
                            <Button className="secondaryButton  max-md:!w-fit">{formatT(["howItWorks.hero.buttons.scheduleConsultation"])}</Button>
                        </div> 
                    </div>
                            
                </div>

                <div className=" bg-white max-sm:!py-[3rem] max-sm:!px-[2rem]  text-black flex flex-col md:!px-[4rem] px-[2rem] w-full box-borde gap4 r md:!py-[6rem] py-[2rem] justify-center items-center "> 
                    <div className="md:w-[90%] text-[24px] xl:w-[70%] md:text-[32px] mt-[1rem] font-medium font-[Tektur]">
                       {i18n.language === "en" ? <> Heroes Hive isn’t a freelance marketplace or a traditional agency.
                        We’re a <span className="text-[#FF8200]">smart execution platform</span> that gives you structured workflows (Pipelines) 
                        <span> <RouteIcon className="border-[#000000] rounded-xl ] text-white px-1 bg-[#FF8200] rotate-90"/> </span> 
                        and the remote teams (Squads) <span > <Diversity3Icon className="border-[#000000] rounded-xl bg-[#000000] text-white px-1  " fontSize="medium"/> </span>
                        to <span className="text-[#FF8200]">get the job done</span> — no full-time hires, no confusion.
                        </> : 
                        <>
                            Heroes Hive ليست سوقًا للمستقلين ولا وكالة تقليدية.  
                            نحن  <span className="text-[#FF8200]">منصة تنفيذ ذكية</span> تقدم لك سير عمل منظم (Pipelines)  
                            <span> <RouteIcon className="border-[#000000] rounded-xl text-white px-1 bg-[#FF8200] rotate-90" /> </span>  
                            وفرق عمل عن بُعد (Squads)  
                            <span> <Diversity3Icon className="border-[#000000] rounded-xl bg-[#000000] text-white px-1" fontSize="medium" /> </span>  
                            لـ <span className="text-[#FF8200]">إنجاز العمل بكفاءة</span> — بدون توظيف دائم، وبدون تعقيد.
                        </>}
                    </div>

                    <div className="flex flex-col justify-center items-center md:w-[70%] xl:w-[60%] md:h-[fit] !mt-[4rem]  rounded-lg bg-[#FF8200] px-[5rem]  md:px-[2rem] lg:px-[7rem] xl:px-[8rem] mw:px-[10rem]"  >
                        <Grid container spacing={1} overflow={"hidden min-h-full min-w-[20px]"}>
                        {smallGridImages.map((img) => {
                            return (<Grid size={4} className={"overflow-hidden"}>
                            <img src={img} draggable={false} className="min-h-full min-w-full object-cover aspect-square imageZoomIn hover:!scale-125"/>
                            </Grid>)
                        })}
                        
                        </Grid>
                    </div>  

                    <div className="md:w-[90%] xl:w-[70] text-[28px] md:text-[40px]  mt-[4rem] font-medium font-[Tektur]">
                       {formatT(["howItWorks.stepsSection.title"])}
                    </div>

            

                <div className="relative  mx-auto py-10 sm:py-20">


                {/* Vertical line */}
                <div className="absolute left-1/2 xl:!bottom-[25rem] top-[3rem] lg:!bottom-[19rem] bottom-[20rem] md:bottom-[15rem] w-1 bg-orange-500 transform -translate-x-1/2"></div>

                {/* Step Items */}
                <div className="flex flex-col space-y-1 md:space-y-24 text-left ">
                    {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`relative flex flex-col md:flex-row max-md:items-center gap-[3rem] ${
                            step.imgLeft ? "md:flex-row-reverse" : ""
                        }`}
                        >
                        {/* Step Number */}
                        <div className=" md:absolute left-1/2 md:-translate-x-1/2  z-20 ">
                            <div className="w-[1rem] h-[1rem] bg-[#FF8200] font-medium text-white border-[#FFD7AD] border-[0.5rem] p-[1rem] flex justify-center items-center rounded-full">
                                {step.id}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="w-full md:w-1/2 md:px-4">
                        
                            <img
                            src={step.img}
                            draggable={false}
                            alt={step.title}
                            className="rounded-lg shadow-lg object-cover aspect-video "
                            />
                        </div>

                        {/* Text Content */}
                        <div className="w-full md:w-1/2 md:px-4 mt-1 md:mt-0 md:block hidden bg-white ">
                            <EnterFromBottomAnimate>
                                <h3 className="text-[20px] sm:text-[25px] font-semibold md:mb-3 mb-2  font-[Tektur]">{formatT([`howItWorks.stepsSection.steps.${index}.title`])}</h3>
                                <p className="text-gray-600 paragraphText">{formatT([`howItWorks.stepsSection.steps.${index}.description`])}</p>
                            </EnterFromBottomAnimate>
                        </div>

                        <div className="w-full md:w-1/2 md:px-4 mt-1 md:mt-0 bg-white md:hidden block ">
                            <MoveOnScroll scrollMaxX={10} scrollMinX={-10} >
                                <h3 className="text-[20px] sm:text-[25px] font-semibold  mb-3 mt-3 z-10  font-[Tektur]">{formatT([`howItWorks.stepsSection.steps.${index}.title`])}</h3>
                                <p className="text-gray-600 paragraphText">{formatT([`howItWorks.stepsSection.steps.${index}.description`])}</p>
                            </MoveOnScroll>
                        </div>
                        </div>

                    ))}
                </div>


                </div>

                    <div className=" md:w-[50%] md:text-[30px] !w-full  text-[20px]  font-[Tektur] font-medium">
                       {formatT([`howItWorks.summary.text`])}
                    </div>
                        <div className="md:py-[1rem] md:m-0 mt-4  m-auto flex flex-row   gap-3">
                            <Button className="secondaryButton  !w-fit">
                       {formatT([`howItWorks.summary.buttons.browsePipeline`])}
                            </Button>
                            <Button className="tertiaryButton !text-black  !w-fit">
                       {formatT([`howItWorks.summary.buttons.scheduleConsultation`])}
                            </Button>
                        </div> 



                </div>

                <div className="howItWorks popularPacks overflow-hidden max-sm:!py-[3rem] max-sm:!px-[2rem] !px-[2rem]  sm:!px-[4rem] box-border sm:!py-[6rem] !py-[4rem]">
                    <div className="flex flex-col justify-center md:items-start items-center w-full" >
                        <div className="text-[16px] md:text-[20px] mb-3 font-medium uppercase ">
                       {formatT([`howItWorks.popularPacks.label`])}
                        </div>
                        <div className="text-[28px] md:text-[40px] md:font-semibold font-medium">
                            {formatT([`howItWorks.popularPacks.title`])}
                        </div>
                        <Stack direction={"row"} gap={5} justifyContent={"space-between"} alignItems={"flex-end"} className="flex !flex-col w-full md:!flex-row !items-center">
                            <div className="mt-3 paragraphText md:w-[50%] md:text-left  rtl:text-right ">
                            {formatT([`howItWorks.popularPacks.description`])}
                            </div>
                            <Button className="!text-white secondaryButton  !px-4 !py-2 !rounded-[100px] md:!block !hidden">{formatT([`howItWorks.popularPacks.buttons.browseAllServicesDesktop`])}</Button>

                        </Stack>
                     <PopularCarasoul/>
                    <Button className="!text-white secondaryButton  !px-4 !py-2 !rounded-[100px] w-fit md:!hidden block">{formatT([`howItWorks.popularPacks.buttons.browseAllServicesDesktop`])}</Button> 

                       
                    </div>   
                   
                </div>

                <FAQComponent props={FAQData}/>


                <div className="flex md:flex-row flex-col w-full h-[40rem]  md:pl-[4rem] box-border bg-[#FF8200]  justify-between items-center ">
                    <div className=" md:py-[6rem] py-[4rem] p-[2rem]">
                        <div className=" text-semibold text-[30px] max-sm:text-[25px] max-sm:font-medium text-left w-full font-[Tektur] md:w-[50%] mb-2 xl:w-[100%]">
                            {formatT([`howItWorks.finalCTA.title`])}
                            </div>  
                        <div className=" text-semibold paragraphText max-sm:font-normal text-left w-full  md:w-[50%] xl:w-[100%]">
                        {formatT([`howItWorks.finalCTA.description`])}</div>     
                    <div className="md:py-[1rem] w-full m-auto flex flex-row mt-5 items-center  align-center gap-3">
                        <Button className="startAProjectButton md:!text-inherit w-fit ">{formatT([`howItWorks.finalCTA.buttons.startProject`])}</Button>
                        <Button className="secondaryButton md:!text-inherit w-fit ">{formatT([`howItWorks.finalCTA.buttons.scheduleConsultation`])}</Button>
                    </div>            
                    </div>
                    <div className=" w-full md:w-[50%] md:py-[6rem] py-[4rem] h-full overflow-hidden !bg-[url(./assets/howItWorks/astronaut.png)]  !bg-cover bg-center bg-no-repeat z-40" >
                    </div>

                </div>

            </div>
        )
    }