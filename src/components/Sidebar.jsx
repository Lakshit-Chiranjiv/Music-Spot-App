import { useState } from "react";

import { HiOutlineMenu } from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'
import { logo } from './../assets/index.js'
import NavLinks from "./NavLinks.jsx";


const Sidebar = () => {

  const [mobileMenuOpen,setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#342e4a]">
        <img src={logo} alt="logo" className="w-full h-14 object-contain"/>
        <NavLinks/>
      </div>

      <div className="md:hidden block absolute top-6 right-4">
        {
          mobileMenuOpen ? 
          <RiCloseLine className="w-6 h-6 mr-2 text-white"/> :
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white"/>
        }
      </div>
    </>
  )
};

export default Sidebar;
