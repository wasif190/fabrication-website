import React from 'react';
import Hero from '../assets/hero.png';
import Navbar from './Navbar';
import { Link } from 'react-scroll';

function Home() {
  return (
    <main id='hero' className='bg-[#222] h-screen flex items-center justify-between relative'>
        <section className='fixed top-0 left-0 right-0 z-20 bg-[#222] bg-opacity-10 backdrop-blur-lg border-b border-white/30'>
            <Navbar/>
        </section>
        <section className='z-10 text-white sm:px-[8%] px-[4%] lg:w-[70%] md:w-[80%] lg:-mt-[50px] md:-mt-[150px] -mt-[220px]'> 
            <h1 className='xl:text-[4rem] lg:text-[3.5rem] sm:text-[3rem] mobile:text-[2.8rem] text-[2.4rem] font-bold xl:leading-[4.6rem] lg:leading-[4rem] sm:leading-[4rem] mobile:leading-[3.5rem] leading-[3rem]'>
                Welding and Metal Fabrication for Every Home
            </h1>
            <p className='mobile:text-[1.2rem] text-[1rem] mobile:pt-4 pt-1'>
                We specialize in high-quality custom metal fabrication, delivering tailored solutions for all your industrial needs.
            </p>
            <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
                to="contact"
            >
                <button className='py-[7px] mt-3 text-lg rounded px-14 bg-green-600 hover:bg-green-700'>
                Contact
                </button>
            </Link>
        </section>
        <div className='md:w-screen mobile:w-[200vw] w-[250vw] right-0 absolute bottom-0'>
            <img src={Hero}/>
        </div>
    </main>
  )
}

export default Home