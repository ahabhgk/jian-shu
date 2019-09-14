import {
  INPUT_ON,
  MOUSE_IN,
  GET_ALL_LIST,
  CHANGE_LIST,
} from '../actions/header/actionTypes.js'

const defaultState = {
  focused: false,
  mouseIn: false,
  list: [],
  allList: [],
}

export default (state = defaultState, action) => {
  if (action.type === INPUT_ON) {
    return { ...state, focused: action.isOn }
  }
  if (action.type === MOUSE_IN) {
    return { ...state, mouseIn: action.isIn }
  }
  if (action.type === GET_ALL_LIST) {
    const start = Math.floor(Math.random() * action.data.length)
    return { ...state, allList: action.data, list: action.data.slice(start, start + 10) }
  }
  if (action.type === CHANGE_LIST) {
    const start = Math.floor(Math.random() * state.allList.length)
    return { ...state, list: state.allList.slice(start, start + 6) }
  }
  return state
}
