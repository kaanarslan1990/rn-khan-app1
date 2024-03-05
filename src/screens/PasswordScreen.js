import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function PasswordScreen() {
  const [password, setPassword] = useState("");
  return (
    <View style={styles.main}>
      <Text>Enter your Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 6 ? (
        <Text style={styles.warn}>Your password minlength must be 6 character!</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: 4,
    margin: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  warn :{
    color:'red'
  }
});
