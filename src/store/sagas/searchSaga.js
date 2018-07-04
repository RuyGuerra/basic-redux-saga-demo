import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions/actions';
import * as api from '../../services/api';

function* fetchShows(action) {
  try {
    const shows = yield call(api.fetchShows, action.payload.term);
    yield put(actions.showSearchSucceed(shows));
  } catch (error) {
    yield put(actions.showSearchFailed(error.message));
  }
}

function* searchSaga() {
  yield takeEvery(actionTypes.SHOW_SEARCH_REQUESTED, fetchShows);
}

export default searchSaga;