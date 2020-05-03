//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import {StyleSheet, FlatList, Text, View, Alert, ActivityIndicator, Platform} from 'react-native';

import PushNotification from 'react-native-push-notification'
//import all the components we are going to use.

export default class FirstPage extends Component <{}> {
    constructor(props)
 {
   super(props);

   this.state = { GridViewItems: [
     {key: 'Motivation'},
     {key: 'Romantic'},
     {key: 'Respect'},
     {key: 'Devotional'},
     {key: 'Success'},
     {key: 'Life'},
     {key: 'Morning'},
     {key: 'Positive'}
   ]}
 }
 GetGridViewItem (item) {
    //Alert.alert(item);
    this.props.navigation.navigate('SecondPage')
  }
  async componentDidMount(){
    PushNotification.configure({
    
      // (required) Called when a remote or local notification is opened or received
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },
    
      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    },
    
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
    
      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,
    
      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    
    });
  }

  static navigationOptions = {
    title: 'Category',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#b06d20',
      //Sets Header color
    },
    //headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      //fontWeight: 'bold',
      //Sets Header text style
    },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
            <FlatList
        
            data={ this.state.GridViewItems }

            renderItem={({item}) =><View style={styles.SquareShapeView}>

                <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
                
            </View>}

            numColumns={2}

            />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  viewContainers: {
    flexDirection: 'row'
  },

  SquareShapeView: {
    width: 180,
    height: 180,
    backgroundColor: '#00BCD4',
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView:{
    alignSelf: 'stretch'
  },
  text: {
    fontWeight: 'bold'
  },
  GridViewBlockStyle: {

    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    height: 100,
    margin: 5,
    backgroundColor: '#00BCD4'
  
  },
  GridViewInsideTextItemStyle: {
    color: '#fff',
    padding: 10,
    fontSize: 18,
    justifyContent: 'center',
  },
});