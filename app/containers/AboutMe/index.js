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
import makeSelectAboutMe from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Image from '../../components/Image';
import H1 from '../../components/H1';

export function AboutMe() {
  useInjectReducer({ key: 'aboutMe', reducer });
  useInjectSaga({ key: 'aboutMe', saga });
  const name = 'James Boyett';
  const defaultMessage = `About Me: ${name}`;
  const message = {
    id: 'aboutme',
    defaultMessage,
  };
  const bio = {
    id: 'biography',
    defaultMessage: `I’ve always been interested in problem solving, computers, and coding from a young age. I went to summer schools/camps for coding starting at age 10, took a class in java during high school, and was always interested in puzzle games like sudoku; but then I went down a different path for college. It led me to starting my PhD in Biology, but during that time, the other PhD students and I would always have talks about “What we’d be doing if we didn’t go into the Biology field.” One said a PhD in a different field, one said a truck driver, but I was always convinced I would’ve gone to college for Computer Science. My curiosity for pursuing computer science/software engineering as a career choice grew, and I decided to take a leap of faith. I took a leave of absence from my PhD, and took a stab at this coding thing.
  I started coding about 40hrs a week with no real direction, until I entered a boot-camp. This is where I got a lot of focus into the direction of my studies. Coding became calming and therapeutic for me, and I developed a hunger for learning new techniques, technologies, and frameworks. Additionally, coding is very fulfilling as it brings about these small feelings of accomplishment whether it be due to solving a small bug or just adding some small functionality and seeing the fruits of your labor. While I was at the bootcamp, I went above and beyond because of my hunger, teaching myself Typescript, PostgreSQL, TravisCI, Electron, and more.
  I have since built apps with a focus on micro-service architectures, optimizing database seeding, querying, and server response times, as well as a proof-of-concept desktop app. `,
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
          source="https://i.imgur.com/hVGyD2A.jpg"
          alt="Pictured: Jamey Boyett"
          height="500px"
        />
      </FlexContainer>
    </div>
  );
}

AboutMe.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  aboutMe: makeSelectAboutMe(),
});

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
