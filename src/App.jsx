import "./App.css";
import { useRef, useReducer } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

// useReducer 사용하기
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => {
        item.id !== action.targetId;
      });
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  const idRef = useRef(1);

  // 새로운 투두 아이템 생성하기 (Create)
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  // 하나의 투두 아이템 변경하기 (Update)
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  // 하나의 투두 아이템 삭제하기 (Delete)
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
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
