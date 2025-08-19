import Logo from '../../assets/Logo.svg'
import LanguageIcon from '@mui/icons-material/Language';
import React from 'react';
import { Link, Outlet } from 'react-router';
import { Button, Stack, Container, Typography, Box, IconButton } from '@mui/material';
import { Squash as Hamburger } from "hamburger-react";
import SideDrawer from './sidebar';
import { NavBar } from './navbar';
import { Footer } from './footer';
import { useTranslation } from 'react-i18next';



export const Layout = () => {

     const { ready } = useTranslation();

  if (!ready) return <div>Loading...</div>;
      const [isOpen, setOpen] = React.useState(false);


    const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    padding: '5px 0',
    };



    return (
        <div className=" w-full bg-white h-[100%]"  >
            <div className=' max-w-[2000px] bg-black mx-auto'>  <div className="absolute gradientLayout  ">
            </div>
            <NavBar/>
            <main >
                <Outlet /> {/* Nested routes render here */}
            </main>
            <Footer/>
            </div>
          
        </div>
    )
}


