import "./styles.css";
import { useState, useCallback } from "react";
import { ChildArea } from "./components/ChildArea";

export const App = () => {
  console.log("App");
  const [text, setText] = useState("");
  const [flag, setFlag] = useState(false);

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const onClickEvent = () => {
    setFlag(!flag);
  };

  const onClickOff = useCallback(() => {
    setFlag(false);
  }, [setFlag]);

  return (
    <>
      <div className="App">
        <input value={text} onChange={onChangeText}></input>
        <br />
        <br />
        <button onClick={onClickEvent}>on/off</button>
        <ChildArea flag={flag} onClickOff={onClickOff} />
      </div>
    </>
  );
};
