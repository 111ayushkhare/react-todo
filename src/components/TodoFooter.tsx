import React from 'react';

interface TodoFooterProps {
  count: number;
}

export const TodoFooter: React.FC<TodoFooterProps> = ({ count }) => {
  return (
    <div className="text-sm text-muted mt-4 border-t border-border-line pt-4 transition-colors duration-200">
      <span className="text-slate-500 font-normal text-[14px]">
        {count} {count === 1 ? 'task' : 'tasks'} total
      </span>
    </div>
  );
};
