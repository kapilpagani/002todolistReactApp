import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';



class App extends Component {
  render() {
    return (
      <div className="container">
        .<div class="row">
          <TodoForm/>
          <TodoList/>
        </div>
      </div>  
    );
  }
}

export default App;
