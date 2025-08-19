import Logo from '../../assets/Logo.svg'
import LanguageIcon from '@mui/icons-material/Language';
import React, { useEffect } from 'react';
import { Link, Outlet, redirect, useLocation, useNavigate, useNavigation } from 'react-router';
import { Button, Stack, Container, Typography, Box, IconButton } from '@mui/material';
import { Squash as Hamburger } from "hamburger-react";
import SideDrawer from './sidebar';

import DesignServicesIcon from '@mui/icons-material/DesignServices';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import VibrationIcon from '@mui/icons-material/Vibration';
import CampaignIcon from '@mui/icons-material/Campaign';
import ComputerIcon from '@mui/icons-material/Computer';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import ApiIcon from '@mui/icons-material/Api';
import { ServicesDropdown } from './dropdownMenus/servicesDropdown';
import { UseCaseDropdown } from './dropdownMenus/useCaseDropdown';
import { ExpandLess, ExpandMore, FiberManualRecord } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { formatT } from '../../util';
import * as motion from "motion/react-client"



export const NavBar = () => {

  const { i18n } = useTranslation();
    const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng, () => {
      return window.location.reload()
    });
  };


  useEffect(() => {
document.body.setAttribute('dir', i18n.language === "en" ? "ltr" : "rtl");
  }, [i18n.language])


const routes: { to: string; name: string;  key:string; subRoutes?:{ to: string; name: string, description?:string, icon?:React.ReactNode }[] }[] = 

