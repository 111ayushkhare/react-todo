import React, { useState } from 'react';

interface TodoInputProps {
  onAdd: (title: string, description?: string) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) {
      return;
    }

    onAdd(title);
    setTitle('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-slate-100 rounded-full p-1 pl-5 mb-6 focus-within:ring-2 focus-within:ring-orange-500/20 transition-all"
    >
      <input
        type="text"
        placeholder="add your task here"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        className="w-full bg-transparent border-none text-slate-700 placeholder-slate-400 focus:outline-none text-[15px]"
      />
      <button
        type="submit"
        className="bg-[#EF5A3F] text-white font-medium px-8 py-3 rounded-full hover:bg-[#db4f36] transition-colors shadow-sm"
      >
        Add
      </button>
    </form>
  );
};
