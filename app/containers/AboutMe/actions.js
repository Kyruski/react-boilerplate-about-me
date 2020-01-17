/*
 *
 * AboutMe actions
 *
 */

import {
  BIO_FETCH_FAILED,
  BIO_FETCH_SUCCEEDED,
  BIO_FETCH_REQUESTED,
} from './constants';

export function defaultAction() {
  return {
    type: BIO_FETCH_FAILED,
  };
}
