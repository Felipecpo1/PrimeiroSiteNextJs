'use client'
import React from 'react'
import {Navigation, Pagination, A11y, Keyboard, Autoplay} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/bundle';
import styles from './components/Artigo.module.css'
import Foto1 from './components/Foto1';
import Foto2 from './components/Foto2';
import Foto3 from './components/Foto3';


export default function page() {
  return (
    <div className='border-blue-950'>
    <div className={styles.display}>
      <Swiper
      modules={[Navigation, Pagination, A11y, Keyboard, Autoplay]}
      slidesPerView={[1]}
      spaceBetween={20}
      pagination={{clickable: true}}
      navigation
      keyboard={true}
      loop={true}
      >
        <div className=' bg-red-600'>
        <SwiperSlide><Foto1/></SwiperSlide>
        <SwiperSlide><Foto2/></SwiperSlide>
        <SwiperSlide><Foto3/></SwiperSlide>
        </div>
      </Swiper>
    </div>
    </div>
  )
}
