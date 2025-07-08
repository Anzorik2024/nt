import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoItem from './todo-item';
import type { Todo } from '../hooks/use-todos';

const mockTodo: Todo = {
  id: '1',
  text: 'Test task',
  completed: false,
};

describe('TodoItem', () => {
  it('displays task text', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={vi.fn()} 
        onRemove={vi.fn()} 
      />
    );
    
    expect(screen.getByText('Test task')).toBeInTheDocument();
  });

  it('toggles status when text is clicked', () => {
    const mockToggle = vi.fn();
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={mockToggle} 
        onRemove={vi.fn()} 
      />
    );
    
    fireEvent.click(screen.getByText('Test task'));
    expect(mockToggle).toHaveBeenCalledWith('1');
  });

  it('deletes task when delete button is clicked', () => {
    const mockRemove = vi.fn();
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={vi.fn()} 
        onRemove={mockRemove} 
      />
    );
    
    fireEvent.mouseOver(screen.getByText('Test task'));
    fireEvent.click(screen.getByLabelText('Delete task'));
    expect(mockRemove).toHaveBeenCalledWith('1');
  });
});