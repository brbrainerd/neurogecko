import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SafeBrain } from '../../components/SafeBrain';

// Mock NiivueWrapper dynamic import
vi.mock('../../components/NiivueWrapper', () => ({
  default: () => <canvas data-testid="niivue-canvas" />,
}));

describe('SafeBrain Component', () => {
  it('renders the container', () => {
    render(<SafeBrain url="test.nii.gz" />);
    // Check for the text inside the container
    expect(screen.getByText(/Interactive Mode/i)).toBeInTheDocument();
  });
});

