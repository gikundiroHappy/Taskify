import React, { useState } from "react";
import InputField from "./components/inputField";
import { Todo } from "./model";
import TodoList from "./components/todolist";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);
  return (
    <div
      className="pt-10 bg-indigo-300 h-screen font-abc space-y-10
    sm:bg-yellow-300 md:bg-green-300 lg:bg-pink-300 xl:bg-blue-300 2xl:bg-red-300"
    >
      <h1 className="text-center text-4xl">Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
