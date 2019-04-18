import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    
    const item = this.props.items.map(item=>(
      <div key={item.id}>
          <span onClick={()=> this.props.handleDelete(item.id)}>{item.title}</span>
      </div>
    ));
    return (
      <h1>
        {item}
        {/* <TodoItem/> */}
      </h1>
    )
  }
}
