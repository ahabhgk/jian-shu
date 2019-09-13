import React from 'react'
import { connect } from 'react-redux'
import {
  getInputChangeAction,
  getAddTodoAction,
  getDeleteTodoAction,
} from '../store/actionCreator.js'

const TodoList = props => {
  return (
    <div>
      <div>
        <input
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
        <button
          type="button"
          onClick={props.handleAddTodo}
        >Submit</button>
      </div>
      <ul>
        {props.list.map((todo, index) => (
          <li key={index} onClick={() => props.handleDeleteTodo(index)}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  inputValue: state.inputValue,
  list: state.list,
})

const mapDispatchToProps = dispatch => ({
  handleInputChange: e => {
    const action = getInputChangeAction(e.target.value)
    dispatch(action)
  },

  handleAddTodo: () => {
    const action = getAddTodoAction()
    dispatch(action)
  },

  handleDeleteTodo: index => {
    const action = getDeleteTodoAction(index)
    dispatch(action)
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)
