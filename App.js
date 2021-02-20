import { StatusBar } from 'expo-status-bar';
import React from 'react';
<<<<<<< HEAD
import { Dimensions, StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
=======
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
>>>>>>> c81af73c7cfea24ee6246e76e03056612f6bb6f6

export default function App() {
  console.log(Dimensions.get('window'));

  return (
<<<<<<< HEAD
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'red',
        width: '100%',
        height: '30%'
      }}></View>
    </SafeAreaView>
=======
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
    </View>
>>>>>>> c81af73c7cfea24ee6246e76e03056612f6bb6f6
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
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
