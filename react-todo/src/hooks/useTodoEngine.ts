import { useState, useEffect } from 'react';

import type { Todo } from '../types/todo';

export const useTodoEngine = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const item = window.localStorage.getItem('workspace-todos-native');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error('Failed to parse local storage todos:', error);
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(
      'workspace-todos-native',
      JSON.stringify(todos)
    );
  }, [todos]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      isCompleted: false,
      isStarred: false,
      createdAt: new Date(Date.now()),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const updateTodo = (id: string, updates: Partial<Todo>) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
  };
};
