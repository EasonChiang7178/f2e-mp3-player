import React, { useContext } from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"

import playerContext from "../../contexts/PlayerContext"
import { Wrapper, BgImg, BgMask, InfoWrapper, Name, Description } from "./PlayListBlock.css"

const PlayListBlock = ({ className, name, description, cover, onClick }) => {
  const player = useContext(playerContext)

  const handleOnClick = () => {
    player.setPlayList(name)
    navigate("/list")
  }

  return (
    <Wrapper className={className} onClick={handleOnClick}>
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
  cover: PropTypes.object.isRequired,
  onClick: PropTypes.func
}

export default PlayListBlock