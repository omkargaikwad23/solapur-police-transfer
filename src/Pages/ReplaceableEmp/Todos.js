import React from "react";

const Todos = ({todos}) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
        
      return (
        <div className="collection-item" key={todo.B_No}>
          <span>
            {todo.Middle_Name}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