i18n.language === "en"?
[
    {
        to: "/services",
        name: "Services",
        key: "Services",
        subRoutes: [
    { icon:<ApiIcon fontSize='small'/>,to: "/services/branding-and-identity", name: "Branding & identity", description:"Logo design, brand guidelines, business kits, and pitch decks" },
    { icon:<DesignServicesIcon  fontSize='small'/>,to: "/services/illustration-design", name: "Illustration Design" ,  description:"Character design, product illustrations, campaign artwork"},
    { icon:<VideoLibraryIcon  fontSize='small'/>,to: "/services/social-media-creatives", name: "Social Media Creatives ", description:"Scroll-stopping content, templates, and branded visuals for all platforms" },
    { icon:<VibrationIcon  fontSize='small'/>,to: "/services/content-production", name: "Content Production", description:"Explainer videos, reels, short-form content, and motion graphics" },
    { icon:<CampaignIcon  fontSize='small'/>,to: "/services/marketing-and-ads", name: "Marketing & Ads", description:"Ad creatives, landing pages, email campaigns, and growth visuals" }, 
    { icon:<ComputerIcon  fontSize='small'/>, to: "/services/website-and-online-stores", name: "Websites & Online Stores", description:"UX/UI design, responsive websites, Shopify, WooCommerce" }, 
    { icon:<ModelTrainingIcon  fontSize='small'/> ,to: "/services/concept-design", name: "Concept Design", description:"Visual development for brands, IPs, animations, and presentations" }, 

  ],
    },
    {
        to: "/how-it-works",
        name: "How It Works",
        key: "How It Works",

    },
    {
        to: "/why-us",
        name: "Why Us",
        key: "Why Us",

    },
    {
        to: "/use-cases",
        name: "Use Cases",
        key: "Use-Cases",
        subRoutes: [
            { to: "/use-cases/online-stores", name: "Online Stores", description:"From brand to store setup to marketing - all in one place."},
            { to: "/use-cases/marketing-agencies", name: "Marketing Agencies", description:"From brand to store setup to marketing - all in one place."},
            { to: "/use-cases/app-tech-startups", name: "App & Tech Startups", description:"From brand to store setup to marketing - all in one place."},
            { to: "/use-cases/coaches-consultants", name: "Coaches & Consultants", description:"From brand to store setup to marketing - all in one place."},
        ],
    },
    {
        to: "/pricing",
        name: "Pricing",
        key: "Pricing",
    },
    {
        to: "/blog",
        name: "Blog",
        key: "Blog",

    },
    {
        to: "/contact",
        name: "Contact",
        key: "Contact",
    },
] : 
[
  {
    to: "/services",
    name: "الخدمات",
    key: "Services",

    
    subRoutes: [
      {
        icon: <ApiIcon fontSize="small" />,
        to: "/services/branding-and-identity", 
        name: "الهوية والعلامة التجارية",
        description: "تصميم الشعارات، دليل الهوية، حزم الأعمال، وعروض المستثمرين",
      },
      {
        icon: <DesignServicesIcon fontSize="small" />,
        to: "/services/illustration-design",
        name: "تصميم الرسوم التوضيحية",
        description: "تصميم الشخصيات، الرسوم التوضيحية للمنتجات، والرسومات الإبداعية للحملات",
      },
      {
        icon: <VideoLibraryIcon fontSize="small" />,
        to: "/services/social-media-creatives",
        name: "إبداعات وسائل التواصل الاجتماعي",
        description: "محتوى يلفت الانتباه، قوالب، وتصاميم مرئية مخصصة لجميع المنصات",
      },
      {
        icon: <VibrationIcon fontSize="small" />,
        to: "/services/content-production",
        name: "إنتاج المحتوى",
        description: "فيديوهات توضيحية، مقاطع قصيرة، محتوى سريع، ورسوم متحركة",
      },
      {
        icon: <CampaignIcon fontSize="small" />,
        to: "/services/marketing-and-ads",
        name: "التسويق والإعلانات",
        description: "تصاميم للإعلانات، صفحات هبوط، حملات بريد إلكتروني، ورسومات للنمو",
      },
      {
        icon: <ComputerIcon fontSize="small" />,
        to: "/services/website-and-online-stores",
        name: "المواقع والمتاجر الإلكترونية",
        description: "تصميم UX/UI، مواقع متجاوبة، شوبيفاي، ووكومرس",
      },
      {
        icon: <ModelTrainingIcon fontSize="small" />,
        to: "/services/concept-design",
        name: "تصميم المفاهيم",
        description: "تطوير بصري للعلامات، والملكية الفكرية، والرسوم المتحركة والعروض التقديمية",
      },
    ],
  },
  {
    to: "/how-it-works",
    name: "كيف نعمل",
        key: "How It Works",

  },
  {
    to: "/why-us",
    name: "لماذا نحن",
        key: "Why Us",

  },
  {
    to: "/use-cases",
        key: "Use-Cases",
    name: "استخدامات المنصة",
    subRoutes: [
      {
        to: "/use-cases/online-stores",
        name: "المتاجر الإلكترونية",
        description: "من العلامة التجارية إلى إعداد المتجر والتسويق - كل ذلك في مكان واحد."
      },
      {
        to: "/use-cases/marketing-agencies",
        name: "وكالات التسويق",
        description: "من العلامة التجارية إلى إعداد المتجر والتسويق - كل ذلك في مكان واحد."
      },
      {
        to: "/use-cases/app-tech-startups",
        name: "تطبيقات وشركات التكنولوجيا",
        description: "من العلامة التجارية إلى إعداد المتجر والتسويق - كل ذلك في مكان واحد."
      },
      {
        to: "/use-cases/coaches-consultants",
        name: "المدربون والاستشاريون",
        description: "من العلامة التجارية إلى إعداد المتجر والتسويق - كل ذلك في مكان واحد."
      },
    ],
  },
  {
    to: "/pricing",
    name: "الأسعار",
        key: "Pricing",
  },
  {
    to: "/blog",
    name: "المدونة",
        key: "Blog",
  },
  {
    to: "/contact",
    name: "تواصل معنا",
        key: "Contact",
  },
];



  const NavMobile = () => {
        const [isOpen, setOpen] = React.useState(false);
        const ref = React.useRef(null);


        return (
            <div ref={ref} className="xl:hidden flex flex-row justify-center items-center  w-full">
            {!isOpen &&  
              <div className='hover:!text-[#c2c2c2] cursor-pointer' onClick={() =>{changeLanguage(i18n.language === "en" ? "ar" : "en") }}>
                {i18n.language == "en" ?("AR") : "EN"}
                </div>
            }

            <Hamburger toggled={isOpen} size={20} toggle={setOpen}  />

            {isOpen && (
              
                <SideDrawer isOpen={isOpen} setIsOpen={setOpen}/>
            )}
            </div>
        );
    };


    const [active, setActive] = React.useState("/");
    const location = useLocation();
    const navigate = useNavigate()
    const [dropdownOpen, setDropdownOpen] = React.useState<null | string>(null);


