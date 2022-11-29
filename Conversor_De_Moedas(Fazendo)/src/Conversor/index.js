import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';

import api from '../services/api'

class Conversor extends Component{
constructor(props){
  super(props);
  this.state = {
     moedaA: props.moedaA,
     moedaB: props.moedaB,
     moedaB_valor: 0,
     valorConvertido: 0
  };
  this.converter.bind(this);
}
async converter(){
  let de_para = this.state.moedaA + '_' + this.state.moedaB; //"ask" ?
 const response = await api.get('USD-BRL,EUR-BRL,BTC-BRL');
 let cotacao = response.data[de_para];

 let resultado = (cotacao * parseFloat(this.state.moedaB_valor));
 
}

render (){
  const { moedaA, moedaB }= this.props;
  return(
<View>
     <Text> {moedaA}para {moedaB} </Text>
     <TextInput
      placeholder="Valor a ser convertido"
      onChangeText={(moedaB_valor)=>this.setState({moedaB_valor})}
      keyboardType="numeric"
     />
     <TouchableOpacity onPress={this.converter}>Converter</TouchableOpacity>
     <Text> {this.state.valorConvertido}</Text>
</View>
  );
}

}
export default Conversor;