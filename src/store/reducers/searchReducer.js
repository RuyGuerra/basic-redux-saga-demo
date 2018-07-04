import * as actionTypes from '../actions/actionTypes';

const initialState = {
  term: '',
  shows: [],
  error: ''
}

const searchReducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.SHOW_SEARCH_REQUESTED:
      return {
        ...state,
        term: action.payload.term
      }

    case actionTypes.SHOW_SEARCH_SUCCEED:
      return {
        ...state,
        shows: action.payload.shows
      }

    case actionTypes.SHOW_SEARCH_FAILED:
      return {
        ...state,
        error: action.payload.error
      }

    default:
      return state;

  }
}

export default searchReducer;