import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount(){
    this.refs.name.focus(
      );
  }


  editTodo(index) {
    let todo = this.state.todos[index]
    this.refs.name.value = todo.name
    this.refs.completed.value = todo.completed

    this.setState({
      creating: 1,
      index: index
    })
    this.refs.name.focus()
  }


  removeTodo(index) {
    let todos = this.state.todos

    todos.splice(index, 1)

    this.setState({
      todos: todos
    })
  }


  addTodo(e) {
    // the default behavior of a form is to submit and refresh the page, so we put e.preventDefault to prevent that from happening
    e.preventDefault()
    let todos = this.state.todos
    let name = this.refs.name.value
    let completed = this.refs.completed.value

    if(this.state.creating === 0) {
      let todo = {
        name,
        completed,
      }
      todos.push(todo)
    } else {
      let i = this.state.index
      todos[i].name = name
      todos[i].completed = completed
    }

    // this will add our todo object to our todos array

    this.setState({
      todos: todos,
      creating: 0
    });

    // we did this to reset the form after submission
    this.refs.todoForm.reset()
    this.refs.name.focus()
  }



  constructor() {
    // super(); => instantiating the base class component
    super();
    // the firts this is being referred to the base component thats why we are using .bind
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
    this.state = {
      todos: [],
      title: 'Simple Todo App',
      creating: 0,
      index: ''
    }

  }

  render() {
    let title = this.state.title
    let todos = this.state.todos

    return (
      <div className="App">
        <h1 className="title">{title}</h1>
        <form ref="todoForm" className="todoForm">
          <input type="text" ref="name" placeholder="What needs to be done?" className="formFeild"/>
          <input type="text" ref="completed" placeholder="By when?" className="formFeild"/>
          <button onClick={this.addTodo}>Add</button>
        </form>
        <ul className="todoList">
          <h3 className="todoHeading">Todos:</h3>
          {todos.map((todo, index) => 
            <li key={index} className="todos">
              {todo.name} - {todo.completed}
              <div className="actionBtns">
                <button onClick={this.editTodo.bind(null,index)}>Edit</button>
                <button onClick={this.removeTodo.bind(null,index)}>DONE!</button>
              </div>
            </li>
            )}
        </ul>
      </div>
    );
  }
}

export default App;
