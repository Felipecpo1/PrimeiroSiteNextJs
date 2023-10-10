'use client'
import React from 'react'
import {Navigation, Pagination, A11y} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/bundle';
import Pessoal1 from './components/Pessoal1';
import Pessoal2 from './components/Pessoal2';
import Pessoal3 from './components/Pessoal3';
import styles from '../../components/Artigo.module.css'


export default function page() {
  return (
    <div className={styles.display}>
      <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={[1]}
      spaceBetween={20}
      pagination={{clickable: true}}
      navigation
      >
        <SwiperSlide><Pessoal1/></SwiperSlide>
        <SwiperSlide><Pessoal2/></SwiperSlide>
        <SwiperSlide><Pessoal3/></SwiperSlide>
      </Swiper>
    </div>
  )
}