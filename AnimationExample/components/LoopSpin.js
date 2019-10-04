import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet, 
  View, 
  Easing,
  Animated, 
  TouchableNativeFeedback } from 'react-native'

export default class LoopSpin extends Component {
  state = {
    animation: new Animated.Value(0)
  }

  _startAnimation = () => {
    Animated.loop(
      Animated
      .timing(this.state.animation, {
        duration: 2400,
        toValue: 1,
        easing: Easing.linear
      })
    ).start()
      
  }

  render() {
    const interpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    const animatedStyles = {
      transform: [{
        rotate: interpolation
      }]
    }
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={this._startAnimation}>
          <Animated.Image 
            source={require('../assets/react-logo.png')}
            style={[styles.myBox, animatedStyles]} />
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
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
