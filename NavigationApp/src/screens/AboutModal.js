import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class AboutModal extends Component {
  render() {
    const {goBack} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.title}>About Modal!</Text>
        <TouchableOpacity onPress={() => goBack()}>
          <Text style={{ 
            fontSize: 18, 
            fontWeight: 'bold',
            color: 'blue' }}>Close</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 34
  }
})
