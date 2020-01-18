/*
  AboutMe actions
 */

import {
  BIO_FETCH_FAILED,
  BIO_FETCH_SUCCEEDED,
  BIO_FETCH_REQUESTED,
} from './constants';

export function bioFetchFailed(message) {
  return {
    type: BIO_FETCH_FAILED,
    message,
  };
}

export function bioFetchSuccess(user) {
  return {
    type: BIO_FETCH_SUCCEEDED,
    user,
  };
}

export function bioFetchRequested(username) {
  return {
    type: BIO_FETCH_REQUESTED,
    username,
  };
}
