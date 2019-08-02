import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"

import { Wrapper, Image, Name } from "./HistoryItem.css"

const HistoryItem = ({ name, cover, onClick }) => {
  const handleOnClick = () => {
    onClick(name)
    navigate("/list")
  }

  return (
    <Wrapper onClick={handleOnClick}>
      <Image fluid={cover} />
      <Name>{name}</Name>
    </Wrapper>    
  )
}

HistoryItem.protoTypes = {
  name: PropTypes.string.isRequired,
  cover: PropTypes.object,
  onClick: PropTypes.func
}

export default HistoryItem
