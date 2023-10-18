'use client'
import React from 'react'
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox} from 'lightbox.js-react'
import styles from '../components/Swiper.module.css'

export default function Familia() {
  return (
    <div className={styles.display}>
      <SlideshowLightbox className='container grid grid-cols-2 gap-2 mx-auto' showThumbnails={true}>
        <img src='/images/amigos.jpg'/>
        <img src='/images/amigos2.jpg'/>
        <img src='/images/amigos4.jpg'/>
        <img src='/images/amigos3.jpg'/>

      </SlideshowLightbox>
    </div>
  )
}
