import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

 
import Tarefas from './src/Tarefas/index';
import Form from './src/Form';
 
const Stack = createStackNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Tarefas" component={Tarefas} />
        <Stack.Screen name="Formulario" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// Adicionei a menssagem ao excluir a tarefa, uma tentantiva de adicionar informando o ID e uma tentativa de loading, chamando a carregar.
// Não consegui testar.