'use client'
import React from 'react'
import {Navigation, Pagination, A11y} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/bundle';

import Trabalhos from './components/Trabalhos'
import Cursos from './components/Infos';
import Infos from './components/Cursos';
import styles from './components/Artigo.module.css'


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
        <SwiperSlide><Trabalhos/></SwiperSlide>
        <SwiperSlide><Infos/></SwiperSlide>
        <SwiperSlide><Cursos/></SwiperSlide>
      </Swiper>
    </div>
  )
}
