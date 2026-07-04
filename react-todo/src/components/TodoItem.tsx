import React, { useState } from 'react';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';

import type { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updates: Partial<Todo>) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleSave = () => {
    if (editTitle.trim()) {
      onUpdate(todo.id, { title: editTitle.trim() });
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
      <div className="flex items-center space-x-4 flex-1 min-w-0">
        <button
          onClick={() => onToggle(todo.id)}
          className={`h-6 w-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
            todo.isCompleted
              ? 'bg-[#EF5A3F] border-[#EF5A3F] text-white'
              : 'border-slate-300 text-transparent hover:border-slate-400'
          }`}
        >
          <CheckIcon sx={{ fontSize: 14, strokeWidth: 3 }} />
        </button>

        <div className="flex items-center space-x-2 flex-1 min-w-0">
          {isEditing ? (
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
              className="flex-1 px-1 py-0.5 text-base text-slate-700 border-b-2 border-[#EF5A3F] focus:outline-none"
              autoFocus
            />
          ) : (
            <span
              className={`text-base text-main font-normal truncate ${todo.isCompleted ? 'line-through opacity-40' : ''}`}
            >
              {todo.title}
            </span>
          )}

          {!isEditing && (
            <button
              onClick={() => onUpdate(todo.id, { isStarred: !todo.isStarred })}
              className={`shrink-0 transition-transform active:scale-95 ${todo.isStarred ? 'text-[#EF5A3F]' : 'text-slate-200 hover:text-slate-400'}`}
            >
              <StarIcon sx={{ fontSize: 18 }} />
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-3 ml-4 shrink-0">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="text-slate-400 hover:text-green-600 transition-colors"
            >
              <CheckIcon sx={{ fontSize: 18 }} />
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditTitle(todo.title);
              }}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <CloseIcon sx={{ fontSize: 18 }} />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <EditOutlinedIcon sx={{ fontSize: 18 }} />
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              <DeleteOutlinedIcon sx={{ fontSize: 18 }} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
