import { SET_SIDEBAR } from '../actions/sidebar'

const initialState = {
  items: [],
}

export default function photos(state = initialState, action) {
  switch (action.type) {
    case SET_SIDEBAR:
      return Object.assign({}, state, {
        items: action.payload
      })
    default:
      return state
  }
}
