import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import './Navbar.css';

function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
      setIsNavActive(!isNavActive);
  };

  // const closeMenu = () => {
  //     setIsNavActive(false)
  // }

  return (
    <nav className='bg-[#222] py-4 sm:px-[8%] px-[4%] text-white font-montserrat flex justify-between items-center text-[1.05rem]'>
        <header>
            <img src={Logo} className='w-[100px]'/>
        </header>

        <ul className={`items-center gap-[3rem] text-lg font-medium md:flex 
                  ${isNavActive ? 'absolute w-full h-[100vh] space-y-6 top-[5rem] bg-[#444] left-0 px-[8%] pt-4 transition-all': 'hidden'}`}>
          <li className='nav-list'>
            <a href="#services">Services</a>
          </li>
          <li className='nav-list'>
            <a href="#about">About</a>
          </li>
          <li className='nav-list'>
            <a href="#gallery">Gallery</a>
          </li>
          <li className='nav-list'>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div onClick={toggleNav} className='cursor-pointer md:hidden block text-4xl'>
          {
            isNavActive ? <ion-icon name="close-outline"></ion-icon>: <ion-icon name="menu-outline"></ion-icon>
          }
        </div>
    </nav>
  )
}

export default Navbar