import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Flex = styled.div`
  flex: ${props => props.length ? props.length : 1};
`;

Flex.propTypes = {
  length: PropTypes.number
}

export default Flex;