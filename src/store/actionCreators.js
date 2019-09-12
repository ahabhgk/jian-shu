import axios from 'axios'
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
} from './actionTypes.js'

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value,
})

export const getAddTodoItemAction = () => ({
  type: ADD_TODO_ITEM,
})

export const getDeleteTodoItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index,
})

export const initListAction = data => ({
  type: INIT_LIST_ACTION,
  data,
})

export const getTodoList = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/list.json')
    const action = initListAction(data)
    dispatch(action)
  }
}
