import React from "react"
import { Normalize } from "styled-normalize"
import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:600&display=swap');
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

class GlobalStyles extends React.PureComponent {
  render = () => (
    <>
      <Normalize />
      <Global />
    </>
  )
}

export default GlobalStyles