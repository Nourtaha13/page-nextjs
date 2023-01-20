import React from 'react'
import Image from 'next/image'
import logo from "../assets/images/logo.svg"
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
function Footer() {
   return (
      <footer>
         <div className="container" data-aos="fade-up">
            <div className="logo">
               <Image src={logo} alt="footer" />
            </div>
            <div className="nav">
               <div className="links">
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
                  <div className="icons">
                     <a href="#">
                        <BsInstagram />
                     </a>
                     <a href="#">
                        <ImFacebook />
                     </a>
                     <a href="#">
                        <AiOutlineTwitter />
                     </a>
                     <a href="#">
                        <FaLinkedinIn />
                     </a>
                  </div>
               </div>
               <div className="copy">
                  <span>&copy; 2023 All right reserved.</span>
                  <span>Privacy Policy</span>
                  <span>Terms of Service</span>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer