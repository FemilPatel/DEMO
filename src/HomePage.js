import React, { Component } from 'react';
import { View, Text ,SafeAreaView,StyleSheet} from 'react-native';

export default class HomePage extends Component {
  

  render() {
    
    return (
        <SafeAreaView style={{flex: 1}}>
        
        <Text style={styles.heading}>
          React Native Pass Value From One Screen to Another Using React
          Navigation
        </Text>
        <Text style={styles.textStyle}>
          Activet User 
        </Text>
        <Text style={[styles.textStyle,{color:'#f1404b'}]}>
          {this.props.route.params.P1}
        </Text>
        <Text style={[styles.textStyle,{color:'#f1404b'}]}>
          {this.props.route.params.P2}
        </Text>

        
    </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
    },
    heading: {
      fontSize: 25,
      textAlign: 'center',
      marginVertical: 10,
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 16,
      marginVertical: 10,
    },
    inputStyle: {
      width: '80%',
      height: 44,
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#DBDBD6',
    },
  })