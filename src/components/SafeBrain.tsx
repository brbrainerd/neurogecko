'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

// Dynamically import Niivue to avoid Server-Side Rendering (SSR) errors
const NiivueCanvas = dynamic(() => import('./NiivueWrapper'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-slate-900 text-slate-400">
        <Loader2 className="w-8 h-8 animate-spin mr-2" />
        <span>Initializing WebGL...</span>
    </div>
  )
});

export const SafeBrain = ({ url }: { url: string }) => {
  // In a real Spectacle deck, we would use the 'useSteps' hook or similar
  // to detect if this slide is active, but for simplicity, we render on mount.
  return (
    <div className="h-[60vh] w-full border border-slate-700 rounded-xl overflow-hidden relative bg-black shadow-2xl">
       <NiivueCanvas url={url} />
       <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-xs text-slate-200 p-2 rounded border border-slate-800">
         Interactive Mode: Drag to Rotate | Scroll to Slice
       </div>
    </div>
  );
};
