'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import logo from "../assets/images/logo.svg"
function Navbar () {
   const [ menu, setMenu ] = useState(false)
   return (
      <header>
         <div className="container" data-aos="fade-down">
            <div className="logo" data-aos="fade-down">
               <Image src={logo} alt="logo" />
            </div>
            <nav className={menu ? "active-nav" : null}>
               <ul>
                  <li>
                     <a href="#home">Home</a>
                  </li>
                  <li>
                     <a href="#">Attorneys</a>
                  </li>
                  <li>
                     <a href="#practices">Practice Areas</a>
                  </li>
                  <li>
                     <a href="#about">About Us</a>
                  </li>
               </ul>
               <a href="#" className="contact">
                  Contact Now
               </a>
            </nav>
            <div className="menu" onClick={(_) => setMenu((state) => !state)}>
               <span></span>
               <span></span>
               <span></span>
            </div>
         </div>
      </header>
   );
}

export default Navbar