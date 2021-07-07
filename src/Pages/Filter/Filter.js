import React, { useState } from "react";

const Sample = () => {
  //#region VARIABLE
  // 목록
  const [names, setNames] = useState([
    { id: 1, text: "물" },
    { id: 2, text: "불" },
    { id: 3, text: "바람" },
  ]);

  // value 입력 값
  const [inputText, setInputText] = useState("");

  // 키 값 증가 처리
  const [nextIndex, setNextIndex] = useState(3);

  // 목록 출력용
  const nameList = names.map((id) => (
    <li key={id.text}>
      {id.id} : {id.text}{" "}
    </li>
  ));
  //#endregion

  //#region EVENT
  const ADD_onChange = (e) => {
    setInputText(e.target.value);
  };
  const ADD_onClick = () => {
    setNextIndex(nextIndex + 1);
    const nextNames = names.concat({
      id: nextIndex + 1,
      text: inputText,
    });
    setNames(nextNames);
    setInputText("");

    console.clear();
    names.map((id, text) => console.log(id.text));
  };
  const DELETE_onClick = () => {
    const newNames = names.filter((item) => item.text !== inputText);
    setNames(newNames);
  };
  //#endregion

  //#region RETURN
  return (
    <div>
      <ul>{nameList}</ul>
      <input onChange={ADD_onChange} value={inputText}></input>
      <button onClick={ADD_onClick}>Add</button>
      <button onClick={DELETE_onClick}>Delete</button>
    </div>
  );
  //#endregion
};

export default Sample;
