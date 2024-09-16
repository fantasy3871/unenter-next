'use client';
import { useEffect, useRef } from 'react';

export default function NoiseMap() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Function to resize the canvas to match its parent element's size
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    }
  };

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="h-full">
      <canvas ref={canvasRef} width={800} height={600} />
    </div>
  );
}
