import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

// Home page for the WebApp
function HomeScreen( {navigation} ) {
  return(
    <SafeAreaView style={styles.container}>
      <Header />
        <Button
          color= '#A62F24'
          title= "search"
          onPress= {() => navigation.navigate('Map Page')}
        />
    </SafeAreaView>
  );
}

// Screen for after a search happens
function LocatorScreen( {navigation} ) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Button
        color = '#A62F24'
        title = "go back"
        onPress = {() => navigation.navigate('Home Page')}
      />
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

// Acting like a main function
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Home Page"
          component = {HomeScreen}
          options = {{
            headerShown: false
          }}
          />
        <Stack.Screen
        name = "Map Page"
        component={LocatorScreen}
        options = {{
          headerShown: false
        }}
        />
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
