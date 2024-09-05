import React from 'react';
import galleryData from '../../data/gallery.json';
import GalleryCard from './GalleryCard';

function Gallery() {
    const {gallery} = galleryData;
  return (
    <div id='gallery' className='sm:px-[8%] px-[4%] pt-[100px]'>
        <h1 className='text-4xl font-bold text-center'>Gallery</h1>
        <section className='grid xl:grid-cols-3 sm:grid-cols-2 place-items-center gap-[2rem] mt-10 w-full'>
            {
              gallery.map((gallery) => (<GalleryCard gallery={gallery} key={gallery.id}/>))
            }
        </section>
    </div>
  )
}

export default Gallery