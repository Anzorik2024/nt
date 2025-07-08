import React, { useEffect } from 'react';
import type { Todo } from '../hooks/use-todos';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
  // Обработчик для клавиатуры
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const focusedElement = document.activeElement;
      if (focusedElement?.classList.contains('todo-text') && e.key === ' ') {
        onToggle(todo.id);
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onToggle, todo.id]);

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          aria-label={todo.completed ? 'Mark as active' : 'Mark as completed'}
        />
        <label
          className="todo-text"
          onClick={() => onToggle(todo.id)}
          onKeyDown={(e) => e.key === 'Enter' && onToggle(todo.id)}
          tabIndex={0}
        >
          {todo.text}
        </label>
        <button 
          className="destroy"
          onClick={() => onRemove(todo.id)}
          aria-label="Delete task"
        />
      </div>
    </li>
  );
};

export default TodoItem;