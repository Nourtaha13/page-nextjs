import Image from 'next/image';
import React from 'react'
import img from "../assets/images/image.png"
import img2 from "../assets/images/image2.png"
import img3 from "../assets/images/image3.png"
import img4 from "../assets/images/image4.png"
import img5 from "../assets/images/image5.png"
import img6 from "../assets/images/image6.png"

function Practices() {
   return (
      <article className="practices" id="practices" data-aos="fade-left">
         <div className="container">
            <h1>Area of Practices</h1>
            <div className="images">
               <div className="row" data-aos="fade-left">
                  <div className="card">
                     <Image src={img} alt="img" />
                     <p>BUSINESS LAW</p>
                  </div>
                  <div className="card">
                     <Image src={img2} alt="img" />
                     <p>BUSINESS LAW</p>
                  </div>
               </div>
               <div className="row" data-aos="fade-right">
                  <div className="card">
                     <Image src={img3} alt="img" />
                     <p>BUSINESS LAW</p>
                  </div>
                  <div className="card">
                     <Image src={img4} alt="img" />
                     <p>BUSINESS LAW</p>
                  </div>
               </div>
               <div className="row" data-aos="fade-left">
                  <div className="card">
                     <Image src={img5} alt="img" />
                     <p>BUSINESS LAW</p>
                  </div>
                  <div className="card">
                     <Image src={img6} alt="img" />
                     <p>BUSINESS LAW</p>
                  </div>
               </div>
            </div>
         </div>
      </article>
   );
}

export default Practices