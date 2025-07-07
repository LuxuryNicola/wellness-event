import React, { useState } from "react";
import "./Styles/Corporate.css";



export default function CorporatePage() {
  return (
    <main className="corporate-container">
      <section className="C-intro">
        <div className="C-intro-content">
          <div className="image-overlay-wrapper">
            <img src={`${process.env.PUBLIC_URL}/images/country.jpg`} alt="Mission visual" className="C-intro-image" />
            <div className="image-overlay"></div>
          </div>
          <div className="C-intro-text">
            <img src={`${process.env.PUBLIC_URL}/images/coffee.png`} alt="doodlecoffee" className="coffee-image-top" />
            <p>
              <i>Elevate Your Team with Corporate Wellness Experiences</i>
            </p>
          </div>
        </div>

      </section>


      {/* Creating a divide between the two sections*/}

      <section className="section-bar">
        <div className="section-bar-content">
          <div className="section-bar-line"></div>
          <h2 className="section-bar-title">Employee Wellbeing</h2>
          <div className="section-bar-line"></div>
        </div>
      </section>

      {/* Corporate About */}
      <section className="C-about-section">
        <div className="C-about-text">
          <h2>Pause. Reset</h2>
          <p>
          Wellness is essential for fostering a healthy, motivated, and productive workforce. <br></br> 
          Prioritizing employee wellbeing not only reduces stress and absenteeism but also boosts morale and retention. <br></br>
          Companies can integrate wellness into their culture through a variety of engaging events. <br></br> <br></br>
          <b>Onsite options might include:</b><br></br>
          Yoga or meditation sessions. <br></br> 
          Wellness workshops.  <br></br>
          healthy cooking demos. <br></br><br></br>
          
          <b>Offsite experiences could include: </b>  <br></br> 
          Nature retreats and fitness challenges. <br></br>
          Team-building hikes <br></br>
          Spa days and Sound Healing <br></br> <br></br>
          

          Every company and employee is different and we want to curate a sessions that show employees they are valued, 
          creating a more positive and energized workplace.
          </p>
        </div>

        <div className="C-about-image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/images/corporatecalm.jpg`} alt="forest" className="C-about-image" />
          <div className="C-image-overlay"></div>
        </div>
      </section>




      {/* CTA Section */}
      <section className="C-cta">
        <h2>Benefits Beyond Health</h2>
        <p>
        Reach out to start crafting your unique experience.
        </p>
        <a href="mailto:luxurywellnessbynicola@gmail.com?subject=Corporate%20Inquiry" className="C-cta-button">Contact Nicola</a>
      </section>
    </main>

  );

}


