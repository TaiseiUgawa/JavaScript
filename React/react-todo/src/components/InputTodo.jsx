import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickAdd, disabled } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button onClick={onClickAdd}>Append</button>
    </div>
  );
};
