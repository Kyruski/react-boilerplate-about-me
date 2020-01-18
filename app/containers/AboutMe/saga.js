import { call, put, takeLatest } from 'redux-saga/effects';
import { bioFetchSuccess, bioFetchFailed } from './actions';
import { BIO_FETCH_REQUESTED } from './constants';
const requestURL = process.env.REQUEST_URL || 'http://localhost:3004/';

export function* fetchUser(user) {
  try {
    const response = yield call(fetch, `${requestURL}aboutme/${user}`);
    const data = yield response.json();
    return data;
  } catch (e) {
    return null;
  }
}

// Individual exports for testing
export function* getAboutMe(action) {
  try {
    const user = yield call(fetchUser, action.username);
    if (user === null) throw new Error('Error connecting to Server');
    yield put(bioFetchSuccess(user));
  } catch (e) {
    yield put(bioFetchFailed(e.message));
  }
}

export default function* grabAboutMe() {
  yield takeLatest(BIO_FETCH_REQUESTED, getAboutMe);
}
