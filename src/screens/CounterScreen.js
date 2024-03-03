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
      <Text>Number : {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 20,
  },
});
