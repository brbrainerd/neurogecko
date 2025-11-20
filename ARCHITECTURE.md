# NeuroGecko Architecture & Storage Strategy

## Modular Component Architecture

NeuroGecko follows a "Presentation-as-Code" philosophy using a modular React component architecture. This allows for high reusability and extensibility for future presentations.

### Core Components
- **`SafeBrain`**: A specialized wrapper for `Niivue` that handles WebGL context loss, lazy loading, and memory management. It ensures that high-resolution neuroimaging data can be displayed without crashing the browser.
- **`Mermaid`**: Encapsulates diagramming logic, preventing hydration errors common with SSR frameworks like Next.js.
- **`LiveCode`**: Provides an interactive coding environment within slides, enabling real-time demonstrations of algorithms or data processing.
- **`Poll`**: A real-time interactive polling component powered by a backend (Convex), demonstrating how dynamic audience engagement can be integrated into the deck.

### Extensibility
To create a new presentation:
1. Duplicate `src/app/page.tsx` or create a new route.
2. Import the core components.
3. Compose slides using the `Spectacle` framework.
4. Customize the theme in `src/app/globals.css` or via the Spectacle theme object.

## Long-term Storage Strategy

For a production-grade deployment, especially when dealing with large neuroimaging datasets (NIfTI, DICOM) which can exceed hundreds of megabytes, storing files directly in the repository or Vercel blob storage may not be cost-effective or performant.

### Recommendation: Cloudflare R2
We recommend **Cloudflare R2** (or AWS S3 compatible storage) for the following reasons:
- **Egress Fees**: R2 has zero egress fees, which is critical for high-bandwidth applications like volumetric rendering.
- **Performance**: Edge integration allows for low-latency data fetching.
- **CORS Support**: Essential for WebGL based rendering (`crossOrigin` headers are required).

### Implementation Plan
1. **Upload Data**: Store `.nii.gz` and `.mp4` files in an R2 bucket.
2. **Configure CORS**: Set CORS rules on the bucket to allow requests from the NeuroGecko domain.
3. **Update Components**: Pass the R2 public URLs to `SafeBrain` and video components.
   ```tsx
   <SafeBrain url="https://cdn.neurogecko.org/data/subject_001.nii.gz" />
   ```

### Current State
The demo currently uses public URLs for sample data. For persistent user data (like poll results), we use **Convex**, which offers a seamless real-time database experience with built-in caching and subscription support.

