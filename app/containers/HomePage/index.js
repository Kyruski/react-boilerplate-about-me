/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import H1 from '../../components/H1';
import messages from './messages';

export default function HomePage() {
  return (
    <>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </>
  );
}
