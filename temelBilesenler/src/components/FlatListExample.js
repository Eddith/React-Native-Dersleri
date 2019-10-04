import React, { Component } from 'react'
import { 
  StyleSheet, 
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput } from 'react-native'

import data from '../../data'
import axios from 'axios'

/*
  -contain
  -cover
  -center
  -repeat
  -stretch

*/

//const { width } = Dimensions.get('window')

export default class FlatListExample extends Component {

  state = {
    text: '',
    page: 1,
    contacts: [],
    allContacts: [],
    loading: true,
    refreshing: false
  }

  componentDidMount() {
    this._getContacts()
  }

  _getContacts = async () => {
    this.setState({
      loading: true
    })
    const { data: { results: contacts } } = await axios.get(`https://randomuser.me/api/?results=10&page=${this.state.page}`)
    const users = [...this.state.contacts, ...contacts]

    if (this.state.refreshing) {
      users.reverse()
    }

    this.setState({
      contacts: users,
      allContacts: users,
      loading: false,
      refreshing: false
    })
  }

  _loadMore = () => {
    if (!this.duringMomentum) {
      this.setState({
        page: this.state.page + 1,
      }, () => {
        this._getContacts()
      })
      this.duringMomentum = true
    }
  }

  _onnRefresh = () => {
    this.setState({
      page: 1,
      refreshing: true
    }, () => {
      this._getContacts()
    })
  }
 
  _renderContactsItem = ({ item, index }) => {
    return(
      <TouchableOpacity style={[
        styles.itemContainer, 
        { backgroundColor: index % 2 === 1 ? '#fafafa' : '' }]}>
        <Image 
          style={styles.avatar} 
          source={{ uri: item.picture.thumbnail }} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
          <Text>{item.location.state}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  _searchFilter = text => {
    const newData = this.state.allContacts.filter(item => {
      const listItem = `${item.name.first.toLowerCase()} ${item.name.last.toLowerCase()} ${item.location.state.toLowerCase()}`
      return listItem.indexOf(text.toLowerCase()) > -1
    })
    this.setState({
      contacts: newData,
    })

  }

  _renderHeader = () => {
    const {text} = this.state
    return(
      <View style={styles.searchContainer}>
        <TextInput 
          onChangeText={text => {
            this.setState({
              text,
            })
            this._searchFilter(text)
          }}
          value={text}
          placeholder='Search...'
          style={styles.searchInput} />
      </View>
    )
  }

  _renderFooter = () => {
    if (!this.state.loading) return null
    return(
      <View style={{
        paddingVertical: 20
      }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }


 /* _onPressButton = () => {
    alert('test')
  }*/
 /* state = {
    name: ''
  }

  _onChangeText = text => {
    this.setState({
      name: text,
    })
  }*/
  render() {
    //const {name} = this.state
    return (
        <FlatList 
          ListFooterComponent={this._renderFooter}
          ListHeaderComponent={this._renderHeader()}
          renderItem={this._renderContactsItem}
          keyExtractor={item => item.login.uuid}
          data={this.state.contacts}

          onEndReached={this._loadMore}  
          onEndReachedThreshold={1}
          onMomentumScrollBegin={() => { this.duringMomentum = false }}

          refreshing={this.state.refreshing}
          onRefresh={this._onnRefresh}
        />
      /*<View style={styles.container}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
        >
          <Text style={styles.title}>1</Text>
          <Text style={styles.title}>2</Text>
          <Text style={styles.title}>3</Text>
          <Text style={styles.title}>4</Text>
          <Text style={styles.title}>5</Text>
          <Text style={styles.title}>6</Text>
          <Text style={styles.title}>7</Text>
          <Text style={styles.title}>8</Text>
          <Text style={styles.title}>9</Text>
          <Text style={styles.title}>10</Text>
        </ScrollView>
      </View>
      /*<View style={styles.container}>
        <Text>{name}</Text>
        <TextInput 
          value={name}
          autoCapitalize='characters'// klavye büyük harfler yazar
          /*keyboardAppearance='light'
          keyboardType='email-address'*/ // email adres için klavyeye @ işaretini ekler
          /*placeholder='Bir isim giriniz...'
          onChangeText={this._onChangeText}
          style={styles.myInput} />
      </View> */
      /*
      <View style={styles.container}>
        <Image 
          resizeMode={'stretch'}
          style={{width: '100%', height: 280, borderWidth:2, borderColor: 'red'}}
          source={{ uri: 'https://ifyazilim.nyc3.digitaloceanspaces.com/EtkIO/PublicDepo/EtkinlikAfis/2019/5/masterpiece-galata-resim-dolunayda-yururken-119975.jpg'}}/>
      </View>
      
     <View style={styles.container}>
       <TouchableOpacity style={{marginBottom: 40}}>
         <View style={styles.buttonContainer}>
           <Text style={styles.buttonTitle}>My Button</Text>
         </View>
       </TouchableOpacity>

       <TouchableOpacity
          onPress={this._onPressButton}
       >
         <Image 
            style={{width: 152, height: 140}}
            source={require('./src/assets/button.png')}/>
       </TouchableOpacity>
     </View>
     */
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#9E9E9E'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10
  },
  textContainer: {
    justifyContent: 'space-around'
  },
  name: {
    fontSize: 16
  },
  searchContainer: {
    padding: 10
  },
  searchInput: {
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    padding: 10
  }
  /*title: {
    backgroundColor: 'orange',
    marginVertical: 30,
    textAlign: 'center',
    paddingVertical: 60,
    borderColor: 'yellow',
    borderWidth: 2,
    fontSize: 36,
    width
  }
  /*myInput: {
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderColor: 'gray'
  }
  /*buttonTitle: {
    fontSize: 24
  },
  buttonContainer: {
    padding: 15,
    backgroundColor: 'orange',
    borderRadius: 15
  }*/
})
