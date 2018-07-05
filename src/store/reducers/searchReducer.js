import * as actionTypes from '../actions/actionTypes';

const initialState = {
  term: '',
  shows: [],
  error: '',
  isFetching: false
}

const searchReducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.SHOW_SEARCH_REQUESTED:
      return {
        ...state,
        term: action.payload.term,
        isFetching: true
      }

    case actionTypes.SHOW_SEARCH_SUCCEED:
      return {
        ...state,
        shows: action.payload.shows,
        isFetching: false
      }

    case actionTypes.SHOW_SEARCH_FAILED:
      return {
        ...state,
        error: action.payload.error,
        isFetching: false
      }

    default:
      return state;

  }
}

export default searchReducer;