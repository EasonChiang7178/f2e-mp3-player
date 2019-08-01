import React from "react"
import PropTypes from "prop-types"
import { PoseGroup } from "react-pose"

import GlobalStyles from "./GlobalStyles"
import { PageContainer, PageWrapper, BottomNavigator } from "./index.css"

const Layout = ({ children, location }) => {
  return (
    <PageContainer>
      <GlobalStyles />

      <PoseGroup>
        <PageWrapper key={location.pathname}>
          {children}
        </PageWrapper>
      </PoseGroup>

      <BottomNavigator />
    </PageContainer>
  )
}

Layout.prototype = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
}

export default Layout
