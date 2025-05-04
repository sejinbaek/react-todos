import React, { useState } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState();

  // content에 입력값 저장하기
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 할 일 추가하기
  const onSubmit = () => {
    // 개선 1. 아무것도 입력이 되지 않았을 때 추가되지 않도록 하기
    if (!content.trim()) {
      console.log("투두를 입력하지 않았습니다");
      return;
    }
    onCreate(content);
    console.log("투두 추가 완료");
    // 개선 2. 추가 후 입력 필드가 비워지도록 하기
    setContent("");
  };
  // 개선 3. Enter를 눌러도 추가되도록 하기
  const onEnter = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        type="text"
        placeholder="새로운 할 일을 입력하세요"
        value={content}
        onChange={onChangeContent}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
