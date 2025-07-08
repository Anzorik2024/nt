import React from 'react';
import TodoItem from './todo-item';
import type { Todo, TodoFilter } from '../hooks/use-todos';

interface TodoListProps {
  todos: Todo[];
  filter: TodoFilter;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, filter, onToggle, onRemove }) => {
  const filteredTodos = filter === 'all'
    ? todos
    : filter === 'active'
      ? todos.filter(todo => !todo.completed)
      : todos.filter(todo => todo.completed);

  if (todos.length === 0) return null;

  return (
    <section className="main">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;