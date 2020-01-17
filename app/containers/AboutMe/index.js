/**
 *
 * AboutMe
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import FlexContainer from 'react-styled-flexbox';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectBioName,
  makeSelectBioImage,
  makeSelectBioText,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import Image from '../../components/Image';
import H1 from '../../components/H1';

export function AboutMe({ text, name, image }) {
  useInjectReducer({ key: 'aboutMe', reducer });
  useInjectSaga({ key: 'aboutMe', saga });
  const defaultMessage = `About Me: ${name}`;
  const message = {
    id: 'aboutme',
    defaultMessage,
  };
  const bio = {
    id: 'biography',
    defaultMessage: text,
  };
  return (
    <div style={{ margin: '2vw' }}>
      <Helmet>
        <title>About Me</title>
        <meta name="description" content="An About Me" />
      </Helmet>
      <H1>
        <FormattedMessage {...message} />
      </H1>
      <FlexContainer
        itemsCenter
        justifySpaceAround
        style={{ width: '50vw', margin: '2vw' }}
      >
        <FormattedMessage {...bio} />
        <Image
          source={image.src}
          alt={image.alt}
          height={image.height || ''}
          width={image.width || ''}
        />
      </FlexContainer>
    </div>
  );
}

// AboutMe.propTypes = {
//   // dispatch: PropTypes.func.isRequired,
//   name: PropTypes.string,
//   image: PropTypes.object,
//   text: PropTypes.string,
// };

const mapStateToProps = createStructuredSelector({
  name: makeSelectBioName(),
  image: makeSelectBioImage(),
  text: makeSelectBioText(),
});
// function mapStateToProps(state) {
//   return {
//     item: 'abc',
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AboutMe);
