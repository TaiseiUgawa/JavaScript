import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setcompleteTodos] = useState([]);

  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newTodos = [...incompleteTodos];
    const addTodo = newTodos[index];
    const newCompleteTodos = [...completeTodos, addTodo];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    setcompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    const backTodo = newCompleteTodos[index];
    const newTodos = [...incompleteTodos, backTodo];
    newCompleteTodos.splice(index, 1);
    setcompleteTodos(newCompleteTodos);
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
        disabled={incompleteTodos.lenght >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p className="color-red">
          Registar Todos limit is 5 !! complete or delete Todos{" "}
        </p>
      )}
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
