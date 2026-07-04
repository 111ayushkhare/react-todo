import { useState, useEffect } from 'react';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useTodoEngine } from './hooks/useTodoEngine';
import { TodoHeader, TodoInput, TodoList, TodoFooter } from './components';

export default function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, updateTodo } =
    useTodoEngine();
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen w-full bg-app-bg flex flex-col items-center justify-center p-4 transition-colors duration-200">
      <div className="relative bg-card-bg border border-border-line rounded-3xl shadow-2xl w-full max-w-xl p-8 min-h-[500px] flex flex-col justify-between transition-colors duration-200">
        <button
          onClick={() => setIsDark(!isDark)}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className="absolute top-6 right-6 p-2.5 rounded-xl bg-input-bg border border-border-line text-main hover:bg-border-line active:scale-95 transition-all cursor-pointer flex items-center justify-center"
        >
          {isDark ? (
            <LightModeIcon sx={{ fontSize: 20 }} className="text-yellow-400" />
          ) : (
            <DarkModeIcon sx={{ fontSize: 20 }} className="text-slate-700" />
          )}
        </button>

        <div>
          <div className="pr-12">
            <TodoHeader />
          </div>
          <TodoInput onAdd={addTodo} />
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        </div>
        <TodoFooter count={todos.length} />
      </div>
    </div>
  );
}
