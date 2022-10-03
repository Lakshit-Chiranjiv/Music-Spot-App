import { links } from './../assets/constants.js' 
import { NavLink } from "react-router-dom";

const NavLinks = ({handleClick}) => {
  return (
    <div className='mt-10'>
        {
            links.map((link) => (
                <NavLink to={link.to} key={link.name} className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-300 hover:text-cyan-400' onClick={() => {
                    handleClick && handleClick()
                }}>
                    <link.icon className='h-6 w-6 mr-2'/>
                    {link.name}
                </NavLink>
            ))
        }
    </div>
  )
}

export default NavLinks