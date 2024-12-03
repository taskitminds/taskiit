import React from "react";
import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully functional e-commerce website with features like product catalogs, user authentication, and payment integration.",
      image: "https://via.placeholder.com/300x200",
      link: "https://ecommerce.example.com",
    },
    {
      title: "Task Management App",
      description: "A user-friendly task management application with features like drag-and-drop, calendar views, and real-time updates.",
      image: "https://via.placeholder.com/300x200",
      link: "https://taskapp.example.com",
    },
    {
      title: "Portfolio Website",
      description: "A sleek and responsive personal portfolio website showcasing skills, projects, and achievements.",
      image: "https://via.placeholder.com/300x200",
      link: "https://portfolio.example.com",
    },
    {
      title: "Restaurant Booking System",
      description: "An online booking platform for restaurants with table reservation, menu previews, and customer reviews.",
      image: "https://via.placeholder.com/300x200",
      link: "https://restaurantbooking.example.com",
    },
  ];

  return (
    <section className="portfolio-section">
      <div className="container">
        <h2 className="portfolio-title">Our Portfolio</h2>
        <p className="portfolio-intro">
          Take a look at some of the projects we’ve had the pleasure to work on. Each one reflects our commitment to quality, innovation, and user satisfaction.
        </p>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-image"
              />
              <h3 className="portfolio-project-title">{project.title}</h3>
              <p className="portfolio-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-link"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
