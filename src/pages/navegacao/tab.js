import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from "@expo/vector-icons" 
import AcessarConta from '../acessarConta';









const Tab = createBottomTabNavigator();



export default function Navegacao() {
  
  //const {mail} = route.params;
  
 // console.log(mail+"navega")
  return (
    <NavigationContainer 
    independent={true}
    >
    
      <Tab.Navigator>
      <Tab.Screen 
         name='home'
         component={AcessarConta}
        options={{
            //tabBarBadge: 0,
            headerShown: false ,
            tabBarIcon: ({ color, size, focused }) => <Feather name='home'
             size={size} color={color}/>,
            tabBarLabel:'Inicio'
            /** 
            {
              if (focused) {
                return <AntDesign name="linechart" size={size} color={color} />
              }
              return <AntDesign name="linechart" size={24} color="black" />
           }*/

          }}

        />

        <Tab.Screen name="Solicitacao"
        component={AcessarConta}
        options={{
            //tabBarBadge: 0,
            headerShown: false ,
            tabBarIcon: ({ color, size, focused }) => <Feather name='send'
             size={size} color={color}/>,
            tabBarLabel:'Solicitação'
            /** 
            {
              if (focused) {
                return <AntDesign name="linechart" size={size} color={color} />
              }
              return <AntDesign name="linechart" size={24} color="black" />
           }*/

          }}

        />
        <Tab.Screen name="Settings" 
          component={AcessarConta}
       // initialParams={{mail}}
            options={{
      
                headerShown: false ,
                tabBarIcon: ({ color, size, focused }) => <Feather name='clock'
                size={size} color={color}/>,
                tabBarLabel:'Historico'
              }}
         />
        <Tab.Screen name="Sobre"
         component={AcessarConta}
          options={{
           
            headerShown: false ,
   
            tabBarIcon: ({ color, size }) => <Feather name='help-circle'
             size={size} color={color}/>,
            tabBarLabel:'Sobre'
          }}
        />


      </Tab.Navigator>
    </NavigationContainer>
  );
}