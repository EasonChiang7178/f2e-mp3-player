import React from "react"
import { Tabs, TabList, Tab, TabPanel } from "./Tabs"

const PlayListExplorer = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>For you</Tab>
        <Tab>Discovery</Tab>
      </TabList>

      <TabPanel>
        <h2>First</h2>
      </TabPanel>
      <TabPanel>
        <h2>Second</h2>
      </TabPanel>
    </Tabs>
  )
}

export default PlayListExplorer
