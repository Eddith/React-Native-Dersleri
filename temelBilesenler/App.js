import React, { Component } from 'react'
import { 
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView } from 'react-native'

import axios from 'axios'
import FlatListExample from './src/components/FlatListExample'
//import PlatformExample from './src/components/PlatformExample'

export default class App extends Component {
 /* state = {
    name: '',
    surname: '',
    loading: true
  }

  componentDidMount() {
    this._getRandomUser()
  }

  _getRandomUser = async () => {
    this.setState({
      loading: true
    })

    const { data: { results } } = await axios.get('https://randomuser.me/api/')
    const { name: { first, last } } = results[0]

    this.setState({
      name: first,
      surname: last,
      loading: false
    })
  }
*/
  render() {
    //const {name, surname, loading} = this.state
    return (
      <SafeAreaView style={styles.container}>
        <FlatListExample />
       {/* <View>
          {
            loading ? <Text>Loading...</Text> :
            <Text>{name} {surname}</Text>
          }
        </View>
        <Button 
          title={'Random User'}
        onPress={this._getRandomUser} />*/}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
