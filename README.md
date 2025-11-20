# NeuroGecko

**State-of-the-Art Neuroscience Presentation Platform (Q4 2025)**

NeuroGecko is a "Presentation-as-Code" platform built with Next.js 15, Spectacle, and Niivue. It is designed to solve the specific challenges of rendering high-performance neuroimaging data (NIfTI volumes) within a web-based slide deck.

## Features

- **Interactive Neuroimaging**: Embed 3D MRI volumes that users can rotate and slice live.
- **Crash-Resistant**: Smart `SafeBrain` component manages WebGL contexts to prevent browser crashes.
- **Live Coding**: Edit and run React code directly within the slides.
- **Real-time Polling**: Backend-powered audience interaction (Convex).
- **SOTA Stack**: Next.js 15 (App Router), Spectacle 11, Niivue, Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm

### Installation

```bash
git clone https://github.com/brbrainerd/neurogecko.git
cd neurogecko
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev

# Start the Convex backend (required for polling)
npx convex dev
```

### Testing

NeuroGecko includes a comprehensive testing suite for SOTA verification.

```bash
# Run Unit Tests (Vitest)
pnpm test

# Run End-to-End Tests (Playwright)
# Requires pnpm dev to be running or handled by Playwright
pnpm exec playwright test
```

## Deployment

Deploy to Vercel for best results (Edge Network Headers are pre-configured).

```bash
vercel deploy --prod
```

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for details on the modular component design and storage strategy.
