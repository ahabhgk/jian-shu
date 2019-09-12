import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
} from './actionTypes.js'

const defaultState = {
  inputValue: '',
  list: [],
}

export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    return { ...state, inputValue: action.value }
  }
  if (action.type === ADD_TODO_ITEM) {
    return { inputValue: '', list: [...state.list, state.inputValue] }
  }
  if (action.type === DELETE_TODO_ITEM) {
    return { ...state, list: state.list.filter((_, i) => i !== action.index) }
  }
  return state
}
