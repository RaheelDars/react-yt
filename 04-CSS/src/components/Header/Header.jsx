import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.Header}>
        <h3>Raheel</h3>
        <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header