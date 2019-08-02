import React from "react"
import styled from "styled-components"

import SEO from "../layouts/SEO"
import Greeting from "../components/Greeting"
import PlayListExplorer from "../components/PlayListExplorer"
import ListeningHistory from "../components/ListeningHistory"

import { YELLOW_2 } from "../constants/COLORS"

const Container = styled.div`
  padding: 30px 30px 0;
  height: 100%;
  max-height: calc(100% - 30px);
  background: ${YELLOW_2};
  overflow: auto;
`

const IndexPage = () => (
  <Container>
    <SEO title="Music Player" />

    <Greeting />
    <PlayListExplorer />
    <ListeningHistory />
  </Container>
)

export default IndexPage
