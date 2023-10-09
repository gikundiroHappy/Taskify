import React from "react";
import { Todo } from "../model";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete, MdDone } from "react-icons/md";
import TodoList from "./todolist";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !TodoList.isDone } : todo
      )
    );
  };

  return (
    <div className="">
      <form
        action=""
        className="m-3 flex gap-5 justify-between rounded-md bg-yellow-500 mx-5 p-3 font-semibold 
        text-sm sm:m-5 xl:text-sm"
      >
        {todo.isDone ? <s>{todo.todo}</s> : <span>{todo.todo}</span>}

        <div className="flex gap-8 text-xl">
          <span className="cursor-pointer">
            <AiFillEdit />
          </span>
          <span className="cursor-pointer">
            <MdDelete />
          </span>
          <span className="cursor-pointer" onClick={() => handleDone(todo.id)}>
            <MdDone />
          </span>
        </div>
      </form>
    </div>
  );
};

export default SingleTodo;
