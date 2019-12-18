/*
 * H1 Messages
 *
 * This contains all the text for the H1 component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.H1';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the H1 component!',
  },
});
