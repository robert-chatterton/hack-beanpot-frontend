import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

import Locater from './Locater';
import { render } from 'react-dom';

// Home page for the webapp
export default function App() {
  console.log(Dimensions.get('window'));
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

goToLocater 

render() {
  return (
    <View style={styles.container}>
      <Text> Hello </Text>
      <Button
        onPress={}
        title="Search"
      />
    </View>
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

// For navigation through different screens
export default StackNavigator({
  Home: {
    screen: App
  },
  Locater: {
    screen: Locater
  }
});