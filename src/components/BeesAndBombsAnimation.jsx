import React, { useEffect, useRef } from 'react';

const BeesAndBombsAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    const gridSize = 100; // Increased grid size for smaller, denser dots
    let time = 0;

    const animate = () => {
      time += 0.015; // Increased speed
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // More transparent background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cellSize = Math.min(canvas.width, canvas.height) / gridSize;

      for (let x = 0; x < canvas.width / cellSize; x++) {
        for (let y = 0; y < canvas.height / cellSize; y++) {
          const centerX = x * cellSize + cellSize / 2;
          const centerY = y * cellSize + cellSize / 2;

          const wave1 = Math.sin(x * 0.25 + time) * Math.cos(y * 0.25 + time); // Slightly increased frequency
          const wave2 = Math.cos(x * 0.35 - time * 0.6) * Math.sin(y * 0.35 - time * 0.6); // Slightly increased frequency and speed
          const combinedWave = (wave1 + wave2) / 2;

          const size = (combinedWave + 1) * 0.1 * cellSize; // Much smaller dots

          ctx.fillStyle = `rgba(250, 222, 41, ${(combinedWave + 1) / 3})`; // Slightly more transparent
          ctx.beginPath();
          ctx.arc(centerX, centerY, size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default BeesAndBombsAnimation;
