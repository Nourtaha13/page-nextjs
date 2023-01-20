import React from 'react'
import avatar from "../assets/images/avatar.png"
import Image from 'next/image'
function OurTeam() {
   return (
      <article className="team" data-aos="fade-right">
         <div className="container">
            <h1>Our Team</h1>
            <main className="cards">
               <section className="card">
                  <Image src={avatar} alt="avatar" />
                  <div className="col">
                     <h2>Danial Def</h2>
                     <p>301 Cases</p>
                  </div>
               </section>
               <section className="card">
                  <Image src={avatar} alt="avatar" />
                  <div className="col">
                     <h2>Danial Def</h2>
                     <p>301 Cases</p>
                  </div>
               </section>
               <section className="card">
                  <Image src={avatar} alt="avatar" />
                  <div className="col">
                     <h2>Danial Def</h2>
                     <p>301 Cases</p>
                  </div>
               </section>
               <section className="card">
                  <Image src={avatar} alt="avatar" />
                  <div className="col">
                     <h2>Danial Def</h2>
                     <p>301 Cases</p>
                  </div>
               </section>
               <section className="card">
                  <Image src={avatar} alt="avatar" />
                  <div className="col">
                     <h2>Danial Def</h2>
                     <p>301 Cases</p>
                  </div>
               </section>
               <section className="card">
                  <Image src={avatar} alt="avatar" />
                  <div className="col">
                     <h2>Danial Def</h2>
                     <p>301 Cases</p>
                  </div>
               </section>
            </main>
         </div>
      </article>
   );
}

export default OurTeam