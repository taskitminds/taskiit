import React from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      title: "Responsive Website Development",
      description:
        "We design and develop fast, visually appealing, and mobile-friendly websites that adapt seamlessly to all devices.",
      icon: "🌐",
    },
    {
      title: "Custom Web Applications",
      description:
        "From e-commerce platforms to enterprise-grade applications, we deliver tailored solutions that streamline your business operations.",
      icon: "💻",
    },
    {
      title: "Full-Stack Project Development",
      description:
        "Our expertise in front-end and back-end technologies ensures comprehensive solutions from design to deployment.",
      icon: "🔧",
    },
    {
      title: "Maintenance and Support",
      description:
        "We provide ongoing maintenance and support to ensure your digital solutions remain updated and perform at their best.",
      icon: "🛠️",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-intro">
          At Taskit, we offer a wide range of services to meet your digital needs. Whether you're looking to build a new project or enhance an existing one, we've got you covered!
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
