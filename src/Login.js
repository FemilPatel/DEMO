import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      pass: '',
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>LOGIN</Text>
        <TextInput
          placeholder='Enter Email Id'
          style={styles.input}
          //value={this.state.email}
          onChangeText={email => this.setState({email})}
        />
        <TextInput
        //value={this.state.pass}
          placeholder='Enter Password'
          style={styles.input}
          onChangeText={pass => this.setState({pass})}
        />
        <Button
          title='Login'
          style={styles.touchableOpacity}
          onPress={() =>
            this.props.navigation.navigate('Home', {P1: this.state.email,P2:this.state.pass})
          }></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '60%',
    backgroundColor: '#e4e7ec',
    height: '5%',
    marginVertical: 5,
    borderRadius: 30,
    padding: 10,
  },
  text: {
    fontSize: 30,
    marginVertical: 20,
  },
  touchableOpacity: {
    marginVertical: 20,
    backgroundColor: '#03a6ff',
    height: '5%',
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
})
