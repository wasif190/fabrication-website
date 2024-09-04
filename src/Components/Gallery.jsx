import React from 'react';
import galleryData from '../data/work.json';
import GalleryCard from './GalleryCard';

function Gallery() {
    const {works} = galleryData;
  return (
    <div id='gallery' className='sm:px-[8%] px-[4%] pt-[100px]'>
        <h1 className='text-4xl font-bold text-center'>Gallery</h1>
        <section className='grid xl:grid-cols-3 md:grid-cols-2 place-items-center gap-[2rem] mt-10'>
            {
                works.map((work) => (<GalleryCard work={work} key={work.id}/>))
            }
        </section>
    </div>
  )
}

export default Gallery