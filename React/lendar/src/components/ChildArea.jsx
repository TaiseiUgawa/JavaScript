import React from "react";
import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { flag, onClickOff } = props;
  const data = [...Array(1000).keys()];

  data.forEach(() => {
    console.log("lendar");
  });

  return (
    <>
      {flag ? (
        <div style={style}>
          <p>ChildArea</p>
          <button onClick={onClickOff}>off</button>
        </div>
      ) : null}
    </>
  );
});
