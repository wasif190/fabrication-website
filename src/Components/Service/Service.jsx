import React from 'react';
import serviceData from '../../data/service.json';
import ServiceCard from './ServiceCard';

function Service() {
    const { services } = serviceData;
    return (
        <div id='service' className='sm:px-[8%] px-[4%] pt-[100px]'>
            <header className='text-4xl font-bold text-center'>
                Our Services
            </header>

            <section className='grid place-items-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center gap-[2rem] mt-10'>
                {
                    services.map((service) => (
                        <ServiceCard service={service} key={service.id}/>
                    ))
                }
            </section>
        </div>
    )
}

export default Service