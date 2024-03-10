import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DesignScreen() {
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}>Layout</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    mainView:{
        borderWidth:1,
        borderColor:'black',
        margin:20,
        borderRadius:20,
    },
    mainText:{
        borderWidth:1,
        borderColor:'red',
        margin:30,
        padding:20,
        borderRadius:10
    }
});
