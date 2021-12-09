import React, { useContext } from "react";
import { Button, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { dispatchAppContext, appContext } from "../../App";

const AdjustButton = (props) => {
  const handleClick = () => {
    appDispatch(props.action)
  }
  const appDispatch = useContext(dispatchAppContext);

  return (
    <View style={styles.container}>
      {props.text
        ? <TouchableOpacity style={styles.button} onPress={handleClick} >
            <Text style={styles.text}>{props.text}</Text>
          </TouchableOpacity>
        : null}
    </ View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 16,
  },
  button: {
    backgroundColor: '#0000FF',
    paddingBottom: 20,
    paddingTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  }
})

export default AdjustButton;
