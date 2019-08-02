import React, { useContext } from "react"
import styled from "styled-components"

import imageAssetsContext from "../../contexts/ImageAssetsContext"
import playerContext from "../../contexts/PlayerContext"

import Header from "./Header"
import List from "./List"

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const PlayList = () => {
  const imageAssets = useContext(imageAssetsContext)
  const player = useContext(playerContext)

  const curPlayList = player.playLists.find(
    list => list.name === player.playing.playList_name
  )

  return (
    <Container>
      <Header
        name={curPlayList.name}
        cover={imageAssets[curPlayList.cover]}
      />
      <List items={curPlayList.items} />
    </Container>
  )
}

export default PlayList