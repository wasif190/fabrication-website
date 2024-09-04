import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
      setIsNavActive(!isNavActive);
  };

  const closeMenu = () => {
      setIsNavActive(false)
  }

  return (
    <nav className='bg-[#222] py-4 sm:px-[8%] px-[4%] text-white font-montserrat flex justify-between items-center text-[1.05rem]'>
        <header>
            <img src={Logo} className='w-[100px]'/>
        </header>

        <ul className={`items-center gap-[3rem] text-lg font-medium md:flex 
                  ${isNavActive ? 'absolute w-full h-[100vh] space-y-6 top-[5rem] bg-[#222] left-0 sm:px-[8%] px-[4%] pt-4 transition-all': 'hidden'}`}>
          <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="hero"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <span className='hover-nav'>Home</span>
                        </li>
                    </Link>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="service"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <span className='hover-nav'>Service</span>
                        </li>
                    </Link>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="about"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <span className='hover-nav'>About</span>
                        </li>
                    </Link>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="gallery"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <span className='hover-nav'>Gallery</span>
                        </li>
                    </Link>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="contact"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <span className='hover-nav'>Contact</span>
                        </li>
                    </Link>
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