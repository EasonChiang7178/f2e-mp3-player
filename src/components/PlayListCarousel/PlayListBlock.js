import React from "react"
import styled from "styled-components"

export default styled.div`
  width: 200px;
  height: 300px;
  background: black;
  flex: 0 0 auto;

  & + & {
    margin-left: 15px;
  }
`
