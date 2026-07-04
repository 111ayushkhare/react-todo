import React, { useState } from 'react';

interface TodoInputProps {
  onAdd: (title: string, description?: string) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 mb-6">
      <input
        type="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="add your task here"
        className="flex-1 px-5 py-3 rounded-2xl bg-input-bg text-main placeholder-muted border border-border-line focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-all duration-200"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-brand-orange text-white font-semibold rounded-2xl hover:opacity-90 active:scale-95 transition-all cursor-pointer"
      >
        Add
      </button>
    </form>
  );
};
