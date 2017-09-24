import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Header, Footer } from './../components';

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }}>
    <Helmet
      title="Gabriel García Seco | Developer"
      meta={[
        { name: 'description', content: 'Gabriel García Seco, Developer' },
        { name: 'keywords', content: 'Developer' },
      ]}
    />
    <Header />
    <div style={{
      flex: '1'
    }}>
      {children()}
    </div>
    <Footer></Footer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
