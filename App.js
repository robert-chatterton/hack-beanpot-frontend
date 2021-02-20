import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import Header from './components/Header';
export default function App() {
  console.log(Dimensions.get('window'));

  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
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

// <Text>Open up App.js to start working on your app!</Text>
// <Button
//   color='red'
//   title='SEARCH'
//   onPress={() => console.log('test')
// }/>
