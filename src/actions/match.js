
export const actionTypes = {
  GET_ALL_MATCHES: 'GET_ALL_MATCHES',
};

export const getAllMatchesAction = (matches) => dispatch => {
  dispatch({
    type: actionTypes.GET_ALL_MATCHES,
    payload: matches
  })
}
