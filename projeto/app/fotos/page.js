'use client'
import React from 'react'
import '@brainhubeu/react-carousel/lib/style.css';
import Carousel, { slidesToShowPlugin} from '@brainhubeu/react-carousel';
import styles from './components/Swiper.module.css'
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox} from 'lightbox.js-react'

export default function page() {
  return (
    <div className={styles.display}>
      <Carousel
      plugins={[
        'arrows',
        'centered'
      ]}
      >
      <div>
        <p className=' text-lg text-white text-center'>Família</p>
        <SlideshowLightbox className='p-10 container grid grid-cols-2 gap-2 mx-auto' showThumbnails={true}>
          <img src='/images/amigos.jpg'/>
          <img src='/images/amor.jpg'/>
          <img src='/images/familia.jpg'/>
          <img src='/images/praia.jpg'/>
      </SlideshowLightbox>
    </div>

    <div>
      <p className=' text-lg text-white text-center'>Família</p>
      <SlideshowLightbox className='p-10 container grid grid-cols-2 gap-2 mx-auto' showThumbnails={true}>
          <img src='/images/amigos.jpg'/>
          <img src='/images/amor.jpg'/>
          <img src='/images/familia.jpg'/>
          <img src='/images/praia.jpg'/>
      </SlideshowLightbox>
    </div>

    <div>
      <p className=' text-lg text-white text-center'>Família</p>
      <SlideshowLightbox className='p-10 container grid grid-cols-2 gap-2 mx-auto' showThumbnails={true}>
          <img src='/images/amigos.jpg'/>
          <img src='/images/amor.jpg'/>
          <img src='/images/familia.jpg'/>
          <img src='/images/praia.jpg'/>
      </SlideshowLightbox>
    </div>

    <div>
      <p className=' text-lg text-white text-center'>Família</p>
      <SlideshowLightbox className='p-10 container grid grid-cols-2 gap-2 mx-auto' showThumbnails={true}>
          <img src='/images/amigos.jpg'/>
          <img src='/images/amor.jpg'/>
          <img src='/images/familia.jpg'/>
          <img src='/images/praia.jpg'/>
      </SlideshowLightbox>
    </div>
    </Carousel>
    </div>
  )
}
