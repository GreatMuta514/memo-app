import React from "react";
import "../css/common.css";

function Form() {
  const inputRef = React.createRef();

  const postMemo = () => {
    fetch("http://localhost:3001/api/insert/memo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: inputRef.current.value,
      }),
    });
  };

  return (
    <>
      <div className="Form common_frame">
        <p>メモ</p>
        <input ref={inputRef} type="text" name="content"></input>
        <input
          type="submit"
          name=""
          value="保存する"
          className="submit"
          onClick={postMemo}
        />
      </div>
    </>
  );
}

export default Form;
