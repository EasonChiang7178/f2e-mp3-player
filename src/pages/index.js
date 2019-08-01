import React from "react"
import styled from "styled-components"

import Greeting from "../components/Greeting"
import SEO from "../layouts/SEO"
import { YELLOW_3 } from "../constants/COLORS"

const Container = styled.div`
  padding: 30px 30px 0;
  height: calc(100% - 30px);
  background: ${YELLOW_3};
`

const IndexPage = () => (
  <Container>
    <SEO title="Music Player" />

    <Greeting />
  </Container>
)

export default IndexPage
