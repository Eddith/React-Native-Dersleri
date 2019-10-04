import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default class FlowersAndWay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../../assets/flowers-and-way.png')}
          style={styles.flowers}
          resizeMode={'contain'}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    zIndex: 5
  },
  flowers: {
    width: '80%'
  }
})
