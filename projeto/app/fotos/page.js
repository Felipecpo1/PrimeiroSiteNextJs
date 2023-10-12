'use client'
import React from 'react'
import '@brainhubeu/react-carousel/lib/style.css';
import Carousel, { slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel';
import Foto1 from './components/Foto1';
import Foto2 from './components/Foto2';
import Foto3 from './components/Foto3';
import Foto4 from './Foto4';

export default function page() {
  return (
    <div>
    <Carousel
      className=' bg-blue-950'
      plugins={[
        'centered',
        'infinite',
        'arrows',
      {
        resolve: slidesToShowPlugin,
        options: {
          numberOfSlides: 1,
        },
      },
      {
        resolve: slidesToScrollPlugin,
        options: {
          numberOfSlides: 2,
        },
      },
    ]}   
     >
        <Foto1/>
        <Foto2/>
        <Foto3/>
        <Foto4/>
    </Carousel>
    </div>
  )
}
