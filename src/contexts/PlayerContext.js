import React from "react"

const defaultContextValue = {
  mp3Assets: {},
  playLists: [],
  history: [],
  playing: {
    status: "",
    song_id: "",
    order: "shuffle",
    playList_name: "",
    volume: 70
  },
}
const Context = React.createContext(defaultContextValue)

class PlayerProvider extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      mp3Assets: props.mp3Assets || {},
      playLists: props.playLists || [],
      history: [],
      playing: {
        status: "",
        song_id: "",
        order: "shuffle",
        playList_name: "",
        volume: 70,
      },
    }
  }

  render = () => {
    const { children } = this.props

    return (
      <Context.Provider value={this.state}>
        {children}
      </Context.Provider>
    )
  }
}

const PlayerConsumer = Context.Consumer

export { Context as default, PlayerProvider, PlayerConsumer }
