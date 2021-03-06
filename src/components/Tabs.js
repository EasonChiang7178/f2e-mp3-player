import styled, { keyframes } from "styled-components"
import { Tab as RawTab, Tabs as RawTabs, TabList as RawTabList, TabPanel as RawTabPanel } from "react-tabs"

export const Tabs = styled(RawTabs)`
  margin-bottom: 40px;
`

export const TabList = styled(RawTabList)`
  margin: 0;
  margin-bottom: 25px;
  padding: 0;
  height: 32px;
  list-style-type: none;
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  font-family: "Helvetica Neue";
`

export const Tab = styled(RawTab)`
  padding-bottom: 3px;
  min-height: 21px;
  font-size: 16px;
  line-height: 19px;
  transition: font-size .1s linear, border-bottom .2s ease;

  &.react-tabs__tab--selected {
    font-size: 20px;
    line-height: 25px;
    border-bottom: 4px solid white;
  }
  
  &:focus {
    outline: none;
  }

  & + & {
    margin-left: 30px;
  }
`

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

export const TabPanel = styled(RawTabPanel)`
  opacity: 0;

  &.react-tabs__tab-panel--selected {
    animation-name: ${fadeIn};
    animation-duration: .6s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: .3s;
  }
`
