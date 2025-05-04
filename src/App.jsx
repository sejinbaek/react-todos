import "./App.css";
import { useState, useRef } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

const mockData = [
  {
    id: 0, // 아이템을 구별하기 위한 ID
    isDone: false,
    content: "리액트 공부하기",
    date: new Date().getTime(), // 날짜는 타임스탬프로 저장하기
  },
  {
    id: 1,
    isDone: false,
    content: "투두리스트 만들기",
    date: new Date().getTime(),
  },
  {
    id: 2, // 아이템을 구별하기 위한 ID
    isDone: false,
    content: "놀러 가기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);

  const idRef = useRef(3);

  // 새로운 투두 아이템 생성하기 (Create)
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  // 하나의 투두 아이템 변경하기 (Update)
  const onUpdate = (targetId) => {
    setTodos(
      // targetId가 하나의 투두아이템 id와 같다면 isDone을 토글시킨 새로운 객체를 반환하고,
      // 다르다면, 기존의 todo 반환하기
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
