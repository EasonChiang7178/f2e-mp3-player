import React from "react"
import { Normalize } from "styled-normalize"
import { createGlobalStyle } from "styled-components"

import { YELLOW_0 } from "../constants/COLORS"

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:600&display=swap');
  body {
    font-family: "Helvetica", 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', sans-serif;
    background-color: ${YELLOW_0};
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
