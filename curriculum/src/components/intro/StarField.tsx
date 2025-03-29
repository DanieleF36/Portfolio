import { useEffect, useRef } from 'react';

/**
 * StarField Component.
 *
 * This component renders an animated star field on a canvas.
 * It uses a canvas element to draw stars that move to create a parallax scrolling effect.
 * The stars are re-positioned when they exit the canvas, and the canvas size adapts to window resize events.
 *
 * @returns {JSX.Element} The StarField component.
 */
const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const stars: { x: number; y: number; z: number; size: number }[] = [];
    const numStars = 400;
    const maxDepth = 1000;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: (Math.random() - 0.5) * canvas.width * 2,
        y: (Math.random() - 0.5) * canvas.height * 2,
        z: Math.random() * maxDepth,
        size: 1 + Math.random()
      });
    }

    let animationFrame: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(3, 0, 20, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      stars.forEach(star => {
        star.z -= 0.5;

        if (star.z <= 0) {
          star.z = maxDepth;
          star.x = (Math.random() - 0.5) * canvas.width * 2;
          star.y = (Math.random() - 0.5) * canvas.height * 2;
        }

        const scale = maxDepth / (maxDepth + star.z);
        const x = centerX + star.x * scale;
        const y = centerY + star.y * scale;

        const opacity = Math.min(1, (maxDepth - star.z) / maxDepth);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, star.size * scale, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to bottom, #030014, #0F0728)',
        zIndex: 0
      }}
      className="pointer-events-none"
    />
  );  
};

export default StarField;