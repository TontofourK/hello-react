import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

export function TodoItem({ todo }) {
  const [isTodoEditable, setisTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setisTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <div
      className={`flex border Oborder—black/1Ø rounded—lg px—3py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.toggleCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.Completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full  bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10" : "border-transparent"
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify—center items—center bg-gray-50 hover:bg-gray-100 shrink—0 disabled:opacity-50"
        onClick={() => {
          if (todo.Completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setisTodoEditable((prev) => !prev);
        }}
        disabled={todo.Completed}
      >
        {isTodoEditable ? "📂" : "✏️"}
      </button>
      <button
        className="inline—flex w—8 h—8 rounded—lg text—sm border border-black/10 justify—center items—center hover:bg-gray-100 shrink—0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;