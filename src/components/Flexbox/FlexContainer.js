import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getProperty from './helpers';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  ${getProperty('justify-content', 'justify')};
  ${getProperty('align-items', 'align')};
  `;

FlexContainer.propTypes = {
  align: PropTypes.string,  
  column: PropTypes.bool,
  justify: PropTypes.string,
}

export default FlexContainer;