import React from "react"
import PropTypes from "prop-types"
import Layout from "../layouts"

const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

wrapPageElement.propTypes = {
  element: PropTypes.any,
  props: PropTypes.any
}

export default wrapPageElement
