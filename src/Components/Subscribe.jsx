import React from 'react'

function Subscribe() {
   return (
      <article className="sub" data-aos="fade-right">
         <div className="container">
            <main>
               <h1>Subscribe Our Newsletter</h1>
               <section>
                  <form action="#">
                     <input type="text" placeholder="Name" />
                     <input type="text" placeholder="Enter your email" />
                     <button type="submit">SEND</button>
                  </form>
               </section>
            </main>
         </div>
      </article>
   );
}

export default Subscribe