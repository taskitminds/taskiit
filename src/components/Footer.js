import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h3>About Taskit</h3>
            <p>
              Taskit is dedicated to crafting innovative and scalable solutions. We combine cutting-edge technology with creative design to bring your ideas to life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#/about">About Us</a></li>
              <li><a href="#/services">Services</a></li>
              <li><a href="#/portfolio">Portfolio</a></li>
              <li><a href="#/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><i class="fas">&#xf0e0;</i> taskit.minds@gmail.com</p> {/*unicode for E-Mail symbol = &#xf0e0; */}
            <p><i class="fas fa-phone"></i> +91 9585648429</p>
            <p><i class="fas fa-map-marker-alt"></i>(Address will available as soon.)</p>
          </div>

          {/* Social Media Links */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/__taskit__" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com/@taskit-w1e?si=BZpPl_SRwOPnTwzo" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://t.me/taskkit" target="_blank" rel="noreferrer">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Taskit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
