
import { actionTypes } from 'actions/match';

const initialState = {
  matches: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_MATCHES:
      return { matches: action.payload }
    default:
      return state
  }
}
