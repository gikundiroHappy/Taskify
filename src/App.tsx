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
    "
    >
      <h1 className="text-center text-4xl">Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      {/* <p className="center bg-red-300 p-40">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
        provident accusamus. Eius laborum tenetur eum ad pariatur deleniti
        quidem cum eligendi ullam dignissimos minus optio suscipit perferendis
        fugiat, distinctio esse.
      </p> */}
    </div>
  );
};

export default App;
