import styled from "styled-components"
import { Link } from "gatsby"

import { YELLOW_1 } from "../constants/COLORS"

export const BottomNavList = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${YELLOW_1};
`

export const NavLink = styled(Link).attrs(() => ({
  activeStyle: { opacity: 1 }
}))`
  position: relative;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-decoration: none;
  color: white;
  opacity: .7;
  transition: opacity .3s ease;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  & + & {
    margin-left: 60px;
  }
`

export const LinkText = styled.span`
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
`
