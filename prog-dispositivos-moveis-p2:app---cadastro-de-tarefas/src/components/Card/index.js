import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
 
function Card({data, funcCarregarTarefas}){
  const [id, setId] = useState(data?.id)
  const [title, setTitle] = useState(data?.title)
  const [description, setDescription] = useState(data?.description)
 
 async function excluirTarefa() {
    Alert.alert(
      'Deletar a tarefa',
      'Realmente quer excluir?',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: async () =>
               async response => await api.delete(`/tasks/${id}`)
        },
      ],
      {cancelable: false},
    );
  }
    
  const navigation = useNavigation();
 
  async function irFormulario(){
      navigation.navigate('Formulario', { id: id, title: title, description: description, atualizarLista: funcCarregarTarefas});
  }
 
 
  return(
    <View>
     
      <View style={styles.card}>
        <Text style={styles.titulo}>{title}</Text>
       
        <Text style={styles.descricao}>{description}</Text>

        <View style={styles.botoes}>  
        <TouchableOpacity style={styles.buttonEditar} onPress={irFormulario}>
          <Text style={styles.textoButton}>Editar</Text>
        </TouchableOpacity>
 
        <TouchableOpacity style={styles.buttonExcluir} onPress={excluirTarefa}>
          <Text style={styles.textoButton}>Excluir</Text>
        </TouchableOpacity>
        </View>
      </View>
 
    </View>
  );
}
 
const styles = StyleSheet.create({
  card:{
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: {width:0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  titulo:{
    fontSize: 25,
    padding: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  descricao:{
    fontSize: 15,
    padding: 15,
    textAlign: 'center'

  },
  buttonEditar: {
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#c7abda',
    margin: 10,    
  },
  buttonExcluir: {
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#0d1117',
    margin: 10,
  },
    textoButton: {
    textAlign: 'center',
    fontSize: 15,
    margin: 10,
    fontWeight: 'bold',
    color: 'white'
  },
  botoes: {
    justifyContent: 'center',
    flexDirection: 'row',
  },

});
 
export default Card;

