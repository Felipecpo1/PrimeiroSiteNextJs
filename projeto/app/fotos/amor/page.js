'use client'
import React from 'react'
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox} from 'lightbox.js-react'
import styles from '../components/Swiper.module.css'

export default function Familia() {
  return (
    <div className={styles.display}>
      <SlideshowLightbox className='container grid grid-cols-2 gap-2 mx-auto' showThumbnails={true}>
        <img src='/images/amor.jpg'/>

        <img src='/images/amor3.jpg'/>
        <img src='/images/amor4.jpg'/>
        <img src='/images/amor2.jpg'/>
      </SlideshowLightbox>
    </div>
  )
}
