import React, { useState, useRef } from 'react';

interface HeaderProps {
  onAdd: (text: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onAdd }) => {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(text);
    setText('');
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          value={text}
          onChange={e => setText(e.target.value)}
          autoFocus
        />
      </form>
    </header>
  );
};

export default Header;