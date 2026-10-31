import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import { ThemeDataContext } from '../context/ThemeContext'


const Navbar = () => {
  const [them]=useContext(ThemeDataContext)
  return (
    <div className={them} >
        <h2>Sheryain</h2>
        <Navbar2  />
    </div>
  )
}

export default Navbar