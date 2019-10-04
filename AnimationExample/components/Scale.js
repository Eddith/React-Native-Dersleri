import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet, 
  View, 
  Animated, 
  TouchableNativeFeedback } from 'react-native'

export default class Scale extends Component {
  state = {
    animation: new Animated.Value(1)
  }

  _startAnimation = () => {
    Animated
      .timing(this.state.animation, {
        toValue: -1,
        duration: 500
      })
      .start()
  }
  render() {
    const animatedStyles = {
      transform: [
        {
          scale: this.state.animation
        }
      ]
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
