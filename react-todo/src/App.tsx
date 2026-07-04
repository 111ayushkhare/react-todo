import { useTodoEngine } from './hooks/useTodoEngine';
import { TodoHeader, TodoInput, TodoList, TodoFooter } from './components';

export default function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, updateTodo } =
    useTodoEngine();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E1B4B] to-[#311042] flex items-center justify-center p-4 antialiased">
      <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-2xl p-10 min-h-[500px] flex flex-col justify-between">
        <div>
          <TodoHeader />
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
