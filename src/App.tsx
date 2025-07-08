import React, { useState } from 'react';
import Header from './components/header';
import TodoList from './components/todo-list';
import Footer from './components/footer';
import useTodos from './hooks/use-todos';
import type { TodoFilter } from './hooks/use-todos';
import './App.css';

const App: React.FC = () => {
  const {
    todos,
    activeTodos,
    addTodo,
    toggleTodo,
    removeTodo,
    clearCompleted
  } = useTodos();

  const [filter, setFilter] = useState<TodoFilter>('all');

  return (
    <div className="todoapp">
      <Header onAdd={addTodo} />
      
      {todos.length > 0 && (
        <>
          <TodoList 
            todos={todos} 
            filter={filter}
            onToggle={toggleTodo} 
            onRemove={removeTodo} 
          />
          <Footer 
            count={activeTodos.length} 
            filter={filter}
            onFilterChange={setFilter}
            onClearCompleted={clearCompleted} 
          />
        </>
      )}
    </div>
  );
};

export default App;