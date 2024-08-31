import React from 'react'
import styles from './RootLayout.module.css'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'



const RootLayout = () => {


  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default RootLayout
