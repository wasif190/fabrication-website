import React from 'react';
import CallLogo from '../assets/call.png';
import MailLogo from '../assets/mail.png';

function Contact() {
  return (
    <div id='contact' className='sm:px-[8%] px-[4%] pt-[100px] pb-[200px]'>
        <h1 className='text-4xl font-bold text-center'>Contact Us</h1>
        <section className='flex flex-col mt-5 items-start justify-center gap-[1rem] md:w-[70%] sm:text-xl text-lg mx-auto'>
          <a href="tel:6291052948" className='flex items-center gap-2'>
            <img src={CallLogo} className='w-[30px]'/>
            6291052948
          </a>
          <a href="mail:wasif19010@gmail.com" className='flex items-center gap-2'>
          <img src={MailLogo} className='w-[30px]'/>
            wasif19010@gmail.com
          </a>
        </section>
        <section className='md:w-[70%] mt-10 mx-auto'>
            <div className='flex justify-center gap-3 flex-col'>
                <div>
                    <input 
                        type="text" 
                        placeholder='Enter name'
                        className='border outline-none rounded p-2 w-full'
                    />
                </div>
                <div>
                    <input 
                        type="number"
                        placeholder='Phone number'
                        className='border outline-none rounded p-2 w-full'
                    />
                </div>
                <div>
                    <textarea 
                        name="message"
                        placeholder='Enter message' 
                        className='border outline-none rounded w-full h-[150px] p-4'
                    ></textarea>
                </div>
            </div>
            <button className='bg-green-600 hover:bg-green-700 py-2 px-14 rounded text-white mt-3 font-medium flex items-center gap-1'>
                Send
                <i className="uil uil-message"></i>
            </button>
        </section>
    </div>
  )
}

export default Contact