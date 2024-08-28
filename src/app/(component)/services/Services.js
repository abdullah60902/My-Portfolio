import React from 'react'

const Services = () => {
  return (
    <div>
      
    <section id="services" class="services">
        <div class="main-text">
            <span> What i will do for you</span>
            <h2>Our Services</h2>
        </div>
        <div class="section-services">
            <div class="service-box">
                <i class='bx bxs-layer service-icon'></i>
                <h3>Responsive Web Design</h3>
                <p>Creating websites that look and function well on various devices, ensuring a seamless user experience on desktops, tablets, and smartphones.</p>
                <div class="btn-box service-btn">
                    <a href="#" class="btn">Read More</a>
                </div>
            </div>

            <div class="service-box ">
                <i class='bx bx-code-alt service-icon'></i>
                <h3>UI/UX Design Implementation</h3>
                <p>Translating UI/UX designs into functional web interfaces, focusing on user-friendly navigation, aesthetics, and interactive elements</p>
                <div class="btn-box service-btn">
                    <a href="#" class="btn">Read More</a>
                </div>
            </div>

            <div class="service-box">
                <i class='bx bx-desktop service-icon'></i>
                <h3>Frontend Optimization</h3>
                <p>Improving website performance by optimizing code, images, and resources, ensuring fast load times and smooth user interactions</p>
                <div class="btn-box service-btn">
                    <a href="#" class="btn">Read More</a>
                </div>
            </div>
        </div>

    </section>
    </div>
  )
}

export default Services
