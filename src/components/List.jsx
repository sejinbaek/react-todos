import React, { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterdDate = () => {
    if (!search) {
      return todos;
    }
    return todos.filter((todo) =>
      // 찾는 값과 검색 값 모두 소문자로 바꾸고 필터링하기
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilterdDate();

  return (
    <div className="List">
      <h4>Todo List ⭐</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default List;
