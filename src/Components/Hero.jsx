import Image from 'next/image';
import React from 'react'
import hero from "../assets/images/hero.svg"
import bgHero from "../assets/images/bg-hero.svg"
function Hero () {
   return (
      <article className="hero" id="home">
         <div className="container">
            <section
               className="hero-text"
               data-aos="fade-right"
               data-aos-duration="900"
            >
               <h1>You don’t have to </h1>
               <h1>Fight them Alone.</h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  blandit, curabitur sodales conubia ut inceptos faucibus
                  himenaeos tortor eget, hac massa gravida arcu interdum proin
                  curae.
               </p>
               <div className="address">
                  <div className="row">
                     <input
                        type="email"
                        placeholder="Enter your email address"
                     />
                     <a href="#" className="talk">
                        Let’s Talk
                     </a>
                  </div>
               </div>
            </section>
            <section
               className="hero-img"
               data-aos="fade-left"
               data-aos-duration="1200"
            >
               <div className="img">
                  <Image src={bgHero} alt="hero" />
                  <Image src={hero} alt="hero" />
               </div>
            </section>
         </div>
      </article>
   );
}

export default Hero