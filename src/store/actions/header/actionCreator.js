import axios from 'axios'
import {
  INPUT_ON,
  MOUSE_IN,
  CHANGE_LIST,
  GET_ALL_LIST,
} from './actionTypes.js'

export const getInputOnAction = isOn => ({ type: INPUT_ON, isOn })

export const getMouseInAction = isIn => ({ type: MOUSE_IN, isIn })

export const getChangeListAction = () => ({ type: CHANGE_LIST })

export const getAllListAction = () => async dispatch => {
  const { data } = await axios.get('/api/hotSearch.json')
  dispatch({ type: GET_ALL_LIST, data })
}
