import React from 'react';

interface TodoFooterProps {
  count: number;
}

export const TodoFooter: React.FC<TodoFooterProps> = ({ count }) => {
  return (
    <div className="pt-6 border-t border-slate-100 mt-6 text-left">
      <span className="text-slate-500 font-normal text-[14px]">
        {count} {count === 1 ? 'task' : 'tasks'} total
      </span>
    </div>
  );
};
