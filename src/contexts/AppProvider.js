import React from "react"
import PropTypes from "prop-types"

import { ImageAssetsProvider } from "./ImageAssetsContext"
import { PlayerProvider } from "./PlayerContext"

import { useMp3Assets } from "../hooks/useMp3Assets"
import { usePlayListsData } from "../hooks/usePlayListsData"
import { usePlayListCoverAssets } from "../hooks/usePlayListCoverAssets"

const AppProvider = ({ children }) => {
  const mp3Assets = useMp3Assets()
  const playLists = usePlayListsData()
  const playListCovers = usePlayListCoverAssets()

  return (
    <ImageAssetsProvider imageAssets={playListCovers}>
      <PlayerProvider mp3Assets={mp3Assets} playLists={playLists}>
        {children}
      </PlayerProvider>
    </ImageAssetsProvider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppProvider
