import React from "react"
import PropTypes from "prop-types"

const MAX_HISTORY_SIZE = 5

const defaultContextValue = {
  mp3Assets: {},
  playLists: [],
  history: [],
  playing: {
    status: "",
    song_id: "",
    order: "shuffle",
    playListName: "",
    volume: 70
  },
  setPlayList: () => {}
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
        playListName: props.playLists.length > 0
          ? props.playLists[0].name
          : ""
        ,
        volume: 70,
      },
      setPlayList: this.setPlayList
    }
  }

  addListToHistory = (playListName) => {
    const curListInHistoryIndex = this.state.history.findIndex(listName => listName === playListName)
    const historyCopied = [...this.state.history]

    if (curListInHistoryIndex !== -1) {
      historyCopied.splice(curListInHistoryIndex, 1)
    } else if (historyCopied.length >= MAX_HISTORY_SIZE) {
      historyCopied.splice(0, historyCopied.length - (MAX_HISTORY_SIZE - 1))
    }

    this.setState(() => ({
      history: [playListName, ...historyCopied],
    }))
  }

  setPlayList = (playListName) => {
    this.addListToHistory(playListName)

    this.setState(state => ({
      playing: {
        ...state.playing,
        playListName: playListName
      }
    }))
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
