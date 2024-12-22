// Starbackground.js (or Starback.js)
import React from "react";
import styled from "styled-components";

const StarCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensures the canvas is behind all other content */
`;

const Starback = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Initialize star background (simple example)
    const stars = [];
    const numStars = 100;

    function createStars() {
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2,
          speed: Math.random() * 0.5 + 0.1,
        });
      }
    }

    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.beginPath();
      stars.forEach(star => {
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      });
      ctx.fill();
      requestAnimationFrame(animateStars);
    }

    createStars();
    animateStars();
  }, []);

  return <StarCanvas ref={canvasRef} />;
};

export default Starback;
