import React from 'react'

function GalleryCard(props) {
  return (
    <div className='md:w-[320px] lg:w-[380px] xl:w-[350px] w-[90%] border p-4 rounded bg-gray-100'>
        <img src={props.gallery.image} className='w-full aspect-square rounded-sm'/>
        <h2 className='py-2 sm:text-2xl text-xl font-semibold'>{props.gallery.name}</h2>
        <p>{props.gallery.description}</p>
        <p className='text-lg text-green-500 font-semibold'>{props.gallery.price}</p>
    </div>
  )
}

export default GalleryCard