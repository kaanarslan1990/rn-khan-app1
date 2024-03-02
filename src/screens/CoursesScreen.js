import { FlatList, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function CoursesScreen() {
   const courses = [
    { name: "Angular", id: 1 },
    { name: "Reactjs", id: 2 },
    { name: "C#", id: 3 },
    { name: "C Programlaam", id: 4 },
    { name: "Bootstrap", id: 5 },
  ];
  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      data={courses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Text style={styles.content}>{item.name}</Text>;
      }}
    />
  )
}

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    backgroundColor: "yellow",
    marginVertical: 10,
    padding: 20,
  },
})