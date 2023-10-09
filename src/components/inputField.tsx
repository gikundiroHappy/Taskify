import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="">
      <form
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
        action=""
        className="m-2  flex relative w:full text-center justify-center sm:mx-20 lg:mx-40"
      >
        <input
          ref={inputRef}
          type="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a task"
          className="focus:outline-none w-full rounded-full px-10 py-5 text-md xl:text-sm"
        />
        <button
          className="absolute bg-indigo-300 rounded-full px-3 py-2 text-md flex right-0 m-3 text-white font-semibold 
          hover:bg-indigo-400 cursor-pointer shadow-2xl"
        >
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
