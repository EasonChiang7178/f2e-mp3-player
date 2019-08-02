import React, { useContext } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import playerContext from "../../contexts/PlayerContext"
import imageAssetsContext from "../../contexts/ImageAssetsContext"
import HistoryItem from "./HistoryItem"

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  margin-left: -30px;
  overflow: auto;
  overflow-y: hidden;

  &::before, &::after {
    display: block;
    width: 30px;
    height: 1px;
    background-color: transparent;
    content: "";
    position: relative;
    flex: 0 0 auto;
  }
`

const HistoryList = ({ items }) => {
  const player = useContext(playerContext)
  const imageAssets = useContext(imageAssetsContext)

  const handleOnClick = (playListName) => player.setPlayList(playListName)

  return (
    <Container>
      {items.map(item => {
        const playList = player.playLists.find(list => list.name === item)
        return (
          <HistoryItem
            key={playList.name}
            name={playList.name}
            cover={imageAssets[playList.cover]}
            onClick={handleOnClick}
          />
        )
      })}
    </Container>
  )
}

HistoryList.prototype = {
  items: PropTypes.array
}

export default HistoryList
