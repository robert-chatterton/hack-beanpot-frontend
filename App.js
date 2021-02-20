import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';

export default function App() {
  console.log(Dimensions.get('window'));

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'red',
        width: '100%',
        height: '30%'
      }}></View>
    </SafeAreaView>
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
