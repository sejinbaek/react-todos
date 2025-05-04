import "./App.css";
import { useState, useRef } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState([]);

  const idRef = useRef(1);

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
      // targetId가 하나의 투두아이템 id와 같다면 isDone을 토글시킨 새로운 배열을 반환하고,
      // 다르다면, 기존의 todo 반환하기
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // 하나의 투두 아이템 삭제하기 (Delete)
  const onDelete = (targetId) => {
    // todos 배열에서 targetId와 일치하는 id를 갖는 요소를 제거한 새로운 배열 반환하기
    // 삭제 대상이 아닌 요소들만 필터링하기
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
