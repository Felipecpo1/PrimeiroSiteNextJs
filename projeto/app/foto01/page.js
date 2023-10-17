import Link from 'next/link'
import styles from '../components/Fotos.module.css'

export default function page() {
  return (
    <div className={styles.display}>
      <button><Link href='http://localhost:3000/fotos'>Voltar</Link></button>
      <img src='/images/amigos.jpg'/>
    </div> 
  )
}

