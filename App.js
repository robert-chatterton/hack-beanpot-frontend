import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

// Home page for the webapp
function HomeScreen({navigation}) {
  return(
    <SafeAreaView style={styles.container}>
      <Header />
      <Button
        title="Search"
        onPress={() => navigation.navigate('Locator')}
      />
    </SafeAreaView>
  );
}

// Screen for after a search happens
function LocatorScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>WELCOME TO MY HOOD</Text> 
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

// Acting like a main function
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={HomeScreen} />
        <Stack.Screen name = "Locator" component={LocatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D593B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});