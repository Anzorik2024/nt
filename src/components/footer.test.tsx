import { describe, it,vi, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer', () => {
 
  it('calls filter change handler', () => {
    const mockFilterChange = vi.fn();
    render(
      <Footer 
        count={3} 
        filter="all" 
        onFilterChange={mockFilterChange} 
        onClearCompleted={vi.fn()} 
      />
    );
    
    fireEvent.click(screen.getByText('Active'));
    expect(mockFilterChange).toHaveBeenCalledWith('active');
    
    fireEvent.click(screen.getByText('Completed'));
    expect(mockFilterChange).toHaveBeenCalledWith('completed');
  });

  it('calls clear completed handler', () => {
    const mockClearCompleted = vi.fn();
    render(
      <Footer 
        count={2} 
        filter="all" 
        onFilterChange={vi.fn()} 
        onClearCompleted={mockClearCompleted} 
      />
    );
    
    fireEvent.click(screen.getByText('Clear completed'));
    expect(mockClearCompleted).toHaveBeenCalled();
  });

  it('highlights active filter', () => {
    render(
      <Footer 
        count={2} 
        filter="active" 
        onFilterChange={vi.fn()} 
        onClearCompleted={vi.fn()} 
      />
    );
    
    const activeButton = screen.getByText('Active');
    expect(activeButton).toHaveClass('selected');
    
    const allButton = screen.getByText('All');
    expect(allButton).not.toHaveClass('selected');
  });
});