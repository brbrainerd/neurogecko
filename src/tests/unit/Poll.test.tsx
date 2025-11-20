import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Poll } from '../../components/Poll';

// Mock Convex hooks
vi.mock('convex/react', () => ({
  useQuery: vi.fn(),
  useMutation: vi.fn(() => vi.fn()),
}));

describe('Poll Component', () => {
  it('renders vote buttons', () => {
    render(<Poll />);
    expect(screen.getAllByText(/Vote/i)).toHaveLength(3);
  });

  it('renders the chart container', () => {
    const { container } = render(<Poll />);
    expect(container.querySelector('.recharts-responsive-container')).toBeInTheDocument();
  });
});

