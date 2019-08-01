import React from "react"
import PropTypes from "prop-types"
import posed, { PoseGroup } from "react-pose"

import GlobalStyles from "./GlobalStyles"
import { PageContainer, PageWrapper, BottomNavigator } from "./index.css"

const Layout = ({ children, location }) => {
  const RoutesContainer = posed.div({
    enter: {
      opacity: 1,
      delay: 160,
      transition: {
        opacity: { duration: 100 },
      },
    },
    exit: {
      opacity: 0,
      transition: {
        opacity: { duration: 100 },
      },
    },
  })

  return (
    <PageContainer>
      <GlobalStyles />

        <PoseGroup>
          <RoutesContainer key={location.pathname}>
            <PageWrapper>
              {children}
            </PageWrapper>
          </RoutesContainer>
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
