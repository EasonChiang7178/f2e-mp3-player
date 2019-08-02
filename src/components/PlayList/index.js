import React, { useContext } from "react"
import Header from "./Header"

import imageAssetsContext from "../../contexts/ImageAssetsContext"
import playerContext from "../../contexts/PlayerContext"

const PlayList = () => {
  const imageAssets = useContext(imageAssetsContext)
  const player = useContext(playerContext)

  const curPlayList = player.playLists.find(
    list => list.name === player.playing.playList_name
  )

  return (
    <>
      <Header
        name={curPlayList.name}
        cover={imageAssets[curPlayList.cover]}
      />
    </>
  )
}

export default PlayList