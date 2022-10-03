import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri'
import { logo } from './../assets/index.js'
import { links } from './../assets/constants.js' 

const Sidebar = () => {

  const [mobileMenuOpen,setMobileMenuOpen] = useState(false)

  return (
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#342e4a]">
      <img src={logo} alt="logo" className="w-full h-14 object-contain"/>
    </div>
  )
};

export default Sidebar;
