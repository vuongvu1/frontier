
export const actionTypes = {
  GET_NEXT_MATCHES: 'GET_NEXT_MATCHES',
};

export const getMatchesAction = (matches) => dispatch => {
  dispatch({
    type: actionTypes.GET_NEXT_MATCHES,
    payload: matches,
  })
}
