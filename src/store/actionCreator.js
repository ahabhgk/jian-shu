import {
  INPUT_CHANGE,
  ADD_TODO,
  DELETE_TODO,
} from './actionTypes.js'

export const getInputChangeAction = value => ({
  type: INPUT_CHANGE,
  value,
})

export const getAddTodoAction = () => ({
  type: ADD_TODO,
})

export const getDeleteTodoAction = index => ({
  type: DELETE_TODO,
  index,
})
