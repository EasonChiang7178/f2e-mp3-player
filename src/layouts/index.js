import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "./GlobalStyles"
import { PageContainer, PageWrapper, BottomNavigator } from "./index.css"

const Layout = ({ children }) => (
  <PageContainer>
    <GlobalStyles />

    <PageWrapper>
      {children}
    </PageWrapper>
    
    <BottomNavigator />
  </PageContainer>
)

Layout.prototype = {
  children: PropTypes.node
}

export default Layout
