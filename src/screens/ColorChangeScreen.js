import { Button, StyleSheet, SwitchBase, View } from "react-native";
import React, { useReducer } from "react";
import ColorChange from "../../components/ColorChange";

const reducer = (state, action) => {
  switch (action.type) {
    case "changeRed":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
      break;
    case "changeBlue":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
      break;
    case "changeGreen":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
      break;
    default:
      break;
  }
};
export default function ColorChangeScreen() {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const {red,green,blue}= state
  return (
    <View>
      <ColorChange
        color="Red"
        onIncrease={() => dispatch({ type: "changeRed", payload: 20 })}
        onDecrease={() => dispatch({ type: "changeRed", payload: -20 })}
      />
      <ColorChange
        color="Blue"
        onIncrease={() => dispatch({ type: "changeBlue", payload: 20 })}
        onDecrease={() => dispatch({ type: "changeBlue", payload: -20 })}
      />
      <ColorChange
        color="Green"
        onIncrease={() => dispatch({ type: "changeGreen", payload: 20 })}
        onDecrease={() => dispatch({ type: "changeGreen", payload: -20 })}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${blue},${green})`,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({});
