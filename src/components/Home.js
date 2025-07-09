import React from "react";
import "./Styles/Home.css"; // Link to the CSS below
import { Section } from "lucide-react";

import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <main className="home-container">
      <section className="intro">
        <div className="intro-content">
          <div className="image-overlay-wrapper">
            <img src={`${process.env.PUBLIC_URL}/images/happy.webp`} alt="Homescreen" className="intro-image" />
            <div className="image-overlay"></div>
          </div>
          <div className="intro-text">
            <img src={`${process.env.PUBLIC_URL}/images/sun.png`}  alt="doodlesun" className="sun-image-top" />
            <p>
              <i>luxurious wellness experiences that <b> inspire, restore and elevate</b> the mind, body and soul</i>
            </p>
          </div>
        </div>
      </section>

      {/* Creating a divide between the two sections*/}

      <section className="section-bar">
        <div className="section-bar-content">
          <div className="section-bar-line"></div>
          <h2 className="section-bar-title">Who We Are</h2>
          <div className="section-bar-line"></div>
        </div>
      </section>


      {/* About Nicola Section */}
      <section className="about-section">
        <div className="about-text">
          <h2>Elevated Wellness Experiences, Curated Just for You</h2>
          <p>
            At Luxury Wellness By Nicola, we specialise in providing elite wellness professionals that help to
            elevate your event to the next level. Whether you're planning a serene hen do, a restorative corporate retreat, 
            or adding a touch of calm to your wedding, we bring your vision to life with precision and care. <br></br><br></br>

            <b>The Way We Work:</b><br></br><br></br>

           <b> Handpicked Wellness Instructors</b><br></br><br></br>
            Need a sound healer, yoga teacher, or breathwork guide for a special occasion? 
            Simply tell us what you're looking for, and we'll source the perfect practitioner from our 
            trusted network—matched to your style, group size, and vibe. <br></br><br></br>

            No matter the format, we’re here to help you create a wellness experience that feels effortless, intentional, and beautifully aligned with your needs.
          </p>
        </div>
        <div className="about-image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/images/Yoga.webp`} alt="Nicola teaching yoga" className="about-image" />
          <div className="a-image-overlay"></div>
        </div>
      </section>


      {/* This creates a nice split between sections without being too in your face*/}
      <section className="section-bar">
        <div className="section-bar-content">
          <div className="section-bar-line"></div>
          <h2 className="section-bar-title">Bespoke Packages</h2>
          <div className="section-bar-line"></div>
        </div>
      </section>



      {/* Services Section */}
      <section className="services">
        <h2>
          We create bespoke luxury wellness packages <br /> and can cater for a variety of events
        </h2>
        <div className="services-grid">
          <div className="service-card">
            <h3><Link to="/weddings">Weddings</Link></h3>
            <p>Create space to recharge before your big day.</p>
          </div>
          <div className="service-card">
            <h3><Link to="/corporate">Corporate</Link></h3>
            <p>Invest in well-being to improve team focus and morale.</p>
          </div>
          <div className="service-card">
            <h3><Link to="/parties">Events</Link></h3>
            <p>Celebrate life’s moments in a mindful, healthy way.</p>
          </div>
        </div>
      </section>




      {/* CTA Section */}
      <section className="cta">
        <h2>Let’s Create Your Dream Wellness Event</h2>
        <p>
          Reach out to start crafting your unique experience.
        </p>
        <a href="mailto:luxurywellnessbynicola@gmail.com" className="cta-button">Contact Nicola</a>
      </section>
    </main>
  );
}

















