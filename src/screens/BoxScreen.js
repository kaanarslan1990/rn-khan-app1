import { Button, FlatList, StyleSheet,  View } from 'react-native'
import React, { useState } from 'react'

export default function BoxScreen() {
    const [colors, setColors] = useState([]);
    const randomColor= ()=> {
        const red=Math.floor(Math.random() * 256)
        const green=Math.floor(Math.random() * 256)
        const blue=Math.floor(Math.random() * 256)
        return `rgb(${red},${green},${blue})`
    }
  return (
    <View  />
  )
}

const styles = StyleSheet.create({})