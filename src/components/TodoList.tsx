import React from 'react';

import { TodoItem } from './TodoItem';
import type { Todo } from '../types/todo';

interface TodoItemProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updates: Partial<Todo>) => void;
}

export const TodoList: React.FC<TodoItemProps> = ({
  todos,
  onToggle,
  onDelete,
  onUpdate,
}) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400 font-normal text-[15px]">
        No tasks for today. Add one above!
      </div>
    );
  }

  return (
    <div className="space-y-1 max-h-[320px] overflow-y-auto pr-1 scrollbar-thin">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};
