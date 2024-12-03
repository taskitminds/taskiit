import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css"; // Optional for custom styling
import img1 from "./1stimg.png";
import img2 from "./2ndimg.png";
import img3 from "./3rdimg.png";
import img4 from "./4thimg.png";
import img5 from "./5thimg.png";

function ImageCarousel() {
  const slides = [
    { image: img1, },
    { image: img2, },
    { image: img3, },
    { image: img4,},
    { image: img5,  },
  ];

  return (
    <div className="carousel-container">
      <Carousel fade={true} interval={4000} pause="hover">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={slide.image} alt={`${slide.title}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
