'use client'
import React from 'react'
import Pessoal1 from './components/Pessoal1';
import Pessoal2 from './components/Pessoal2';
import Pessoal3 from './components/Pessoal3';
import styles from '../../components/Artigo.module.css'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default () => {
  return (
    <div className={styles.display}>
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide><Pessoal1/></SwiperSlide>
      <SwiperSlide><Pessoal2/></SwiperSlide>
      <SwiperSlide><Pessoal3/></SwiperSlide>
    </Swiper>
    </div>
  );
};
