import React from 'react';
import type { TodoFilter } from '../hooks/use-todos';

interface FooterProps {
  count: number;
  filter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
  onClearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({ 
  count, 
  filter,
  onFilterChange,
  onClearCompleted 
}) => {
  if (count === 0) return null;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count}</strong> {count === 1 ? 'item' : 'items'} left
      </span>
      <ul className="filters">
        {(['all', 'active', 'completed'] as TodoFilter[]).map(f => (
          <li key={f}>
            <button
              className={filter === f ? 'selected' : ''}
              onClick={() => onFilterChange(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      <button 
        className="clear-completed"
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;