import React, { Component } from "react";
import Todos from "./Todos";
import { db } from "./db.js";
var arr = [];
db.collection("spregistration")
  .get()
  .then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      // doc.data() is never undefined for query doc snapshots
      arr.push(doc.data());
      //console.log(doc.id, " => ", doc.data());
    });
    console.log(arr);
  })
  .catch(function (error) {
    console.log("Error getting documents: ", error);
  });
class Temp extends Component {
  state = {
    todos: arr
  };

  /*deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };*/
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default Temp;
