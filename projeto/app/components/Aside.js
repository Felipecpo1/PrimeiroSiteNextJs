import React from 'react'
import styles from './Aside.module.css'

export default function Aside() {
  return (
    <div className={styles.display}>
      <ul>
        <li><a target='blank' href='https://github.com/Felipecpo1'><i className="fa-brands fa-github"></i></a></li>
        <li><a target='blank' href='https://www.linkedin.com/in/felipe-c%C3%A9sar-37496527b/'><i className=" fa-brands fa-linkedin"></i></a></li>
        <li><a target='blank' href='https://www.facebook.com/profile.php?id=100021485061187'><i className="fa-brands fa-facebook"></i></a></li>
        <li><a target='blank' href='instagram.com/lp.b182'><i className="fa-brands fa-instagram"></i></a></li>
      </ul>
    </div>
  )
}
