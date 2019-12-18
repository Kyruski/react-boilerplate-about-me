/**
 *
 * Image
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Image({ source, alt, width = 'auto', height = 'auto' }) {
  const Img = styled.img`
    width: ${width};
    height: ${height};
  `;

  return <Img src={source} alt={alt} />;
}

Image.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default memo(Image);
