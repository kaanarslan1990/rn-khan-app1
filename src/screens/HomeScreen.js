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
      <Button
        title="Box App"
        onPress={() => navigation.navigate('Box')}
      />
      <Button
        title="Change Color"
        onPress={() => navigation.navigate('ChangeColor')}
      />
      <Button
        title="Password Screen"
        onPress={() => navigation.navigate('PasswordScreen')}
      />
      <Button
        title="Design Screen"
        onPress={() => navigation.navigate('DesignScreen')}
      />

    </View>
  )
}

const styles = StyleSheet.create({})