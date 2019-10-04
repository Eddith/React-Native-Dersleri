import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet, 
  View, 
  Animated, 
  TouchableNativeFeedback } from 'react-native'

export default class Interpolation extends Component {
  state = {
   animation: new Animated.Value(0)
  }

  _startAnimation = () => {
    Animated
      .timing(this.state.animation, {
        toValue: 1,
        duration: 500
      })
      .start()
  }
  render() {
    const boxInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['red', 'black']
    })

    const textInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['black', 'white']
    })

    const boxAnimatedStyles = {
      backgroundColor: boxInterpolate
    }

    const textAnimatedStyles = {
      color: textInterpolate
    }
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={this._startAnimation}>
          <Animated.View style={[styles.myBox, boxAnimatedStyles]}>
            <Animated.Text style={[textAnimatedStyles]}>React Native</Animated.Text>
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
