import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  addTodo(e) {
    // the default behavior of a form is to submit and refresh the page, so we put e.preventDefault to prevent that from happening
    e.preventDefault()
    let name = this.refs.name.value
    let completed = this.refs.completed.value
    let counter = this.state.counter
    let todo = {
      name,
      completed,
      counter
    }
    counter+=1
    let todos = this.state.todos

    todos.push(todo)

    this.setState({
      todos: todos,
      counter: counter
    });

    // we did this to reset the form after submission
    this.refs.todoForm.reset()
  }



  constructor() {
    // super(); => instantiating the base class component
    super();
    // the firts this is being referred to the base component thats why we are using .bind
    this.addTodo = this.addTodo.bind(this)
    this.state = {
      todos: [],
      title: 'React Simple Todo App',
      counter: 0
    }

  }





  render() {
    let title = this.state.title;
    let todos = this.state.todos




    return (
      <div className="App">
        <h1>{title}</h1>
        <form ref="todoForm" >
          <input type="text" ref="name" placeholder="What do we need to do?" />
          <input type="text" ref="completed" placeholder="Is it done?" />
          <button onClick={this.addTodo}>Add</button>
        </form>
        <ul>
          {todos.map((todo => <li key={todo.counter}>{todo.name} {todo.completed}</li>))}
        </ul>
      </div>
    );
  }
}

export default App;
