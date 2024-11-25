


import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react'

export default function AcessarConta() {

  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState(null);
  const [open, setOpen] = useState(false);

  const options = [
    { label: 'Opção 1', value: 'opcao1' },
    { label: 'Opção 2', value: 'opcao2' },
    { label: 'Opção 3', value: 'opcao3' },
    { label: 'Opção 4', value: 'opcao4' },
  ];


  return (
    <View style={styles.container}>

      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Acessar Conta</Text>
      </Animatable.View>



      <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>
      <Text style={styles.escanearTexto}
        > Escaner o seu Cartão</Text>

        <Image
          source={require('../../assets/qr.png')}
          style={styles.qrCode}
        />
        <Text style={styles.ou}
        > Ou </Text>

        <Text style={styles.title}>Selecionar Escola:</Text>
        <DropDownPicker
          open={open}
          value={selectedValue}
          items={options}
          setOpen={setOpen}
          setValue={setSelectedValue}
          setItems={() => { }}
          placeholder="Selecione uma opção"
          style={styles.comboBox}
        />
        {selectedValue && <Text style={styles.selectedText}>Selecionado: {selectedValue}</Text>}



        <Text style={styles.title}>Codigo do Cartão:</Text>
        <TextInput
          placeholder='Digite seu Codigo'
          style={styles.input}

        />



        <TouchableOpacity
        onPress={() => navigation.navigate('confirSenha')}
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

  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'

  },
  escanearTexto:{
    marginTop:10,
    color: '#38a69d',
    textAlign: 'center',
    fontSize: 20
  },
  containerComboBox: {
    margin: 20,
  },
  comboBox: {
    borderWidth: 0, // Remove a borda da lista suspensa
    borderBottomWidth: 1,
    backgroundColor: 'white', // Cor de fundo da lista
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
  },
  ou: {
    color: '#38a69d',
    textAlign: 'center',
    fontSize: 20

  },
  qrCode: {
    height: '30%',
    width: '50%',
    alignSelf: 'center'
  },

  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: '#fff'

  },

  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'

  },
  title: {
    fontSize: 20,
    marginTop: 28,

  },

  input: {

    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },

  button: {
    backgroundColor: '#38a69d',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
  },

  registerText: {
    color: '#a1a1a1'
  }


})
