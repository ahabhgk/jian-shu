import React from 'react'
import TodoListUI from '../components/TodoListUI.jsx'
import store from '../store'
import {
  getInputChangeAction,
  getAddTodoItemAction,
  getDeleteTodoItemAction,
} from '../store/actionCreators.js'

class TodoList extends React.Component {
  constructor() {
    super()
    this.state = store.getState()
    store.subscribe(this.handleStoreChange.bind(this))
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleButtonClick() {
    const action = getAddTodoItemAction()
    store.dispatch(action)
  }

  handleDeleteTodo(index) {
    const action = getDeleteTodoItemAction(index)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange.bind(this)}
        handleButtonClick={this.handleButtonClick.bind(this)}
        handleDeleteTodo={this.handleDeleteTodo.bind(this)}
      />
    )
  }
}

export default TodoList
