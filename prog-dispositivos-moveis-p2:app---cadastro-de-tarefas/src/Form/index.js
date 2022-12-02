import React, {Component, useState} from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';
 
export default function Form({route}) {
  const [id, setId] = useState(route.params?.id)
  const [newTitle, setNewTitle] = useState(route.params?.title)
  const [newDescription, setNewDescription] = useState(route.params?.description)
 
  const navigation = useNavigation();
 
  const salvarTarefa = async () => {
   
    const body = JSON.stringify({title: newTitle, description: newDescription})
  if (newTitle !== '') {
      if (id !== undefined){
        const response = await api.setId(`/tasks/${id}`, body, {headers: {'Content-Type': 'application/json'}});
        await route.params?.atualizarLista()
    }
    else{
       const response = await api.post("/tasks", body, {headers: {'Content-Type': 'application/json'}});
       await route.params?.atualizarLista()
  }
 
    navigation.goBack()  
   }
    carregarTarefas()
  }
  
 return (
   <View style={styles.container}>

     <TextInput
        placeholder="Nome da tarefa"
        style={styles.input}
        defaultValue={route.params?.title}
        onChangeText={(text)=> setNewTitle(text)}
      />
 
      <TextInput
        placeholder="Descrição da tarefa"
        style={styles.input}
        defaultValue={route.params?.description}
        onChangeText={(text)=> setNewDescription(text)}
      />

     <Pressable style={styles.button}
       onPress={() => salvarTarefa()}>
       <Text style={styles.textoButton}> SALVAR TAREFA </Text>
     </Pressable>

   </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
    flex: 1,
  },

  input:{
    borderColor: '#DDD',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF',
    margin: 15,
    marginBottom: 0,
    borderRadius: 5,
  },

    button:{
    shadowColor: '#000',
    justifyContent: 'center',
    backgroundColor: '#c7abda',
    shadowOffset: {width:0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    marginTop: 25,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  
  textoButton: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    color: 'white',
  },

});
 
