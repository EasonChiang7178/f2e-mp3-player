import React, { useContext } from "react"

import imageAssetsContext from "../../contexts/ImageAssetsContext"
import PlayListBlock from "./PlayListBlock"
import { Container } from "./index.css"

const PlayListCarousel = ({ lists }) => {
  const imageAssets = useContext(imageAssetsContext)

  return (
    <Container>
      {lists.map(list => (
        <PlayListBlock
          key={list.name}
          name={list.name}
          description={list.description}
          cover={imageAssets[list.cover]}
        />
      ))}
    </Container>
  )
}

export default PlayListCarousel
