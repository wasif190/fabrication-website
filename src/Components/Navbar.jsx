import React, { useState } from 'react';
import Logo from '../assets/logo.png';
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
        <nav className='py-4 md:px-[8%] px-[4%] text-white bg-[#222] border-b border-white/30 font-monsterrat flex justify-between 
            items-center text-[1.05rem] fixed z-20 top-0 left-0 right-0'
        >
            <header className='w-[100px]'>
                <img src={Logo}/>
            </header>

            <div>
                <ul id='navbar' className={`items-center gap-[3rem] lg:flex
                    ${isNavActive ? 'absolute z-10 w-full top-[5.1rem] border-t border-b border-white/30 bg-[#222] left-0 p-7 pb-14 px-[4%] lg:px-[10%] grid grid-cols-3 rounded-b-xl transition-all duration-300': 'hidden'}`}
                >
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="home"
                        className="navbar--content"
                    >
                        <li>
                            <i className="uil uil-estate"></i> 
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
                        <li>
                            <i className="uil uil-file-alt"></i>
                            <span className='hover-nav'>Services</span>
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
                        <li>
                            <i className="uil uil-user"></i>
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
                        <li>
                            <i className="uil uil-scenery"></i>
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
                        <li>
                            <i className="uil uil-message"></i>
                            <span className='hover-nav'>Contact</span>
                        </li>
                    </Link>
                </ul>
            </div>

            <div onClick={toggleNav} className='cursor-pointer lg:hidden block text-4xl'>
                {
                    isNavActive ? <ion-icon name="close-outline"></ion-icon>: <ion-icon name="menu-outline"></ion-icon>
                }
            </div>
        </nav>
    )
}

export default Navbar