import React,{Component} from 'react';
import {Text,View,TouchableOpacity,Button} from 'react-native'

export default class MeteorScreen extends Component{
  render(){
    return(
      <View>
        <Text>A World bombarded with meteors</Text>
        <Button title="back" onPress={()=>{this.props.navigation.navigate('home')}} />
      </View>
    );
  }
}