import { StyleSheet, Text, View, Button } from "react-native";
import React, { useReducer, useState } from "react";

//state =={count:0}
//actio =={type:'increment' || type:'decrement', payload}

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };    
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
export default function CounterScreen() {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Button
        style={styles.button}
        title="Increase"
        onPress={() => {
          // setCounter(counter + 1);
          dispatch({ type: "increment", payload: 1 });
        }}
      />
      <Button
        style={styles.button}
        title="Descrease"
        color={"red"}
        onPress={() => {
          // setCounter(counter - 1);
          dispatch({ type: "decrement", payload: 1 });
        }}
      />
      <Text style={styles.num}>Number : {state.count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    marginVertical: 50,
  },
  num: {
    fontSize: 30,
    textAlign: "center",
  },
});
