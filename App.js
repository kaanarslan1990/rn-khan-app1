import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import CoursesInformation from './src/screens/CoursesInformation';
import CounterScreen from './src/screens/CounterScreen';
import BoxScreen from './src/screens/BoxScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen name="CourseInfo" component={CoursesInformation} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Box" component={BoxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


