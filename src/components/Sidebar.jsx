import { useState } from "react";

import { HiOutlineMenu } from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'
import { logo } from './../assets/index.js'
import NavLinks from "./NavLinks.jsx";


const Sidebar = () => {

  const [mobileMenuOpen,setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#2e4a37]">
        <img src={logo} alt="logo" className="w-full h-18 object-contain"/>
        <NavLinks/>
      </div>

      <div className="md:hidden block absolute top-6 right-4">
        {
          mobileMenuOpen ? 
          <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)}/> :
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)}/>
        }
      </div>

      <div className={`md:hidden absolute top-0 h-screen w-2/3 p-6 z-10 smooth-transition backdrop-blur-lg bg-gradient-to-tl from-white/10 to-[#3d8b65] ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain"/>
        <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
      </div>
    </>
  )
};

export default Sidebar;
