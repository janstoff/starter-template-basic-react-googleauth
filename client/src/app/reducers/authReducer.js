import { FETCH_USER } from '../actions/authActions'

const initialState = null

export default function(state = initialState, action){
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false
    default:
      return state
  }
}
