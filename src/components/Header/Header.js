import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Title = styled.h1`
  align-items: center;
  background: #000;
  color: #fff;
  display: flex;
  font-size: 1em;
  font-weight: 600;
  justify-content: center;
  height: 70px;
  margin: 0;
  padding: 7px 12px;
`;


const Header = () => (
  <Title>Gabriel García Seco</Title>
)

export default Header;
