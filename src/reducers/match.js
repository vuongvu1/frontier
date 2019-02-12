
import { actionTypes } from 'actions/match';
// import { DEFAULT_PAGE_SIZE } from 'constants/firebase';

const initialState = {
  matches: [],
  length: 0,
  currentKey: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NEXT_MATCHES:
      const newLength = action.payload.length;
      return {
        matches: state.matches.concat(action.payload),
        length: state.length + newLength,
        currentKey: action.payload[newLength - 1].key,
      }
    default:
      return state
  }
}
