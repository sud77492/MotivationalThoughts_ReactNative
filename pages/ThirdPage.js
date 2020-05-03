//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Text} from 'react-native';
//import all the components we are going to use.

export default class ThirdPage extends Component {
static navigationOptions = {  
    title: 'Quote',  
    headerStyle: {  
        backgroundColor: '#b06d20',  
    },  
    //headerTintColor: '#0ff',  
    headerTitleStyle: {  
        //fontWeight: 'bold',  
    },  
};  
  render() {  
    const { navigation } = this.props;  
    const thoughts = navigation.getParam('thoughts', 'NO-DATA');
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{JSON.stringify(thoughts)}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    color: '#fff',
    margin: 20,
    fontSize: 20,  
    textAlign: 'center',  
  }
});