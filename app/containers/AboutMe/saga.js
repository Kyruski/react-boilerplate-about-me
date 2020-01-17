import { call, put, takeLatest } from 'redux-saga/effects';
const requestURL = process.env.REQUEST_URL || 'http://localhost:3000/';

// Individual exports for testing
export function* getAboutMe(action) {
  // Select username from store
  try {
    const user = yield call(
      fetch,
      `${requestURL}about/${action.payload.handle}`,
    );
    yield put({ type: 'BIO_FETCH_SUCCEEDED', user });
  } catch (e) {
    yield put({ type: 'BIO_FETCH_FAILED', message: e.message });
  }
}

export default function* grabAboutMe() {
  // See example in containers/HomePage/saga.js
  yield takeLatest('BIO_FETCH_REQUESTED', getAboutMe);
}
// /**
//  * Root saga manages watcher lifecycle
//  */
// // export default function* grabAboutMe() {
//   // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
//   // By using `takeLatest` only the result of the latest API call is applied.
//   // It returns task descriptor (just like fork) so we can continue execution
//   // It will be cancelled automatically on component unmount
//   yield takeLatest(LOAD_REPOS, getRepos);
// }
