import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Screens from './screens/index';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={Screens.home} />
          <Stack.Screen name="isstracker" component={Screens.tracker} />
          <Stack.Screen name="meteor" component={Screens.meteor} />
          <Stack.Screen name="update" component={Screens.update} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
