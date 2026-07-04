// src/components/TodoHeader.tsx
import React from 'react';

export const TodoHeader: React.FC = () => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-extrabold text-main flex items-center gap-2 tracking-tight transition-colors duration-200">
        To-Do List{' '}
        <span role="img" aria-label="clipboard">
          📋
        </span>
        <span role="img" aria-label="pencil">
          📝
        </span>
      </h1>
    </div>
  );
};
