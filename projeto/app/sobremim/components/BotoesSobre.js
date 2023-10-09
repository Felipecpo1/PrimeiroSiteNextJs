import Link from 'next/link'
import React from 'react'
import styles from './BotoesSobre.module.css'

export default function BotoesSobre() {
  return (
    <div>
      <button><Link href='/sobremim/pessoal'>Pessoal</Link></button>
    </div>
  )
}
