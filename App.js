import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Center from 'react-center';

import Location from './components/Location'
import List from './components/List'
// import MapView from 'react-native-maps';

// Search button functionality
function Search ( {navigation} ) {
  return navigation.navigate('Map Page')
};


// Home page for the WebApp
function HomeScreen( {navigation} ) {
  return(
    <SafeAreaView style={styles.container}>
      <Location />
      <TouchableOpacity
        style = {styles.button}
        onPress = { () => navigation.navigate('Map Page') }>
          <Text style = {styles.text}>
            Search
          </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Screen for after a search happens
function LocatorScreen( {navigation} ) {
  return (
    <SafeAreaView style={styles.container}>
      <List />
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

  text: {
    color: '#DFB37D',
    fontSize: 25,
    fontWeight: 600
  },

  button: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 30,
    paddingBottom: 30,
    borderColor: "#DFB37D",
    borderWidth: 2,
    marginTop: 15,
    backgroundColor: '#A62F24',
    borderRadius: 10,
    alignItems: 'center',
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
