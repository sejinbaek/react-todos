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
    onCreate(content);
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
