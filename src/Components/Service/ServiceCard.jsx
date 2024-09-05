import React from 'react'

function ServiceCard(props) {
  return (
    <div className='border md:w-[300px] lg:w-[250px] xl:w-[280px] h-full p-4 bg-gray-100 rounded'>
        <img src={props.service.icon} className='w-[40px]'/>
        <h2 className='text-xl font-semibold py-2'>{props.service.title}</h2>
        <p>{props.service.description}</p>
    </div>
  )
}

export default ServiceCard