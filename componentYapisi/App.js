import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Card from './src/component/Card'

export default class App extends Component {
  state = {
    number: 0
  }

  onPressIncrease = () => {
    this.setState({
      number: ++this.state.number
    })
  }

  onPressDecrease = () => {
    this.setState({
      number: --this.state.number
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.number}>{this.state.number}</Text>
        </View>
        <View style={styles.buttons}>
          <Button 
            title='Azalt'
            color='#000'
            onPress={this.onPressDecrease}
          />
          <Button 
            title='Arttır'
            color='#000'
            onPress={this.onPressIncrease}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEB3B',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row'
  },
  number: {
    fontSize: 44
  }
})
/* 
<Card text='Merhaba' backgroundColor='blue'/>
<Card text='🚀'/>
<Card text='React Native' backgroundColor='red'/>
*/
