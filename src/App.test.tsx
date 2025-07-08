import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from './App';

describe('App component', () => {
  it('renders header', () => {
    render(<App />);
    expect(screen.getByText('todos')).toBeInTheDocument();
  });
});