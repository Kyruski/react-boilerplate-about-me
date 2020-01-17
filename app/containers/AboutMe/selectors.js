import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the aboutMe state domain
 */

const selectAboutMeDomain = state => state.aboutMe.user || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AboutMe
 */

export const makeSelectBioName = () =>
  createSelector(
    selectAboutMeDomain,
    substate => substate.name,
  );

export const makeSelectBioImage = () =>
  createSelector(
    selectAboutMeDomain,
    substate => substate.image,
  );

export const makeSelectBioText = () =>
  createSelector(
    selectAboutMeDomain,
    substate => substate.text,
  );

// export default makeSelectAboutMe;
export { selectAboutMeDomain };
