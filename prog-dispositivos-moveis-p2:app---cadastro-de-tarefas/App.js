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
//
//                        .,,uod8B8bou,,.
//               ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
//         ,=m8BBBBBBBBBBBBBBBRPFT?!||||||||||||||
//         !...:!TVBBBRPFT||||||||||!!^^""'   ||||
//         !.......:!?|||||!!^^""'            ||||
//         !.........||||                     ||||
//         !.........|||| Msg excluir tarefa  ||||
//         !.........|||| Adicionar o ID      ||||
//         !.........|||| Tent. recarregar ao ||||
//         !.........|||| chamar a função     ||||
//         !.........||||                     ||||
//         `.........||||                    ,||||
//          .;.......||||               _.-!!|||||
//   .,uodWBBBBb.....||||       _.-!!|||||||||!:'
// !YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....
// !..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::   `.
// !....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::     `.
// !......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"`;:::       `.
// !........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;         iBBbo.
// `..........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo.
//  `..........:::::::::::::::::::::::;iof688888888888b.     `YBBBP^'
//    `........::::::::::::::::;iof688888888888888888888b.     `
//      `......:::::::::;iof688888888888888888888888888888b.
//        `....:::;iof688888888888888888888888888888888899fT!
//          `..::!8888888888888888888888888888888899fT|!^"'
//            `' !!988888888888888888888888899fT|!^"'
//                `!!8888888888888888899fT|!^"'
//                  `!988888888899fT|!^"'
//                    `!9899fT|!^"'
//                      `!^"'
