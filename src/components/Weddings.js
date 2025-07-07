import React, { useState } from "react";
import "./Styles/Weddings.css";



export default function WeddingPage() {
  return (
    <main className="weddings-container">
      <section className="W-intro">
        <div className="W-intro-content">
          <div className="image-overlay-wrapper">
            <img src={`${process.env.PUBLIC_URL}/images/beach.webp`} alt="Mission visual" className="W-intro-image" />
            <div className="image-overlay"></div>
          </div>
          <div className="W-intro-text">
            <img src={`${process.env.PUBLIC_URL}/images/cheers.png`} alt="doodlecoffee" className="cheers-image-top" />
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
          <h2 className="section-bar-title">The Big Day</h2>
          <div className="section-bar-line"></div>
        </div>
      </section>

      {/* Corporate About */}
      <section className="W-about-section">
        <div className="W-about-text">
          <h2>Wellness That Complements The Occasion</h2>
          <p>
           We  want to help you and the people you love stay relaxed, and glowing—before, during, and after the big day. <br></br><br></br>

            Whether you're organising a wellness-focused hen or stag do, want a morning yoga session for your bridal party, 
            or dream of a sound bath to calm nerves before going down the aisle, we’ll help you curate the perfect experience. <br></br><br></br>

            <b>We can support with:</b><br></br><br></br>

            <i>Planning and curating wellness-focused hen/stag parties</i><br></br>

            <i>Sourcing instructors for private sessions (yoga, pilates, reiki, sound healing, etc.)</i><br></br>

            <i>Restorative sessions post-celebration</i><br></br><br></br>

            From quiet moments of calm to playful pre-wedding wellness, 
            we’ll help you create experiences that feel nourishing, joyful, and completely you. <br></br><br></br>
            <b>Contact us to begin the wellness journey</b>

          </p>
        </div>

        <div className="W-about-image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/images/loch.webp`} alt="forest" className="W-about-image" />
          <div className="W-image-overlay"></div>
        </div>
      </section>




      {/* CTA Section */}
      <section className="W-cta">
        <h2>Benefits Beyond Health</h2>
        <p>
        Reach out to start crafting your unique experience.
        </p>
        <a href="mailto:luxurywellnessbynicola@gmail.com?subject=Wedding%20Inquiry" className="W-cta-button">Contact Nicola</a>
      </section>
    </main>

  );

}
