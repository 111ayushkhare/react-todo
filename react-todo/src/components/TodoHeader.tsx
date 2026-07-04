import React from 'react';

export const TodoHeader: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 mb-8">
      <h1 className="text-[28px] font-bold text-[#0F172A] tracking-tight">
        To-Do List
      </h1>
      <span className="text-[24px]" role="img" aria-label="notebook">
        📋✏️
      </span>
    </div>
  );
};
