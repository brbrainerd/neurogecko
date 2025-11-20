'use client';
import { useEffect, useRef } from 'react';
import { Niivue } from '@niivue/niivue';

interface NiivueWrapperProps {
  url: string;
}

const NiivueWrapper = ({ url }: NiivueWrapperProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const nv = new Niivue({
      loadingText: 'Loading Brain Scan...',
      backColor: [0, 0, 0, 1],
      // optimizing for context loss
      glContextBehavior: 'lose' 
    });
    
    nv.attachToCanvas(canvasRef.current);
    nv.loadVolumes([{ url }]);
    
    return () => {
        // Attempt to clean up WebGL context
        const gl = canvasRef.current?.getContext('webgl2');
        if (gl) {
             const ext = gl.getExtension('WEBGL_lose_context');
             if (ext) ext.loseContext();
        }
    };
  }, [url]);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full outline-none rounded-lg"
    />
  );
};

export default NiivueWrapper;

