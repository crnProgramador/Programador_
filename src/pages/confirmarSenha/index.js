


import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react'

export default function ConfirSenha() {

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
                <Text style={styles.message}>Confirmação Senha</Text>
            </Animatable.View>



            <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>


                <Image
                    source={require('../../assets/loginIcon.png')}
                    style={styles.Icon}
                />
                <Text style={styles.title}>Senha de Acesso:</Text>
                <TextInput
                    placeholder='Entra Senha de Acesso'
                    style={styles.input}

                />



                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Confirmar</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Confirmar</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('navegacao')}
                >
                    <Text style={styles.buttonText}>Confirmar</Text>

                </TouchableOpacity>

                <Text style={styles.text}> Nota: se não tiver senha de acesso, contactar a direção da escola.</Text>
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
    escanearTexto: {
        marginTop: 10,
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
    Icon: {
        height: '40%',
        width: '80%',
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
    },
    text:{
        marginTop:'10%'
    }


})
