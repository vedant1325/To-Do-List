import React, { useEffect, useRef, useState } from "react";
import "./Todo.css";
import TodoItems from "../Todo-Items/TodoItems";
let count = 0;
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodos([
      ...todos,
      {no:count++, text:inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
    localStorage.setItem('todos_count',count)
  };
  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem('todos')));
    count=localStorage.getItem('todos_count');
  },[])


  useEffect(() => {
      setTimeout(() => {
        console.log(todos);
        localStorage.setItem('todos',JSON.stringify(todos)); 
    },100);
  }, [todos]);
  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          name=""
          id=""
          className="todo-input"
          placeholder="Add your task"
        />
        <div
          onClick={() => {
            add();
          }}
          className="todoadd-btn"
        >
          Add
        </div>
      </div>
      <div className="todo-list">
        {todos.map((item,i)=>{
            return <TodoItems key={i} no={item.no} display={item.display} text={item.text} setTodos={setTodos} />
        })}
      </div>
    </div>
  );
};

export default Todo;
