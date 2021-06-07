import React,{Component} from 'react';
import {Text,View,TouchableOpacity,Button} from 'react-native'

export default class HomeScreen extends Component{
  render(){
    return(
      <View>
        <Text>Hello World</Text>
        <Button title="ISS" onPress={()=>{this.props.navigation.navigate('isstracker')}} />
        <Button title="meteors" onPress={()=>{this.props.navigation.navigate('meteor')}} />
        <Button title="news" onPress={()=>{this.props.navigation.navigate('update')}} />
      </View>
    );
  }
}