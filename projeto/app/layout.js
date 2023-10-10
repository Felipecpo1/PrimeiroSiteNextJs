import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'/>
        <NavBar/>
        <Footer/>
        <div className='pt-5 pb-44'>
        {children}
        </div>
      </body>
    </html>
  )
}
