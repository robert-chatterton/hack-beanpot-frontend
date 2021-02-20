import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Center from 'react-center';

import Location from './components/Location'
// import MapView from 'react-native-maps';

// Home page for the WebApp
function HomeScreen( {navigation} ) {
  return(
    <SafeAreaView style={styles.container}>
      <Location />
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
          options = {navBarOptions}
          />
        <Stack.Screen
        name = "Map Page"
        component={LocatorScreen}
        options = {navBarOptions}
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

  screenLayout: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const navBarOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#3B452D'
  },
  headerTintColor: '#DFB37D',
  headerTitleStyle: {
      fontSize: 30,
      fontWeight: 600
  },
};
