import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet, 
  View, 
  Animated, 
  TouchableNativeFeedback } from 'react-native'

export default class Spring extends Component {
  state = {
   animation: new Animated.Value(0)
  }

  _startAnimation = () => {
    Animated
      .spring(this.state.animation, {
        duration: 300,
        toValue: 30
      })
      .start()
  }
  render() {
    const animatedStyles = {
      bottom: this.state.animation,
      left: this.state.animation,
      right: this.state.animation
    }
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={this._startAnimation}>
          <Animated.View style={[styles.myBox, animatedStyles]}>
            <Text>React Native</Text>
          </Animated.View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  myBox:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right:0,
    height: 100,
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
