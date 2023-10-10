import Link from 'next/link'
import React from 'react'
import styles from './BotoesSobre.module.css'

export default function BotoesSobre() {
  return (
    <div className={styles.display}>
      <ul>
        <li> <button><Link href='/sobremim/pessoal'><i className="fa-regular fa-user"></i> Pessoal</Link></button></li>
        <li> <button><Link href='/sobremim/profissional'> <i className="fa-solid fa-user-tie"></i> Profissional</Link></button></li>
      </ul>
    </div>
  )
}
