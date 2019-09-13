import {
  INPUT_CHANGE,
  ADD_TODO,
  DELETE_TODO,
} from './actionTypes.js'

const defaultState = {
  inputValue: '',
  list: [],
}

export default (state = defaultState, action) => {
  if (action.type === INPUT_CHANGE) {
    return { ...state, inputValue: action.value }
  }
  if (action.type === ADD_TODO) {
    return { inputValue: '', list: [...state.list, state.inputValue] }
  }
  if (action.type === DELETE_TODO) {
    return { ...state, list: state.list.filter((_, i) => i !== action.index) }
  }
  return state
}
