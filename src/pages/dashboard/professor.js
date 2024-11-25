
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import React from 'react'

export default function Professor() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/logoHome1.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>

        <Text style={styles.title}>Conectando escolas, alunos e sucesso.</Text>
        <Text style={styles.text}>Acessa a Sua conta Futurista para começar</Text>


        <TouchableOpacity
          onPress={()=> navigation.navigate('acessarConta')}
          style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

      </Animatable.View>
      
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#38a69d'
  },

  containerLogo: {
    flex: 2,
    //backgroundColor: 'red',
    backgroundColor: '#38a69d',
    justifyContent: 'center',
    alignItems:'center'


  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
    
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color:'#551a1aab'
  },

  text: {
    color: '#1a1818ab'
  },

  button: {
    position: 'absolute',
    backgroundColor: '#38a695',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent:'center',
   
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight:'bold'
  }



})