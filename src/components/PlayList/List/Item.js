import React from "react"
import PropTypes from "prop-types"

import { Wrapper, InfoWrapper, Name, Author, Duration } from "./Item.css"

const Item = ({ name, author, duration }) => {
  return (
    <Wrapper>
      <InfoWrapper>
        <Name>{name}</Name>
        <Author>{author}</Author>
      </InfoWrapper>

      <Duration>{duration}</Duration>
    </Wrapper>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
}

export default Item
