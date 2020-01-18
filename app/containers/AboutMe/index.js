/**
 *
 * AboutMe
 *
 */

import React, { memo, useEffect } from 'react';
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
import { bioFetchRequested } from './actions';

export function AboutMe({ name, image, text, loadUser }) {
  useInjectReducer({ key: 'aboutMe', reducer });
  useInjectSaga({ key: 'aboutMe', saga });
  useEffect(() => {
    if (name === '') loadUser('kyruski');
  }, []);
  const defaultMessage = `About Me: ${name}`;
  const message = {
    id: 'aboutme',
    defaultMessage,
  };
  const bio = {
    id: 'biography',
    defaultMessage: text || 'Loading',
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
        style={{ maxWidth: '80vw', margin: '2vw' }}
      >
        <div style={{ minWidth: '40vw' }}>
          <FormattedMessage {...bio} />
        </div>
        <Image
          source={image.src}
          alt={image.alt}
          height={screen.width <= 1000 ? '40vh' : image.height}
          width={image.width || ''}
        />
      </FlexContainer>
    </div>
  );
}

AboutMe.propTypes = {
  loadUser: PropTypes.func.isRequired,
  name: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  name: makeSelectBioName(),
  image: makeSelectBioImage(),
  text: makeSelectBioText(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadUser: username => dispatch(bioFetchRequested(username)),
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
