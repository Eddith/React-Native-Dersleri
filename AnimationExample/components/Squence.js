import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet, 
  View, 
  Animated, 
  TouchableNativeFeedback } from 'react-native'

export default class Squence extends Component {
  state = {
    animationScale: new Animated.Value(1),
    animationOpacity: new Animated.Value(.4)
  }

  _startAnimation = () => {
  Animated.sequence([
    Animated
      .timing(this.state.animationOpacity, {
        duration: 500,
        toValue: 1
      }),
    Animated
      .timing(this.state.animationScale, {
        duration: 120,
        toValue: 1.3
      })
    ]).start(() => {
      alert('animasyon bitti')
    })
  }
  render() {
    const animatedStyles = {
      transform: [{
        scale: this.state.animationScale
      }],
      opacity: this.state.animationOpacity
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
    alignItems: 'center'
  }
})
