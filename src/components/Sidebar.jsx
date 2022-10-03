import { useState } from "react";

import { RiCloseLine } from 'react-icons/ri'
import { logo } from './../assets/index.js'
import NavLinks from "./NavLinks.jsx";


const Sidebar = () => {

  const [mobileMenuOpen,setMobileMenuOpen] = useState(false)

  return (
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#342e4a]">
      <img src={logo} alt="logo" className="w-full h-14 object-contain"/>
      <NavLinks/>
    </div>
  )
};

export default Sidebar;
