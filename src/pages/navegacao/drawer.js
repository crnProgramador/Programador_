import { createDrawerNavigator} from "@react-navigation/drawer";
import {Feather} from "@expo/vector-icons";
import { StyleSheet,Animated, Text, View, TextInput,Linking, TouchableOpacity,Image, Button } from 'react-native'
import Navegacao from "./tab";
import CustomDrawer from "./Drawer2";
import { useNavigation } from "@react-navigation/native";

//import AdPasta from "../adicionarPasta";


const Drawer = createDrawerNavigator();

export default function Navega(){
   // const {nome} = route.params;
   // const {mail} = route.params;
    //console.log(nome)
    //console.log(mail)

    return(
        <Drawer.Navigator drawerContent={props =>  <CustomDrawer{...props} />} screenOptions={{title:'Assistente Virtual Hiro'}}>
             
          
            <Drawer.Screen
              name="Inicio"
              component={Navegacao}
             // initialParams={{mail}}
              options={{ 
                drawerIcon:({color,size}) => <Feather name='home'color={color} size={size}/>,
                drawerLabel:'Inicio'
               }}
            />

           <Drawer.Screen
              name="Adicionar Pasta"
              component={Navegacao}
              //initialParams={{nome,mail}}
              options={{ 
                drawerIcon:({color,size}) => <Feather name='plus'color={color} size={size}/>,
                drawerLabel:'Associar Pasta'
               }}
            />

              <Drawer.Screen
              name="Mapa"
              component={Navegacao}
              options={{ 
                drawerIcon:({color,size}) => <Feather name='map-pin'color={color} size={size}/>,
                drawerLabel:'Localizar Pasta'
               }}
            />

           <Drawer.Screen
              name="Desassociar"
              component={Navegacao}
              //initialParams={{nome}}
              options={{ 
                drawerIcon:({color,size}) => <Feather name='x-circle'color={color} size={size}/>,
                drawerLabel:'Desassociar Pasta'
               }}
            />
        </Drawer.Navigator>
    )
}

