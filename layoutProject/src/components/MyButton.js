import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export default class MyButton extends Component {
  render() {
    const {color, backgroundColor} = this.props
    return (
      <TouchableOpacity style={[styles.button, { backgroundColor }]}>
        <Text style={[styles.text, {color}]}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 3,
    alignItems: 'center'
  },
  text: {
    fontSize: 14
  }
})
