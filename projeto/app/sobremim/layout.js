import React from 'react'
import BotoesSobre from './components/BotoesSobre'

export default async function SobreMimLayout({children}) {
  return (
    <div>
      <BotoesSobre/>
      <div>
        {children}
      </div>
    </div>
  )
}
