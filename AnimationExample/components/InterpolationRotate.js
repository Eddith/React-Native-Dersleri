import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet, 
  View, 
  Animated, 
  TouchableNativeFeedback } from 'react-native'

export default class InterpolationRotate extends Component {
  state = {
   animation: new Animated.Value(0)
  }

  _startAnimation = () => {
    Animated
      .timing(this.state.animation, {
        toValue: 360,
        duration: 1000
      })
      .start()
  }
  render() {
    const interpolation = this.state.animation.interpolate({
      inputRange: [0, 360],
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
    width: 200,
    height: 200,
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
