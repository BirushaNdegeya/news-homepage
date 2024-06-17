"use client";
import { useState } from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import Logo from "./Logo";
import iconMenuClose from '@/public/images/icon-menu-close.svg';
import iconMenu from '@/public/images/icon-menu.svg';


export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const icon = !isMenuOpen ? iconMenu : iconMenuClose;
   const changeDisplayMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   }
   return (
      <header className='flex justify-between items-center px-2 py-4'>
         <Logo />
         <Image
            onClick={changeDisplayMenu}
            src={icon}
            alt="icon menu and  icon close menu"
         />
         <Navigation />

      </header>
   );
}