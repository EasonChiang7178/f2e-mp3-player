import React from "react"
import PropTypes from "prop-types"

import { Wrapper, BgImg, BgMask, InfoWrapper, Name, Description } from "./PlayListBlock.css"

const PlayListBlock = ({ className, name, description, cover }) => {
  
  return (
    <Wrapper className={className}>
      <BgImg fluid={cover} />
      <BgMask />

      <InfoWrapper>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </InfoWrapper>
    </Wrapper>
  )
}

PlayListBlock.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cover: PropTypes.object.isRequired
}

export default PlayListBlock