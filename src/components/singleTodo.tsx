import React, { useState, useRef, useEffect } from "react";
import { Todo } from "../model";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete, MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <div className="">
      <form
        onSubmit={(e) => handleEdit(e, todo.id)}
        action=""
        className="m-3 flex gap-5 justify-between rounded-md bg-yellow-500 mx-5 p-3 font-semibold 
        text-sm sm:m-5 xl:text-sm"
      >
        {edit ? (
          <input
            ref={inputRef}
            className="focus:outline-none py-1 px-3 rounded-sm  w-80"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : todo.isDone ? (
          <s>{todo.todo}</s>
        ) : (
          <span>{todo.todo}</span>
        )}

        <div className="flex gap-8 text-xl">
          <span
            className="cursor-pointer"
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <AiFillEdit />
          </span>
          <span
            className="cursor-pointer"
            onClick={() => handleDelete(todo.id)}
          >
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
