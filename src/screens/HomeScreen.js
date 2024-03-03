import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Page</Text>
      <Button
        title="Courses"
        onPress={() => navigation.navigate('Courses')}
      />
      <Button
        title="Course Info"
        onPress={() => navigation.navigate('CourseInfo')}
      />
      <Button
        title="Counter App"
        onPress={() => navigation.navigate('Counter')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})