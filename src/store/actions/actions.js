import * as actionTypes from './actionTypes';

export const showSearchRequested = (term) => {
  return {
    type: actionTypes.SHOW_SEARCH_REQUESTED,
    payload: { term }
  }
}

export const showSearchSucceed = (shows) => {
  return {
    type: actionTypes.SHOW_SEARCH_SUCCEED,
    payload: { shows }
  }
}

export const showSearchFailed = (error) => {
  return {
    type: actionTypes.SHOW_SEARCH_FAILED,
    payload: { error }
  }
}