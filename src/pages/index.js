import React from "react"
import styled from "styled-components"

import SEO from "../layouts/SEO"
import Greeting from "../components/Greeting"
import PlayListExplorer from "../components/PlayListExplorer"

import { YELLOW_2 } from "../constants/COLORS"

const Container = styled.div`
  padding: 30px 30px 0;
  height: calc(100% - 30px);
  background: ${YELLOW_2};
`

const IndexPage = () => (
  <Container>
    <SEO title="Music Player" />

    <Greeting />
    <PlayListExplorer />
  </Container>
)

export default IndexPage
