import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

import styles from './style';

class List extends Component {
  state = {
    // receive parklist from backend boys
    parkList: [
      {
        id:0,
        name: 'Acadia'
      },
      {
        id:1,
        name: 'Yellowstone'
      },
      {
        id:2,
        name: 'Big Bend'
      },
      {
        id:3,
        name: 'Hooplah'
      }
    ]
  }
  alertItemName = (item) => {
    alert(item.name)
  }
  render() {
    return (
      <View>
          {
            this.state.parkList.map((item, index) => (
              <TouchableOpacity
                key = {item.id}
                style = {styles.container}
                onPress = {() => this.alertItemName(item) }>
                  <Text style = {styles.text}>
                    {item.name}
                  </Text>
              </TouchableOpacity>
            ))
          }
      </View>
    )
  }
}
export default List
