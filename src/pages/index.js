import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'flex-start'};
  align-items: ${props => props.align ? props.align : 'flex-start'};
`;

const Container = styled(FlexContainer)`
  height: calc(100vh - 140px);
`;

const IndexPage = () => (
  <Container column justify="center" align="center">
    <h1>WORK IN PROGRESS!</h1>
  </Container>
)

export default IndexPage
