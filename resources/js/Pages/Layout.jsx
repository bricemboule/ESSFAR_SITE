import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar/Navbar'
import Section from '../components/Navbar/Section'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <Section/>

        <Outlet/>

        <Footer/>
    </>
  )
}

export default Layout