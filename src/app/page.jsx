"use client"
import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Ourself from '../Components/Ourself'
import Choose from '../Components/choose'
import Practices from '../Components/Practices'
import OurTeam from '../Components/OurTeam'
import Faq from '../Components/Faq'
import Subscribe from '../Components/Subscribe'
// import Footer from '../Components/footer'
import AOS from "aos"
import "aos/dist/aos.css"



export default function Home () {
  useEffect(_ => {
    AOS.init()
  }, [])
  return (
    <>
      <Navbar />
      <Hero />
      <Ourself />
      <Choose />
      <Practices />
      <OurTeam />
      <Faq />
      <Subscribe />

    </>
  )
}
