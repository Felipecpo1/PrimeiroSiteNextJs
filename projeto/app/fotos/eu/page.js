'use client'
import React from 'react'
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox} from 'lightbox.js-react'
import styles from '../components/Swiper.module.css'

export default function Familia() {
  return (
    <div className={styles.display}>
      <SlideshowLightbox className=' h-1/2 container grid grid-cols-2 gap-2 mx-auto' showThumbnails={true}>
        <img src='/images/tattoos.jpg'/>
        <img src='/images/eu2.JPEG'/>
        <img src='/images/eu4.jpg'/>
        <img src='/images/eu3.jpg'/>

      </SlideshowLightbox>
    </div>
  )
}
