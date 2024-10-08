import React from 'react';
import Hero from '../assets/home.png';
import Navbar from './Navbar';
import { Link } from 'react-scroll';

function Home() {
  return (
    <main id='home' className='bg-[#222] md:px-[8%] px-[4%] h-screen flex items-center justify-between relative'>
        <section className='z-10 text-white lg:w-[70%] md:w-[80%] sm::-mt-[50px] mobile:-mt-[100px] -mt-[120px]'
        > 
            <h1 className='xl:text-[4rem] font-josefin sm:text-[3rem] mobile:text-[2.8rem] text-[2.5rem] font-bold xl:leading-[4.6rem] 
                lg:leading-[4rem] mobile:leading-[3.5rem] leading-[3.3rem] 
            '>
                Welding and Metal Fabrication for Every Home
            </h1>
            <p className='mobile:text-[1.2rem] text-[1rem] mobile:pt-4 py-2'>
                Welcome to Ansari fabrication, Your Trusted Partner for Quality Fabrication Solutions.
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
                <button className='py-[7px] flex items-center gap-1 mt-5 text-lg rounded px-14 bg-red-600 hover:bg-red-700'>
                    Contact
                    <i className="uil uil-message"></i>
                </button>
            </Link>

            <div className='absolute -z-10 right-0 bottom-0 md:w-[600px] sm:w-[500px] w-[380px] animated-image'>
                <img src={Hero}/>
            </div>
        </section>
    </main>
  )
}

export default Home