'use client'
import React from 'react'
import '@brainhubeu/react-carousel/lib/style.css';
import Carousel, { slidesToShowPlugin} from '@brainhubeu/react-carousel';
import styles from './components/Swiper.module.css'
import Link from 'next/link';

export default function page() {
  return (
    <div className={styles.display}>
    <span>
    <Carousel
    className='p-5'
      plugins={[
        'infinite',
        'arrows',
        'centered',
        {
          resolve: slidesToShowPlugin,
          options: {
           numberOfSlides: 2
          }
        },
      ]}   
     >
      <div className='ml-1 rounded-sm bg-white p-1 border border-gray-700'>
        <Link href='http://localhost:3000/foto01'>
        <img src='/images/amigos.jpg'/>
        <p className=' text-center'>Amigos 👯</p>
        </Link>
      </div>
      <div className=' ml-1 rounded-sm bg-white p-1 border border-gray-700'>
        <img src='/images/amor.jpg'/>
        <p className=' text-center'>Amor ❤️</p>
      </div>
      <div className=' ml-1 rounded-sm bg-white p-1 border border-gray-700'>
        <img src='/images/familia.jpg'/>
        <p className=' text-center'>Família 🏡</p>
      </div>
      <div className=' ml-1 rounded-sm bg-white p-1 border border-gray-700'>
        <img src='/images/praia.jpg'/>
        <p className=' text-center'>Praia 🏖️</p>
      </div>
    </Carousel>
    </span>
    </div>
  )
}