const [showMegaMenu, setShowMegaMenu] = React.useState(false);
const megaMenuRef = React.useRef<HTMLDivElement>(null);

function preventScroll(e:any) {
  e.preventDefault();
}



useEffect(() => {
  if (dropdownOpen) {
    document.body.style.overflowY = 'scroll';
    document.body.style.overscrollBehavior = 'none';

    document.body.addEventListener('wheel', preventScroll, { passive: false });
    document.body.addEventListener('touchmove', preventScroll, { passive: false });
  } else {
    document.body.style.overflowY = 'scroll';
    document.body.style.overscrollBehavior = '';

    document.body.removeEventListener('wheel', preventScroll);
    document.body.removeEventListener('touchmove', preventScroll);
  }

  return () => {
    document.body.style.overflowY = '';
    document.body.style.overscrollBehavior = '';
    document.body.removeEventListener('wheel', preventScroll);
    document.body.removeEventListener('touchmove', preventScroll);
  };
}, [dropdownOpen]);



    React.useEffect(() => {
        setActive(location.pathname)
        console.log(location.pathname.split("/"))
    },[location])

    useEffect(() => {
  if (showMegaMenu) {
    document.body.style.overflow = 'hidden';
    
  } else {
    document.body.style.overflow = 'auto';
    
  }

  return () => {
    document.body.style.overflow = 'auto';
  };
}, [showMegaMenu]);

    return (
      <>
      <nav className="flex flex-row bg-transparent justify-between h-[92px] w-full py-2 md:px-[4rem] px-[2rem] items-center text-white z-50">
            <img src={Logo} draggable={false} className=" w-[11rem] md:w-[12rem] z-10 cursor-pointer"  onClick={() => {
                return navigate('/')
            }}/>

            <div className="flex-row justify-between text-nowrap items-center mw:max-w-[50rem] xl:max-w-[35rem] lg:max-w-[23rem]  overflow-auto noScrollbar gap-2 z-[2000] xl:!flex !hidden relative">
    {routes.map((route) =>
        route.subRoutes ? (
        <motion.div onHoverStart={()=>{
           setDropdownOpen("open")
        }}  onHoverEnd={()=>{
           setDropdownOpen(null)
        }} transition={{}} whileHover={route.key ==="Services" ? ["activeService", "active"] : ["activeUseCase", "active"]} initial={"rest"} key={route.name} className="relative">
        <button

          className={active.split("/").includes(route.key.toLowerCase()) ? "navbarItems navbarItemsActive w-full" : "navbarItems w-full"}
        >
          <div className=" flex-row hidden  items-center rtl:flex  ">

          <motion.span variants={{rest:{color:"transparent"}, active:{color:"white"}}} className="font-[Tektur] !text-xs"><FiberManualRecord sx={{fontSize:"10px"}}/></motion.span>
          <motion.span  variants={{rest:{x:"2px"}, active:{"x":"-5px"}}} className="font-[Tektur] ">{route.name} </motion.span>
           {(route.key ==='Services' &&
            <motion.span variants={{rest:{transform:"rotate(0deg)",}, active:{transform:"rotate(180deg)"}}}>
              <ExpandMore/>
            </motion.span>)} 
           {(route.key === "Use-Cases" && 
             <motion.span variants={{rest:{transform:"rotate(0deg)",}, active:{transform:"rotate(180deg)"}}}>
              <ExpandMore/>
            </motion.span>)} 


          </div>

          <div className="flex flex-row  items-center rtl:hidden gap-1 ">
                  <motion.span variants={{rest:{color:"transparent"}, active:{color:"white"}}} className="font-[Tektur] !text-xs"><FiberManualRecord sx={{fontSize:"10px"}}/></motion.span>
                  <motion.span  variants={{rest:{x:"-2px"}, active:{"x":"5px"}}} className="font-[Tektur] ">{route.name}</motion.span>
           {(route.key ==='Services' &&
            <motion.span variants={{rest:{transform:"rotate(0deg)",}, active:{transform:"rotate(180deg)"}}}>
              <ExpandMore/>
            </motion.span>)} 
           {(route.key === "Use-Cases" && 
             <motion.span variants={{rest:{transform:"rotate(0deg)",}, active:{transform:"rotate(180deg)"}}}>
              <ExpandMore/>
            </motion.span>)} 
          </div>

        </button>

        <motion.div variants={{"activeService":{display:"block"}, "rest":{display:"none"}}}>
        <div
          ref={megaMenuRef}
          className="fixed top-[92px]  left-1/2 transform -translate-x-1/2 w-full max-md:h-[calc(100vh-92px)] max-w-[2000px] justify-center self-center mx-auto bg-[#FFF9F2] text-left text-black py-8 z-[2000] overflow-hidden"
        >
          <div className="w-full h-full px-[4rem] py-[2rem] pb-[1rem]  overflow-auto noScrollbar">

              <ServicesDropdown routes={routes} />
          </div>
        </div>

        {/* Background overlay */}
        <div
          className="fixed top-[92px] left-0 w-full h-[calc(100vh-92px)] bg-black bg-opacity-60 z-[1999]"
        />
      </motion.div>

      <motion.div variants={{"activeUseCase":{display:"block"}, "rest":{display:"none"}}}>
        <div
          ref={megaMenuRef}
          className="fixed top-[92px]  left-1/2 transform -translate-x-1/2 w-full max-md:h-[calc(100vh-92px)] max-w-[2000px] justify-center self-center mx-auto bg-[#FFF9F2] text-left text-black py-8 z-[2000] overflow-hidden"
        >
          <div className="w-full h-full px-[4rem] py-[2rem] pb-[1rem]  overflow-auto noScrollbar">
              <UseCaseDropdown routes={routes}/>
            

           
          </div>
        </div>

        {/* Background overlay */}
        <div
          className="fixed top-[92px] left-0 w-full h-[calc(100vh-92px)] bg-black bg-opacity-60 z-[1999]"
          onClick={() => setDropdownOpen(null)}
        />
      </motion.div>

        </motion.div>
        ) : (
          <motion.div whileHover={[ "active"]} initial={"rest"} className=' w-fit navbarItems '>
            <Link
                key={route.to}
                to={route.to}
                className={route.to === active ? "navbarItems navbarItemsActive w-fit" : "navbarItems w-fit"}
            >
                        <div className=" flex-row hidden  items-center rtl:flex  ">

          <motion.span variants={{rest:{color:"transparent"}, active:{color:"white"}}}  className="font-[Tektur] !text-xs"><FiberManualRecord sx={{fontSize:"10px"}}/></motion.span>
          <motion.span  variants={{rest:{x:"2px"}, active:{"x":"-5px"}}} className="font-[Tektur] ">{route.name} </motion.span>



          </div>

          <div className="flex flex-row  items-center rtl:hidden gap-1 ">
                  <motion.span variants={{rest:{color:"transparent"}, active:{color:"white"}}}  className="font-[Tektur] !text-xs"><FiberManualRecord sx={{fontSize:"10px"}}/></motion.span>
                  <motion.span variants={{rest:{x:"-10px"}, active:{"x":"5px"}}} className="font-[Tektur] ">{route.name}</motion.span>
          </div>
            </Link>
          </motion.div>

        )
    )}

      
    
</div>


            <div className="  flex-row justify-evenly items-center gap-5 xl:!flex !hidden z-[2000]">
                <div className='flex flex-row gap-1  hover:!text-[#c2c2c2] cursor-pointer' onClick={() => {
                  changeLanguage(i18n.language === "en" ? "ar" : "en");   
                }}>
                    {i18n.language === "en" ? "Arabic" : "English"}
                </div>
                <Button className="loginBtn" >{formatT(["loginBtn"])}</Button>
                <Button className="getStartedNav" >{formatT(["getStartedBtn"])}</Button>
            </div>
            
            



      <div className='max-xl:block hidden'>
        <NavMobile/>

      </div>


        </nav>

      </>
        
    )
}