import { StylesContext } from "@material-ui/styles";
import React, { useContext, useEffect } from "react";
import { Text, StyleSheet } from 'react-native';
import Tts from 'react-native-tts';

import { appContext } from "../../App";

const TokenDisplay = () => {
  Tts.setDefaultRate(0.5);
  const state = useContext(appContext);

  let speechText = `Currently token number ${state.token} is going for consultation. Be ready for your consultation, token number ${state.token + 1}. Have a happy consultation from docs q` ;

  useEffect(() => {
    Tts.stop();
    Tts.speak(state.token ? speechText : "", {
      androidParams: {
        KEY_PARAM_PAN: 0,
        KEY_PARAM_VOLUME: 1.0,
        KEY_PARAM_STREAM: 'STREAM_MUSIC',
      },
    });
  },[state])

  return (
    <Text style={styles.text}>
      {state.token
        ?`Token Number ${state.token}`
        :null}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    marginTop: 50,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 30
  }
})

export default TokenDisplay;
