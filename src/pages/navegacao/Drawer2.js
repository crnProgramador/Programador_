import React from 'react';
import {useNavigation} from '@react-navigation/native'
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importando o AsyncStorage
import Ionicons from 'react-native-vector-icons/Ionicons';


const CustomDrawer = props => {
   // const { nome, mail } = props; // Recebendo os parâmetros


    const handleLogout = async () => {
        try {
          // Limpar os dados armazenados (seus dados de autenticação, token, etc.)
          await AsyncStorage.clear();
    
          // Aqui você pode adicionar outras lógicas, se necessário (ex: desconectar de uma API)
    
          // Navegar para a tela de Login
          props.navigation.navigate('Welcome');
    
          console.log('Logout realizado com sucesso!');
        } catch (error) {
          console.error('Erro ao limpar os dados de sessão: ', error);
        }
      };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#52c7eb'}}>
        <ImageBackground
         
          style={{padding: 20}}>
          <Image
            source={require('../../assets/user.png')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
             // fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            {nome}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
              //  fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}>
              {mail}
            </Text>
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
       
        <TouchableOpacity onPress={handleLogout } style={{paddingVertical: 15}}
            >
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                //fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sair
            </Text>
          </View>
          
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;