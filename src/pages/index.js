import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { FlexContainer } from './../components/Flexbox';

const Container = styled(FlexContainer)`
  height: calc(100vh - 140px);
`;

const IndexPage = () => (
  <Container column justify="center" align="center">
    <h1>WORK IN PROGRESS!</h1>
  </Container>
)

export default IndexPage
