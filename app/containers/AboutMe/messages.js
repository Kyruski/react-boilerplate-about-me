/*
 * AboutMe Messages
 *
 * This contains all the text for the AboutMe container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AboutMe';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the AboutMe container!',
  },
});
