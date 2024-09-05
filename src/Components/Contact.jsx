import React, { useState } from 'react';
import CallLogo from '../assets/call.png';
import MailLogo from '../assets/mail.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendToWhatsApp = () => {
    const { name, place, message } = formData;

    // Construct the WhatsApp message
    const whatsappMessage = `Name: ${name}%0APlace: ${place}%0AMessage: ${message}`;

    // WhatsApp API URL with the message
    const whatsappUrl = `https://wa.me/916291052948?text=${whatsappMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToWhatsApp();
  };

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
          <form onSubmit={handleSubmit} className='flex justify-center gap-3 flex-col'>
            <div>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter name'
                className='border outline-none rounded p-2 w-full'
                required
              />
            </div>
            <div>
              <input 
                type="text" 
                name="place" 
                value={formData.place}
                onChange={handleChange}
                placeholder='Enter place'
                className='border outline-none rounded p-2 w-full'
                required
              />
            </div>
            <div>
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder='Enter message' 
                className='border outline-none rounded w-full h-[150px] p-4'
                required
              ></textarea>
            </div>
            <button type="submit" className='bg-green-600 hover:bg-green-700 py-2 w-[240px] rounded text-white mt-3 font-medium flex items-center justify-center gap-1'>
              Send
              <i className="uil uil-message"></i>
            </button>
          </form>
        </section>
    </div>
  )
}

export default Contact