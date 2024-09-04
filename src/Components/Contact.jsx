import React from 'react'

function Contact() {
  return (
    <div id='contact' className='sm:px-[8%] px-[4%] pt-[100px] pb-[200px]'>
        <h1 className='text-4xl font-bold text-center'>Contact Us</h1>
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
            <button className='bg-green-600 py-2 px-14 rounded text-white mt-3 font-medium'>
                Send
            </button>
        </section>
    </div>
  )
}

export default Contact