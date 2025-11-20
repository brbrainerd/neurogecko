'use client';

import {
  Deck,
  Slide,
  Heading,
  Text,
  FlexBox,
  Box,
  FullScreen,
  Progress,
  UnorderedList,
  ListItem,
  Appear,
  CodePane,
  Image
} from 'spectacle';
import { SafeBrain } from '@/components/SafeBrain';
import { Mermaid } from '@/components/Mermaid';
import { DataChart } from '@/components/DataChart';
import { Poll } from '@/components/Poll';
import { LiveCode } from '@/components/LiveCode';
import { DEMO_ASSETS, SITE_CONFIG } from '@/lib/constants';
import React from 'react';

// Custom Dark Neuroscience Theme
const theme = {
  colors: {
    primary: '#f1f5f9',    // Text (Slate 100)
    secondary: '#0f172a',  // Background (Slate 900)
    tertiary: '#38bdf8',   // Accents (Sky 400)
    quaternary: '#94a3b8', // Muted text
  },
  fonts: {
    header: 'var(--font-sans), sans-serif',
    text: 'var(--font-sans), sans-serif',
    monospace: 'var(--font-mono), monospace',
  },
  fontSizes: {
    h1: '72px',
    h2: '56px',
    h3: '40px',
    text: '28px',
    monospace: '24px',
  }
};

// Template for Footer/Header on every slide
const template = () => (
  <FlexBox justifyContent="space-between" position="absolute" bottom={0} width={1} padding={2}>
    <Box padding="0 1em">
      <FullScreen color="#38bdf8" />
    </Box>
    <Box padding="1em">
      <Progress color="#38bdf8" />
    </Box>
  </FlexBox>
);

export default function Presentation() {
  return (
    <Deck theme={theme} template={template}>

      {/* Slide 1: Title */}
      <Slide backgroundColor="secondary">
        <FlexBox height="100%" flexDirection="column" alignItems="center" justifyContent="center">
          <Heading fontSize="h1" color="tertiary">Neural Dynamics</Heading>
          <Text color="primary" fontSize="h3">Q4 2025 Research Review</Text>
          <Text color="quaternary" fontSize="text">Presented by NeuroGecko</Text>
        </FlexBox>
      </Slide>

      {/* Slide 2: Architecture (Mermaid) */}
      <Slide backgroundColor="secondary">
        <Heading fontSize="h3" color="tertiary">Pathway Architecture</Heading>
        <Text color="primary">The "Presentation-as-Code" Stack</Text>
        <Mermaid chart={`
          graph LR
          A[Next.js 15] -->|Renders| B(Spectacle Deck)
          B -->|Lazy Loads| C{SafeBrain}
          C -->|COOP/COEP| D[SharedArrayBuffer]
          D -->|WebGL2| E[Niivue Canvas]
          style A fill:#1e293b,stroke:#38bdf8,stroke-width:2px,color:#f1f5f9
          style B fill:#1e293b,stroke:#38bdf8,stroke-width:2px,color:#f1f5f9
          style C fill:#334155,stroke:#38bdf8,stroke-width:2px,color:#f1f5f9
          style D fill:#334155,stroke:#38bdf8,stroke-width:2px,color:#f1f5f9
          style E fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#f1f5f9
        `} />
      </Slide>

      {/* Slide 3: The Challenge */}
      <Slide backgroundColor="secondary">
        <Heading fontSize="h3" color="tertiary">The WebGL Constraint</Heading>
        <FlexBox flexDirection="column" alignItems="flex-start" padding="20px">
          <Text color="primary">Why traditional decks fail with Neuroimaging:</Text>
          <UnorderedList color="primary">
            <Appear><ListItem>Browser Context Limit (~16 WebGL contexts)</ListItem></Appear>
            <Appear><ListItem>Memory Leaks from large NIfTI volumes</ListItem></Appear>
            <Appear><ListItem>Security Headers (COOP/COEP) breaking iframes</ListItem></Appear>
            <Appear><ListItem><strong>Solution:</strong> Lazy-loading and strict disposal.</ListItem></Appear>
          </UnorderedList>
        </FlexBox>
      </Slide>

      {/* Slide 4: Live Code */}
      <Slide backgroundColor="secondary">
        <Heading fontSize="h3" color="tertiary">Live Code Demo</Heading>
        <Text color="quaternary" fontSize="text">Editable React Components in Slide</Text>
        <LiveCode
          code={`// Interactive Component Logic
const BrainState = () => {
  const [active, setActive] = useState(false);
  return (
    <button
      onClick={() => setActive(!active)}
      style={{
        background: active ? '#38bdf8' : '#334155',
        padding: '1rem',
        borderRadius: '0.5rem',
        color: 'white'
      }}
    >
      Cortex Status: {active ? 'FIRING' : 'RESTING'}
    </button>
  );
}`}
        />
      </Slide>

      {/* Slide 5: Patient Data */}
      <Slide backgroundColor="secondary">
        <Heading fontSize="h3" color="tertiary">Temporal Analysis</Heading>
        <Text color="primary">Patient 001 - Signal Response</Text>
        <DataChart />
      </Slide>

      {/* Slide 6: Neuroimaging Intro */}
      <Slide backgroundColor="secondary">
        <FlexBox height="100%" flexDirection="column" alignItems="center" justifyContent="center">
          <Heading fontSize="h2" color="tertiary">Structural Imaging</Heading>
          <Text color="primary">High-Performance WebGL2 Rendering</Text>
          <div className="h-1 w-24 bg-sky-400 mt-8 rounded"></div>
        </FlexBox>
      </Slide>

      {/* Slide 7: Interactive MRI */}
      <Slide backgroundColor="secondary">
        <Heading fontSize="h3" color="tertiary">Subject MNI152</Heading>
        <Box padding="10px">
           {/* Using a reliable CDN for the example NIfTI */}
           <SafeBrain url={DEMO_ASSETS.BRAIN_MNI152} />
        </Box>
      </Slide>

      {/* Slide 8: Video Analysis */}
      <Slide backgroundColor="secondary">
        <Heading fontSize="h3" color="tertiary">Volumetric Video</Heading>
        <FlexBox justifyContent="center" alignItems="center" height="500px">
            {/* Standard HTML video to test headers */}
            <video
                controls
                className="w-full h-full rounded-xl border border-slate-700 shadow-2xl"
                crossOrigin="anonymous"
            >
                <source src={DEMO_ASSETS.VIDEO_BUNNY} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </FlexBox>
      </Slide>

      {/* Slide 9: Interactive Poll */}
      <Slide backgroundColor="secondary">
        <Heading fontSize="h3" color="tertiary">Audience Feedback</Heading>
        <Text color="primary">Which modality shows the most promise?</Text>
        <Box padding="20px">
            <Poll />
        </Box>
      </Slide>

      {/* Slide 10: Conclusion */}
      <Slide backgroundColor="secondary">
        <FlexBox height="100%" flexDirection="column" alignItems="center" justifyContent="center">
          <Heading fontSize="h2" color="tertiary">Thank You</Heading>
          <Text color="primary">NeuroGecko v1.0</Text>
          <Box padding="20px" className="flex flex-col gap-4 items-center">
            <Text fontSize="24px" color="quaternary">{SITE_CONFIG.repo}</Text>
            <Text fontSize="24px" color="quaternary">Deployed on Vercel Edge Network</Text>
          </Box>
        </FlexBox>
      </Slide>

    </Deck>
  );
}
