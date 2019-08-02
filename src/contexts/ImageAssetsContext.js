import React from "react"

const defaultContextValue = {}
const Context = React.createContext(defaultContextValue)

const ImageAssetsProvider = ({ imageAsset, children }) => (
  <Context.Provider value={imageAsset}>
    {children}
  </Context.Provider>
)

const ImageAssetsConsumer = Context.Consumer

export { Context as default, ImageAssetsProvider, ImageAssetsConsumer }
