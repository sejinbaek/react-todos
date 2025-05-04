import "./App.css";
import { useState } from "react";
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
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
