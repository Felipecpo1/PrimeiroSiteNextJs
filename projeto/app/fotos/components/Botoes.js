import React from 'react'
import styles from './Botoes.module.css'
import Link from 'next/link'

export default function Botoes() {
  return (
    <div>
    <div className={styles.display}>
      <button ><Link href='/fotos/familia'> Família</Link></button>
      <button ><Link href='/fotos/amor'> Amor</Link></button>
      <button ><Link href='/fotos/amigos'> Amigos</Link></button>
      <button ><Link href='/fotos/eu'> Eu</Link></button>
    </div>
    </div>
  )
}
