"use client"
import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Ourself from '../Components/Ourself'
import Chooses from '../Components/chooses'
import Practices from '../Components/Practices'
import OurTeam from '../Components/OurTeam'
import Faq from '../Components/Faq'
import Subscribe from '../Components/Subscribe'
import Footers from '../Components/footers'
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
      <Chooses />
      <Practices />
      <OurTeam />
      <Faq />
      <Subscribe />
       <Footers />
    </>
  )
}
