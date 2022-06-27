import React from 'react'
import {NavLink} from "react-router-dom";

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='Navbar'>
       <nav>
      <NavLink exact='true' activeclassname='active' to='/' className='Navlink'>Home</NavLink>
      <NavLink exact='true' activeclassname='active' to='/' className='Navlink'>About</NavLink>
      <NavLink exact='true' activeclassname='active' to='/' className='Navlink'>Projects</NavLink>
      <NavLink exact='true' activeclassname='active' to='/' className='Navlink'>Contact</NavLink>
      </nav>
    </div>
  )
}

export default Navbar