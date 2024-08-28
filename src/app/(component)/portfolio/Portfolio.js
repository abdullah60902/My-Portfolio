import React from 'react';
import Image from 'next/image';
import img1 from "@/app/images--main/Untitled design.png"
import food from "@/app/images--main/desktop.png"
import login from "@/app/images--main/login (2).png"
const Portfolio = () => {
  return (
    <div>
      <section className="portfolio" id="portfolio">
        <div className="main-text">
          <span>What I will do for you</span>
          <h2>Latest Project</h2>
        </div>

        <div className="container">
          <div className="filter-buttons">
            <button className="btn" data-filter="all">All</button>
           
          </div>

          <div className="portfolio-gallery">
            <div className="port-box mix product">
              <div className="port-image">
                <Image src="/images--main/1.png" alt="Headphones" width={600} height={400} />
              </div>
              <div className="port-content">
                <h3>Headphones 🎧</h3>
                <p>
                  Beautiful headphone landing page using HTML, CSS, and JavaScript.
                  Dark interface.
                  With animations when scrolling.
                </p>
                <a href="https://headphone-responsive-design.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>

            <div className="port-box mix product">
              <div className="port-image">
                <Image src="/images--main/2.png" alt="Filmlane website" width={600} height={400} />
              </div>
              <div className="port-content">
                <h3>Filmlane website 🎥</h3>
                <p>
                  Filmlane is a fully responsive movie website page,
                  
                </p>
                <a href="https://movies-website-one-ecru.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>

            <div className="port-box mix inter">
              <div className="port-image">
                <Image src={img1} alt="College Campus" width={600} height={400} />
              </div>
              <div className="port-content">
                <h3>College Campus 🌊</h3>
                <p>
                   website to the most beautiful beaches, using HTML, CSS & Next.js.
                
                </p>
                <a href="https://frontend-responsive-design-dqfg.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>

            <div className="port-box mix inter">
              <div className="port-image">
                <Image src="/images--main/4.png" alt="Gaming Website" width={600} height={400} />
              </div>
              <div className="port-content">
                <h3>Gaming Website 🎮</h3>
                <p>
                  GameX is a fully responsive eSports gaming website,
                  Responsive for all devices, built using HTML, CSS, and JavaScript.
                </p>
                <a href="https://gaming-website-five-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>

            <div className="port-box mix inter">
              <div className="port-image">
                <Image src={login} alt="Fitness Website" width={600} height={400} />
              </div>
              <div className="port-content">
                <h3 className='pt-[20px]'>MERN Crud App 🏋🏻</h3>
                <p>
                 is a fully responsive only for laptop screen ,
                   build using HTML, CSS, and Next.js Restful Api Mongodb Express.js .
                </p>
                <a href="https://mern-crud-app-biwt.vercel.app/Login" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>

            <div className="port-box mix web">
              <div className="port-image">
                <Image src={food}alt="Covid-19 Website" width={600} height={400} />
              </div>
              <div className="port-content">
                <h3>Restaurant</h3>
                <p>
                   is a fully responsive Restaurant website, Responsive for all devices, built using HTML,
                  CSS, and JavaScript.
                </p>
                <a href="https://grilli-amazing.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
