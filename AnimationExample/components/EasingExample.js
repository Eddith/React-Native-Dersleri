import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet, 
  View, 
  Animated, 
  TouchableNativeFeedback,
  Easing,
  Dimensions } from 'react-native'

export default class EasingExample extends Component {
  state = {
   animation: new Animated.Value(0)
  }

  _startAnimation = () => {
    Animated
      .timing(this.state.animation, {
        toValue: Dimensions.get('window').width - 200,
        duration: 1000,
        // easing: Easing.bounce,
        easing: Easing.back(4),
        // easing: Easing.elastic(20)
      })
      .start(() => {
        Animated
          .timing(this.state.animation, {
            toValue: 0,
            duration: 1000,
            easing: Easing.elastic(3),
          })
          .start(() => {
            this._startAnimation()
          })
      })
  }
  render() {
    const animatedStyles = {
      transform: [{
        translateX: this.state.animation
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
