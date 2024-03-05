import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function ColorChange({color, onIncrease,onDecrease}) {
  return (
    <View>
      <Text style={{textAlign:'center', fontSize:30}}>{color}</Text>
      <Button color={'blue'} title={`${color} increase`} onPress={()=> onIncrease()} />
      <Button color={'red'} title={`${color} decrease`} onPress={()=> onDecrease()}/>
    </View>
  )
}

const styles = StyleSheet.create({})