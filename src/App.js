import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import uuid from 'uuid';


class App extends Component {

  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    const updatedItem = [...this.state.items, newItem]

    this.setState({
      id: uuid(),
      items: updatedItem,
      item: '',
      editItem: false
    })

  }

  clearList = () => {
    this.setState({
      items: []
    })
  }

  handleDelete = (id) => {
    const items = this.state.items.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      items
    })
  }

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(todo => {
      return todo.id !== id
    })
    const selectedItem = this.state.items.find(todo => {
      return todo.id === id
    });
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    })
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">
              todo input
            </h3>
            <TodoForm item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
