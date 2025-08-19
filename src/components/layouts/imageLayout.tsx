import React from 'react';
import { Link, Outlet } from 'react-router';
import { Footer } from './footer';
import { useTranslation } from 'react-i18next';



export const ImageLayout = () => {
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
        <div className=" w-full bg-black h-[100%] ">
            <div className=' max-w-[2000px] ] mx-auto'>  
                 <main >
                <Outlet /> {/* Nested routes render here */}
            </main>
            <Footer/>
            </div>
           
        </div>
    )
}


