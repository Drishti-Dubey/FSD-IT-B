import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Usernavbar from './Components/Usernavbar'
import './Components/Usernavbar.css'    
import { Outlet } from 'react-router-dom'

const Userdashboard = () => {
  return (
    <div>
      <Header/>
      <Usernavbar/>
      <Outlet/>
        <Footer/>
    </div>
  )
}

export default Userdashboard
