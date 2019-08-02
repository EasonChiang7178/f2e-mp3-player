import React from "react"

const defaultContextValue = {}
const Context = React.createContext(defaultContextValue)

const ImageAssetsProvider = ({ imageAssets, children }) => (
  <Context.Provider value={imageAssets}>
    {children}
  </Context.Provider>
)

const ImageAssetsConsumer = Context.Consumer

export { Context as default, ImageAssetsProvider, ImageAssetsConsumer }
