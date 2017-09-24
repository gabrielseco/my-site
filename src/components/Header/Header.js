import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FlexContainer } from './../Flexbox';
import colors from './../../shared/colors';

const Container = styled(FlexContainer)`
  background: ${colors.PRIMARY_COLOR};
  height: 70px;  
  padding: 7px 12px;  
`;

const Title = styled.h1`
  color: ${colors.WHITE};
  font-size: 1.2em;
  font-weight: 600;
  letter-spacing: 0.115em;
`;


const Header = () => (
  <Container align="center" column justify="center">
    <Title>Gabriel García Seco</Title>
  </Container>
)

export default Header;
