import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Logo from '../../assets/Logo.svg'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import DesignServicesIcon from '@mui/icons-material/DesignServices';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import VibrationIcon from '@mui/icons-material/Vibration';
import CampaignIcon from '@mui/icons-material/Campaign';
import ComputerIcon from '@mui/icons-material/Computer';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import ApiIcon from '@mui/icons-material/Api';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Link, useLocation, useNavigate } from 'react-router';
import CloseIcon from '@mui/icons-material/Close';
import { ServicesDropdown } from './dropdownMenus/servicesDropdown';
import { UseCaseDropdown } from './dropdownMenus/useCaseDropdown';
import { UseCaseDropdownMobile } from './dropdownMenus/useCaseDropdownMobile';
import { ServicesDropdownMobile } from './dropdownMenus/serviceDropdownMobile';
import { useTranslation } from 'react-i18next';
import * as motion from "motion/react-client"
import { FiberManualRecord } from '@mui/icons-material';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface SiderProps {
    isOpen:boolean;
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

export default function SideDrawer({isOpen, setIsOpen} : SiderProps) {


  const { i18n } = useTranslation();
    const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  };

  const {pathname} = useLocation();

   const [active, setActive] = React.useState("/");
    const location = useLocation();

    React.useEffect(() => {
        setActive(location.pathname)
        console.log(location.pathname)
    },[location])


  const dropDownRoutes: { to: string; name: string;  key:string; subRoutes?:{ to: string; name: string, description?:string, icon?:React.ReactNode }[] }[]  = i18n.language === "en"?
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
  const [isOpenForServices, setIsOpenForServices] = React.useState<boolean>(false)
    const [isOpenForCases, setIsOpenForCases] = React.useState<boolean>(false)

  const navigate = useNavigate();

  const routes =i18n.language === "en"? [
    { component: <Link to={"/services"} onClick={(e) => { e.preventDefault() }}>Services</Link>, name: "Services", to: "/services", key: "Services" },
    { component: <Link to={"/how-it-works"} className='!p-0 w-full !m-0'>How It Works</Link>, name: "How It Works", to: "/how-it-works", key: "How-It-Works" },
    { component: <Link to={"/why-us"}>Why Us?</Link>, name: "Why Us?", to: "/why-us", key: "Why-Us" },
    { component: <Link to={"/use-cases"} onClick={(e) => { e.preventDefault() }}>Use Cases</Link>, name: "Use Cases", to: "/use-cases", key: "Use-Cases" },
    { component: <Link to={"/pricing"}>Pricing</Link>, name: "Pricing", to: "/pricing", key: "Pricing" },
    { component: <Link to={"/blog"}>Blog</Link>, name: "Blog", to: "/blog", key: "Blog" },
    { component: <Link to={"/contact"}>Contact</Link>, name: "Contact", to: "/contact", key: "Contact" },
  ] : [
    { component: <Link to={"/services"} onClick={(e) => { e.preventDefault() }}>الخدمات</Link>, name: "الخدمات", to: "/services", key: "Services" },
    { component: <Link to={"/how-it-works"} className='!p-0 w-full !m-0'>كيف نعمل</Link>, name: "كيف نعمل", to: "/how-it-works", key: "How-It-Works" },
    { component: <Link to={"/why-us"}>لماذا نحن؟</Link>, name: "لماذا نحن؟", to: "/why-us", key: "Why-Us" },
    { component: <Link to={"/use-cases"} onClick={(e) => { e.preventDefault() }}>حالات الاستخدام</Link>, name: "حالات الاستخدام", to: "/use-cases", key: "Use-Cases" },
    { component: <Link to={"/pricing"}>الأسعار</Link>, name: "الأسعار", to: "/pricing", key: "Pricing" },
    { component: <Link to={"/blog"}>المدونة</Link>, name: "المدونة", to: "/blog", key: "Blog" },
    { component: <Link to={"/contact"}>تواصل معنا</Link>, name: "تواصل معنا", to: "/contact", key: "Contact" },
  ];

  const list = () => (
    <Box
      sx={{ height:"100%", minHeight:"100vh", maxHeight:"10000000vh", display:"flex", flexDirection:"column", bgcolor:"#FFF9F2", }}
      role="presentation"
    >
      
      <nav className="flex bg-black flex-row  justify-between min-h-[92px] w-full py-2 md:px-[4rem] px-[2rem] items-center text-white z-50">
            <img src={Logo} draggable={false} className=" w-[11rem] md:w-[12rem] z-10 cursor-pointer"  onClick={() => {
                return navigate('/')
            }}/>
            <div onClick={()=>{      setIsOpen((prev) => !prev);}}>
                          <CloseIcon/>

            </div>
            </nav>
      <List className='!px-[1rem] w-full !bg-[#FFF9F2]  '>
        { routes.map((text, index) => (
            <motion.div whileHover={"active"} initial={"rest"} animate={"rest"}>
            <ListItem key={index} onClick={(e) => { text.key === 'Use-Cases' ? setIsOpenForCases((prev) => !prev)
              : text.key === 'Services' ? setIsOpenForServices((prev) => !prev): navigate(text.to)}} 
              className={`font-medium text-left text-[18px] !m-0 items-start justify-start flex-col flex !px-0 ${ active.split("/").includes(text.key.toLowerCase()) && "navbarItemsActive"}`}>
            <motion.div  className='w-full'>
            <ListItemButton className='w-full !flex !flex-row  !justify-between'>
              <motion.div className='flex flex-row items-center rtl:hidden '>
              <motion.span variants={{rest:{color:"transparent"}, active:{color:"black"}}} className="font-[Tektur] !text-xs"><FiberManualRecord sx={{fontSize:"10px"}}/></motion.span>
              <motion.div variants={{rest:{x:0}, active:{x:"5px"}}}>{text.component}</motion.div> 
              </motion.div>
              <motion.div className='hidden flex-row items-center rtl:flex'>
              <motion.span variants={{rest:{color:"transparent"}, active:{color:"black"}}} className="font-[Tektur] !text-xs"><FiberManualRecord sx={{fontSize:"10px"}}/></motion.span>
              <motion.div variants={{rest:{x:0}, active:{x:"-5px"}}}>{text.component}</motion.div> 
              </motion.div>
              {(text.key ==='Services') && (isOpenForServices ? <ExpandLessIcon/> :  <ExpandMoreIcon/>)} 

              {(text.key === 'Use-Cases') && (isOpenForCases ? <ExpandLessIcon/> : <ExpandMoreIcon/>)} 

            </ListItemButton>
            </motion.div>
            
            
          </ListItem>
          {text.key === "Services" && isOpenForServices && (
              <ServicesDropdownMobile routes={dropDownRoutes}/>
            )}
             {text.key === "Use-Cases" && isOpenForCases && (
              <UseCaseDropdownMobile routes={dropDownRoutes}/>
            )}
            {index !== routes.length -1 && (
                <Divider />
            )}

            </motion.div>
          
        ))}
      <ListItem key={"loginBtn"} >

      <Button className="loginMobile !h-full !w-full !text-black " >Login</Button>
      </ListItem>
              <ListItem key={"getStartedBtn"} >

      <Button className="getStartedNav  !h-full !w-full !text-black" >Get Started</Button>
      </ListItem>
      </List>
    
    </Box>
  );

  return (
    <div className=''>
        <React.Fragment>
          <Drawer
          className='max-xl:block hidden'
          anchor='top'
            open={isOpen}
          >

            {list()}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
