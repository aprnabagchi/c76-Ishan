import React,{Component} from 'react';
import {Text,View,TouchableOpacity,Button} from 'react-native'

export default class UpdateScreen extends Component{
  render(){
    return(
      <View>
        <Text>A World full of news</Text>
        <Button title="back" onPress={()=>{this.props.navigation.navigate('home')}} />
      </View>
    );
  }
}