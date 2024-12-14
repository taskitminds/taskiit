import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  // State variables to store form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, subject, message };
    setLoading(true); // Set loading to true when form submission starts

    try {
      const response = await fetch("https://taskit-backend-kx7u.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false); // Set loading to false when request completes
      alert(data.message); // Display success message
    } catch (error) {
      setLoading(false); // Set loading to false in case of error
      console.error("Error:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  const teamMembers = [
    {
      name: "Yuvaprajan I",
      title: "Full-Stack Developer",
      photo: require("./yuvaprajan.png"), // Ensure correct path
    },
    {
      name: "Sanjitsriram H M",
      title: "Full-Stack Developer",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Ragavendra M",
      title: "Full-Stack Developer",
      photo: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="contact-title">Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.photo} alt={member.name} className="team-photo" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-title">{member.title}</p>
            </div>
          ))}
        </div>

        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-intro">
          We'd love to hear from you! Whether you have a question about our services or want to start a project, feel free to reach out.
        </p>
        <div className="contact-grid">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter the subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>

          {/* Loading Popup */}
          {loading && (
            <div className="loading-overlay">
              <div className="loading-spinner"></div>
              <p>Sending your message...</p>
            </div>
          )}

          <div className="contact-details">
            <h3>Contact Information</h3>
            <p>
              <i className="fas">&#xf0e0;</i> taskit.minds@gmail.com
            </p>
            <p>
              <i className="fas fa-phone"></i> +91 9585648429
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> (Address will be
              available soon.)
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093714!2d144.95592331531895!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c8ab657c9bc!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1633654376490!5m2!1sen!2sau"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
