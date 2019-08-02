import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Cover, InfoWrapper, Name, PlayButton } from "./Header.css"

const Header = ({ name, cover }) => {
  return (
    <Wrapper>
      <Cover fluid={cover} />
      <InfoWrapper>
        <Name>{name}</Name>
      </InfoWrapper>

      <PlayButton />
    </Wrapper>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  cover: PropTypes.object.isRequired
}

export default Header
