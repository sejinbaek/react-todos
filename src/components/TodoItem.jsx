import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, onUpdate }) => {
  const date = new Date(todo.date).toLocaleDateString();
  const onChangeCheckBox = () => {
    // onChangeCheckBox 함수가 실행되면 onUpdate 함수가 호출된다.
    onUpdate(todo.id);
  };
  return (
    <div className="TodoItem">
      {/* 체크 박스에 클릭이 발생하면 onChangeCheckBox 함수가 실행된다. */}
      {/* 요소가 버튼이 아니라 input 요소이기 때문에 onChange 이벤트를 사용한다. */}
      <input type="checkbox" onChange={onChangeCheckBox} />
      <div className="content">{todo.content}</div>
      <div className="date">{date}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
