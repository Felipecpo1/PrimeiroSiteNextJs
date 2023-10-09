import Link from 'next/link'
import React from 'react'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <div className={styles.display}>
      <ul>
        <li className=' ml-5'><Link href='/'><i className=" text-xl fa-solid fa-house"> </i> Início</Link></li>
        <li><Link href='/sobremim'><i className=" text-xl pl-2 fa-solid fa-user"></i> Sobre Mim</Link></li>
        <li><Link href='/fotos'> <i className=" text-xl fa-solid fa-camera-retro"></i> Fotos</Link></li>
        <li> <Link href='/contato'> <i className=" text-xl fa-solid fa-comment"></i> Contato</Link></li>
      </ul>
    </div>
  )
}
