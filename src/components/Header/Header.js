import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FlexContainer } from './../Flexbox';

const Container = styled(FlexContainer)`
  background: #000;
  height: 70px;  
  padding: 7px 12px;  
`;

const Title = styled.h1`
  color: #fff;
  font-size: 1.2em;
  font-weight: 600;
`;


const Header = () => (
  <Container align="center" column justify="center">
    <Title>Gabriel García Seco</Title>
  </Container>
)

export default Header;
