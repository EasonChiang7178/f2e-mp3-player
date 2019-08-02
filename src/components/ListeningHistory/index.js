import React, { useContext } from "react"
import { Tabs, TabList, Tab, TabPanel } from "../Tabs"

import playContext from "../../contexts/PlayerContext"
import HistoryList from "./HistoryList"

const ListeningHistory = () => {
  const history = useContext(playContext).history

  return history.length > 0 ? (
    <Tabs>
      <TabList>
        <Tab>Listening History</Tab>
      </TabList>

      <TabPanel>
        <HistoryList items={history} />
      </TabPanel>
    </Tabs>
  ) : null
}

export default ListeningHistory
