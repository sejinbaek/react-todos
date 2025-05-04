import React from "react";
import "./Editor.css";

const Editor = () => {
  return (
    <div className="Editor">
      <input type="text" placeholder="새로운 할 일을 입력하세요" />
      <button>추가</button>
    </div>
  );
};

export default Editor;
