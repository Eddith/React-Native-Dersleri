import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet, 
  View, 
  Animated, 
  TouchableNativeFeedback } from 'react-native'

export default class MultiField extends Component {
  state = {
    animationWidth: new Animated.Value(200),
    animationHeight: new Animated.Value(200)
  }

  _startAnimation = () => {
    Animated
      .timing(this.state.animationWidth, {
        toValue: 350,
        duration: 300
      })
      .start()

      Animated
        .timing(this.state.animationHeight, {
          toValue: 350,
          duration: 500
        })
        .start()
  }
  render() {
    const animatedStyles = {
      width: this.state.animationWidth,
      height: this.state.animationHeight
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
    /*width: 200,
    height: 200,*/
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
