import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'

import io from 'socket.io-client'

export default class App extends Component {
  state = {
    onlineCount: 0,
    color: '#f1f1f1'
  }

  componentDidMount() {
    this.io = io.connect('http://192.168.1.34:8080', {
      timeout: 10000
    })

    this.io.on('newUser', onlineCount => {
      this.setState({
        onlineCount,
      })
    })

    this.io.on('disUser', onlineCount => {
      this.setState({
        onlineCount,
      })
    })

    this.io.on('changeColor', color => {
      this.setState({
        color
      })
    })
  }

  generetaColor = () => {
    return '#' + Math.random().toString(16).slice(2,8)
  }

  changeColor = () => {
    let color = this.generetaColor()
    this.setState({
      color
    })

    this.io.emit('changeColor', color)
  }

  render() {
    return (
      <View style={[styles.conatainer, { backgroundColor: this.state.color }]}>
        <TouchableHighlight 
          onPress={this.changeColor}
          style={styles.button}>
          <React.Fragment>
            <Text style={styles.color}>{this.state.color}</Text>
            <View style={styles.countContainer}>
              <Text style={styles.count}>{this.state.onlineCount}</Text>
              <Text>Online now</Text>
            </View>
          </React.Fragment>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
  countContainer: {
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 5
  },
  count: {
    fontSize: 32
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } ,
  color: {
    fontSize: 28,
    padding: 10
  }
})
