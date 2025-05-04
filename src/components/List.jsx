import React, { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (!search) {
      return todos;
    }
    return todos.filter((todo) =>
      // 찾는 값과 검색 값 모두 소문자로 바꾸고 필터링하기
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List ⭐</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {/* 필터링된 투두리스트를 렌더링한다. */}
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} />
        ))}
      </div>
    </div>
  );
};

export default List;
