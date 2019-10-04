import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Animated, Easing } from 'react-native'

import MotorBody from './MotorBody'
import Tire from './Tire'

const DEVICE_WIDTH = Dimensions.get('window').width

export default class Car extends Component {
  state = {
    animation: new Animated.Value(DEVICE_WIDTH)
  }

  componentDidMount() {
    this._startAnimation()
  }

  _startAnimation = () => {
    Animated.loop(
      Animated
        .timing(this.state.animation, {
          duration: 7000,
          toValue: -200,
          easing: Easing.cubic
        })
    ).start()
  }

  render() {
    const animetedStyles = {
      left: this.state.animation
    }

    return (
      <View style={[styles.container, { ...this.props.style }]}>
        <Animated.View style={[styles.car, animetedStyles]}>
          <MotorBody />

          <View style={styles.tire1}>
            <Tire />
          </View>

          <View style={styles.tire2}>
            <Tire />
          </View>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10
  },
  car: {
    position: 'relative',
    width: 200,
    height: 200
  },
  tire1: {
    position: 'absolute',
    left: 4, 
    bottom: -14
  },
  tire2: {
    position: 'absolute',
    right: 23, 
    bottom: -14
  }
})
