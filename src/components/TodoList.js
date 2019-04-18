import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <h1>
        Hello From TodoList
        <TodoItem/>
      </h1>
    )
  }
}
