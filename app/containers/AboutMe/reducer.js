/*
 *
 * AboutMe reducer
 *
 */
import produce from 'immer';
import {
  BIO_FETCH_FAILED,
  BIO_FETCH_SUCCEEDED,
  BIO_FETCH_REQUESTED,
} from './constants';

export const initialState = {
  message: '',
  user: {
    name: '',
    text: '',
    image: {
      src: '',
      alt: '',
      height: '',
      width: '',
    },
  },
};

/* eslint-disable default-case, no-param-reassign */
const aboutMeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case BIO_FETCH_REQUESTED:
        draft.message = BIO_FETCH_REQUESTED;
        draft.user.text = 'Loading';
        break;
      case BIO_FETCH_SUCCEEDED:
        draft.message = BIO_FETCH_SUCCEEDED;
        draft.user = action.user;
        break;
      case BIO_FETCH_FAILED:
        draft.user.text = action.message;
        draft.message = BIO_FETCH_FAILED;
        break;
    }
  });

export default aboutMeReducer;
