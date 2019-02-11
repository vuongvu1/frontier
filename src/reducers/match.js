
import { actionTypes } from 'actions/match';
// import { DEFAULT_PAGE_SIZE } from 'constants/firebase';

const initialState = {
  matches: [],
  page: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NEXT_MATCHES:
      return {
        matches: state.matches.concat(action.payload),
        page: state.page + 1,
      }
    default:
      return state
  }
}
