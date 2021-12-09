import React, { createContext, useReducer } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import TokenDisplay from './components/tokenDisplay/TokenDisplay';
import AdjustButton from './components/adjustButton/AdjustButton';

export const appContext = createContext();
export const dispatchAppContext = createContext();

function reducer(state, action) {
  switch (action) {
    case 'increment':
      return { token: state.token + 1 }
    case 'decrement':
      return { token: state.token - 1 }
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    token: 0,
  })

  return (
    <SafeAreaView>
      <appContext.Provider value={state}>
        <dispatchAppContext.Provider value={dispatch}>
          <TokenDisplay />
          <AdjustButton text={state.token ? "Increment Token" : "Start"} action="increment" />
          <AdjustButton text={state.token ? "Decrement Token" : ""} action="decrement" />
        </dispatchAppContext.Provider>
      </appContext.Provider>
    </SafeAreaView>
  )
}

export default App;
