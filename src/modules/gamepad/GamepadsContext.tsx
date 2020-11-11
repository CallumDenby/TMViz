import * as React from 'react'
import { GamepadsContextValue, GamepadValue } from './types'

const initialState: GamepadsContextValue = {
  gamepads: {},
  updateGlobalGamepads: () => {
    //
  }
}

export const GamepadsContext = React.createContext(initialState)

export const GamepadsProvider: React.FC = ({ children }) => {
  const [state, updateState] = React.useState<Record<string, GamepadValue>>(initialState.gamepads)

  return <GamepadsContext.Provider value={{ gamepads: state, updateGlobalGamepads: updateState }}>{children}</GamepadsContext.Provider>
}