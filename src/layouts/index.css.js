import styled from "styled-components"
import posed from "react-pose"

import BottomNav from "./BottomNavigator"
import { BOTTOM_NAVIGATOR_HEIGHT } from "../constants/LAYOUTS"

export const PageContainer = styled.main`
  position: relative;
  max-width: 425px; /* [NOTE] support mobile device now */
  height: 100vh;
  min-height: 568px;
  margin-left: auto;
  margin-right: auto;
  background: white;
  box-shadow: 0 3px 8px #cccccc;
`

const PageWrapperPosed = posed.section({
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

export const PageWrapper = styled(PageWrapperPosed)`
  position: relative;
  max-height: ${`calc(100% - ${BOTTOM_NAVIGATOR_HEIGHT}px)`};
  overflow: auto;
`

export const BottomNavigator = styled(BottomNav)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${BOTTOM_NAVIGATOR_HEIGHT}px;
`
