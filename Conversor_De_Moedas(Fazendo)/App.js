import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Conversor from './src/Conversor';

class App extends Component{
  render(){
    return(
      <View> 
   <Conversor moedaA="USD" moedaB="BRL" />
      </View>
    );
  }
}
export default App;