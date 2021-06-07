import React,{Component} from 'react';
import {Text,View,TouchableOpacity,Button} from 'react-native'

export default class TrackerScreen extends Component{
  render(){
    return(
      <View>
        <Text>World ISS Tracker</Text>
        <Button title="back" onPress={()=>{this.props.navigation.navigate('home')}} />
      </View>
    );
  }
}