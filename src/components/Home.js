import React from "react";
import ImageCarousel from "./Carousel";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero-section text-center">
        <div>
          <h1>Welcome to Taskit</h1>
          <ImageCarousel />
          <h2>Your Gateway to Exceptional Full-Stack Solutions</h2>
          <p>At <b>Taskit</b>, we turn your ideas into reality with advanced full-stack solutions. We specialize in creating responsive, scalable, and user-friendly websites and apps tailored to your needs. Whether building your brand or enhancing your digital presence, we deliver solutions that inspire and engage.</p>
        </div>
        
        <div className="about-highlights">
        <h1>Who Are We?</h1>
          <p><b>Taskit</b> is a team of highly skilled developers, designers, and strategists dedicated to creating high-quality, scalable, and user-friendly digital solutions. With a strong foundation in full-stack development, we specialize in crafting websites, applications, and systems that are not only visually appealing but also technically robust. Whether you’re a startup looking to make your mark or an established business aiming to modernize, Taskit is here to empower your journey.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
