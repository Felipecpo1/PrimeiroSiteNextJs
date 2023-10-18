import React from 'react'
import Botoes from './components/Botoes'

export default function FotoLayout({children}) {
  return (
    <div>
      <Botoes/>
      {children}
    </div>
  )
}
