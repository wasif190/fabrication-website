import React from 'react'

function GalleryCard(props) {
  return (
    <div className='md:w-[350px] w-[100%] border p-4 rounded bg-gray-50'>
        <img src={props.work.image} className='w-full aspect-square rounded'/>
        <h2 className='py-2 text-2xl font-semibold'>{props.work.title}</h2>
        <p className='text-lg text-green-500 font-semibold'>₹{props.work.price}</p>
    </div>
  )
}

export default GalleryCard