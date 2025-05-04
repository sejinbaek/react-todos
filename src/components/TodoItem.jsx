import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  const date = new Date(todo.date).toLocaleDateString();
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <div className="content">{todo.content}</div>
      <div className="date">{date}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
