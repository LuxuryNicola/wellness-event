import React, { useState } from "react";
import "./Styles/About.css";



export default function AboutPage(){
  return (
    <main className="about-container">
      <section className="A-intro">
        <div className="A-intro-content">
        <div className="image-overlay-wrapper">
            <img src={`${process.env.PUBLIC_URL}/images/Bamboo.jpg`} alt="Mission visual" className="A-intro-image" />
            <div className="image-overlay"></div>
          </div>
          <div className="A-intro-text">
          <img src={`${process.env.PUBLIC_URL}/images/book.png`} alt="doodlebook" className="book-image-top" />
            <p>
              <b>Mission Statement</b><br></br>
              <i>At the heart of everything we do is the belief that wellness and celebration 
                can beautifully coexist. Our mission is to create meaningful, joy-filled events that nurture the soul, 
                support wellbeing, and honour life's most special moments—with peace, intention, and a touch of magic.
              </i>
            </p>
          </div>
        </div>
      </section>


      {/* Creating a divide between the two sections*/}

      <section className="section-bar">
        <div className="section-bar-content">
          <div className="section-bar-line"></div>
          <h2 className="section-bar-title">My Story</h2>
          <div className="section-bar-line"></div>
        </div>
      </section>

      {/* Corporate About */}
      <section className="A-about-section">
        <div className="A-about-text">
          <h2>Wellness & Wellbeing</h2>
          <p>
          Hi, I'm Nicola Arnold—qualified yoga teacher, experienced event curator, and passionate advocate for wellness. 
          With over six years in the events industry and a deep love for creating unforgettable experiences, 
          I founded this company to bring people together in ways that feel joyful, intentional, and nourishing. 
          Whether it's a wedding, a retreat, a corporate gathering or a celebration just because—I'm here to help you make memories that feel as good as they look.
          Because looking after ourselves shouldn't mean missing out on life's best moments.
          </p>
        </div>

        <div className="A-about-image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/images/Yoga.jpg`} alt="forest" className="A-about-image" />
          <div className="A-image-overlay"></div>
        </div>
      </section>




      {/* CTA Section */}
      <section className="A-cta">
        <h2>Benefits Beyond Health</h2>
        <p>
        Reach out to start crafting your unique experience. 
        </p>
        <a href="mailto:luxurywellnessbynicola@gmail.com" className="A-cta-button">Contact Nicola</a>
      </section>
    </main>

  );

}







