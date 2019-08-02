import React, { useContext } from "react"
import { Tabs, TabList, Tab, TabPanel } from "./Tabs"

import playContext from "../contexts/PlayerContext"
import PlayListCarousel from "../components/PlayListCarousel"

const PlayListExplorer = () => {
  const playLists = useContext(playContext).playLists
  const recommendedLists = playLists.filter(list => list.category === "recommendation")
  const discoveryLists = playLists.filter(list => list.category === "discovery")

  return (
    <Tabs>
      <TabList>
        <Tab>For you</Tab>
        <Tab>Discovery</Tab>
      </TabList>

      <TabPanel>
        <PlayListCarousel lists={recommendedLists} />
      </TabPanel>
      <TabPanel>
        <PlayListCarousel lists={discoveryLists} />
      </TabPanel>
    </Tabs>
  )
}

export default PlayListExplorer
