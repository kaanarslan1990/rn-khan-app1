import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        style={styles.button}
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        style={styles.button}
        title="Descrease"
        color={"red"}
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text style={styles.num}>Number : {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    marginVertical:50
  },
  num :{
    fontSize:30,
    textAlign:'center'
  }
});
