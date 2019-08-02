import React from "react"
import PropTypes from "prop-types"

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
  static propTypes = {
    mp3Assets: PropTypes.object,
    playLists: PropTypes.array
  }

  static defaultProps = {
    mp3Assets: {},
    playLists: []
  }

  constructor(props) {
    super(props)

    this.state = {
      mp3Assets: props.mp3Assets,
      playLists: props.playLists,
      history: [],
      playing: {
        status: "",
        song_id: "",
        order: "shuffle",
        playList_name: props.playLists.length > 0
          ? props.playLists[0].name
          : ""
        ,
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
