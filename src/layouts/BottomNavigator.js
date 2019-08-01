import React from "react"
import PropTypes from "prop-types"

import { BottomNavList, NavLink, LinkText } from "./BottomNavigator.css"
import homeIconPath from "../images/home_icon.svg"
import listIconPath from "../images/list_icon.svg"

const BottomNavigator = ({ className }) => {
  const homePath = '/'
  const playListPath = "/list"

  return (
    <BottomNavList className={className}>
      <NavLink to={homePath}>
        <img src={homeIconPath} />
        <LinkText>Home</LinkText>
      </NavLink>
      <NavLink to={playListPath}>
        <img src={listIconPath} />
        <LinkText>PlayList</LinkText>
      </NavLink>
    </BottomNavList>
  )
}

BottomNavigator.prototype = {
  className: PropTypes.string
}

export default BottomNavigator
