import React, { useEffect } from 'react'
import styles from './RootLayout.module.css'
import NavBar from '../NavBar/NavBar'
import { Outlet, useNavigate } from 'react-router-dom'



const RootLayout = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    navigate('/home')
  },[navigate])

  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default RootLayout
