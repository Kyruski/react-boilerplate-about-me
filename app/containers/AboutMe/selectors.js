import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the aboutMe state domain
 */

const selectAboutMeDomain = state => state.aboutMe || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AboutMe
 */

const makeSelectAboutMe = () =>
  createSelector(
    selectAboutMeDomain,
    substate => substate,
  );

export default makeSelectAboutMe;
export { selectAboutMeDomain };
