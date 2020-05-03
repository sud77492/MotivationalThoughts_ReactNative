import React, { Component } from 'react';

import { StyleSheet, View, FlatList, ScrollView, Text, Alert} from 'react-native';

export default class Home extends Component<{}> {
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
  Alert.alert(item);
 //this.props.navigation.navigate('FlatListDemo')
}
 
  render() {
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
    backgroundColor: '#F5FCFF',
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