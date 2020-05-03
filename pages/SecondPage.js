//This is an example code for Navigator// 
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  Alert
  } from "react-native";
//import react in our code. 

//import all the components we are going to use.

export default class SecondPage extends Component <{}> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Quote List",
      headerStyle: {backgroundColor: "#b06d20"},
      headerTitleStyle: {textAlign: "center",flex: 1}
     };
    };
    constructor(props) {
     super(props);
     this.state = {
       loading: true,
       dataSource:[]
      };
    }
    componentDidMount(){
    fetch("http://10.0.2.2/dummy.json")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       loading: false,
       dataSource: responseJson['data']
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }
    GetGridViewItem (item) {
      //Alert.alert(item);
      //this.props.navigation.navigate('ThirdPage', {thoughts: "sudhanshu"})
      this.props.navigation.navigate('ThirdPage',{  
        thoughts: item
      })
    }

    FlatListItemSeparator = () => {
    return (
      <View style={{
         height: .5,
         width:"100%",
         backgroundColor:"rgba(0,0,0,0.5)",
    }}
    />
    );
    }
    renderItem=(data)=>
    <TouchableOpacity style={styles.list}>
      <Text style={styles.font} onPress={this.GetGridViewItem.bind(this, data.item.thoughts)} >{data.item.thoughts}</Text>
    </TouchableOpacity>
    render(){
     if(this.state.loading){
      return( 
        <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#0c9"/>
        </View>
    )}
    return(
     <View style={styles.container}>
     <FlatList
        data= {this.state.dataSource}
        ItemSeparatorComponent = {this.FlatListItemSeparator}
        renderItem= {item=> this.renderItem(item)}
        keyExtractor= {item=>item.id.toString()}
     />
    </View>
    )}
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#333333",
        justifyContent: 'center',
        alignItems: 'center',
       },
      loader:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
       },
      list:{
        paddingVertical: 4,
        margin: 5,
        backgroundColor: "#333333"
       },
       font: {
        fontSize: 18,
        color: '#fff'
       }
    });