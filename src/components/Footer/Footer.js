import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome';

import { FlexContainer, Flex } from './../Flexbox';
import colors from './../../shared/colors';

const Container = styled(FlexContainer)`
  background: ${colors.PRIMARY_TEXT_COLOR};
  color: ${colors.WHITE};
  height: 70px;
  padding: 2px 12px;
`;

const FooterCopyright = styled.p`
  display: flex;
  flex: 1;
`;

const FontAwesomePadding = styled(FontAwesome)`
  margin-right: 20px;
`;

const socialColors = {
  TWITTER: '#55acee',
  LINKEDIN: '#0e76a8'
}

const TwitterLink = styled.a`
  &:hover {
    color: ${socialColors.TWITTER};
  }
`;

const LinkedinLink = styled.a`
  &:hover {
    color: ${socialColors.LINKEDIN};
  }
`;

const Footer = () => (
  <Container>
    <FooterCopyright>Gabriel García Seco | 2017</FooterCopyright>
      <p>
        <TwitterLink href="https://twitter.com/GGarciaSeco10" target="_blank"><FontAwesomePadding name='twitter'></FontAwesomePadding></TwitterLink>
        <LinkedinLink href="https://www.linkedin.com/in/gabrielgarciaseco/" target="_blank"><FontAwesomePadding name='linkedin'></FontAwesomePadding></LinkedinLink>
      </p>
  </Container>
)

export default Footer;
