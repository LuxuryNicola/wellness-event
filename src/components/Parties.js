import React, { useState } from "react";
import "./Styles/Parties.css";



export default function PartyPage() {
  return (
    <main className="party-container">
      <section className="P-intro">
        <div className="P-intro-content">
          <div className="image-overlay-wrapper">
            <img src={`${process.env.PUBLIC_URL}/images/Lake.webp`} alt="Mission visual" className="P-intro-image" />
            <div className="image-overlay"></div>
          </div>
          <div className="P-intro-text">
            <img src={`${process.env.PUBLIC_URL}/images/cake.png`} alt="doodlecoffee" className="cake-image-top" />
            <p>
              <i>Mindful Moments, Memorable Events</i>
            </p>
          </div>
        </div>

      </section>


      {/* Creating a divide between the two sections*/}

      <section className="section-bar">
        <div className="section-bar-content">
          <div className="section-bar-line"></div>
          <h2 className="section-bar-title">Lifes Moments</h2>
          <div className="section-bar-line"></div>
        </div>
      </section>

      {/* Corporate About */}
      <section className="P-about-section">
        <div className="P-about-text">
          <h2>Curated Wellness for Any Occasion</h2>
          <p>
            Whether you're planning a birthday celebration, retreat, private gathering or taking some time to enjoy life with a little more breathing space.
            We will bring the calm, connection, and luxury to that day.<br></br><br></br>

            We work with you to design wellness experiences that suit your event’s purpose and energy. 
            From sourcing top talent for your already established event to working with you to create something beautiful. <br></br><br></br>

            If this service is right for you please reach out and include:<br></br><br></br>

            <i><b>Dates</b></i><br></br>

            <i><b>Group sizes</b></i> <br></br>

           <i><b> Indoor or outdoor venues</b></i> <br></br>

            <i><b>One-off bookings or full event planning</b></i> <br></br><br></br>

            We’re here to make sure your wellness element is seamlessly integrated, beautifully delivered, and deeply memorable—whatever the occasion.
          </p>
        </div>

        <div className="P-about-image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/images/waterfall.webp`} alt="forest" className="P-about-image" />
          <div className="P-image-overlay"></div>
        </div>
      </section>




      {/* CTA Section */}
      <section className="P-cta">
        <h2>Benefits Beyond Health</h2>
        <p>
        Reach out to start crafting your unique experience.
        </p>
        <a href="mailto:luxurywellnessbynicola@gmail.com?subject=Events%20Inquiry" className="P-cta-button">Contact Nicola</a>
      </section>
    </main>

  );

}


