import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components';
import { Header, Footer } from './../components';
import { FlexContainer, Flex } from './../components/Flexbox';

import './index.css'

const Main = styled(FlexContainer)`
  min-height: 100vh;
`;

const TemplateWrapper = ({ children }) => (
  <Main column>
    <Helmet
      title="Gabriel García Seco | Developer"
      meta={[
        { name: 'description', content: 'Gabriel García Seco, Developer' },
        { name: 'keywords', content: 'Developer' },
      ]}
    />
    <Header />
    <Flex>
      {children()}
    </Flex>
    <Footer></Footer>
  </Main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
