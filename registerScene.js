import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
    Alert
} from 'react-native';

export default class RegisterScene extends Component {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={1.0}  // Establece la transparencia sin cambios cuando se hace clic en el fondo
                style={styles.container}>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize='none'  // Establecer la primera letra para que no se capitalice automáticamente
                        underlineColorAndroid={'transparent'}  // Cambiar el color del subrayado a transparente
                        placeholderTextColor={'#ccc'}  // Establecer el color del marcador de posición
                        placeholder={'nombre de usuario'}  // Establecer marcador de posición
                    />
                </View>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}  // Establecer como cuadro de entrada de contraseña
                        autoCapitalize='none'  // Establecer la primera letra para que no se capitalice automáticamente
                        underlineColorAndroid={'transparent'}  // Cambiar el color del subrayado a transparente
                        placeholderTextColor={'#ccc'}  // Establecer el color del marcador de posición
                        placeholder={'contraseña'}  // Establecer marcador de posición
                    />
                </View>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}  // Establecer como cuadro de entrada de contraseña
                        autoCapitalize='none'  // Establecer la primera letra para que no se capitalice automáticamente
                        underlineColorAndroid={'transparent'}  // Cambiar el color del subrayado a transparente
                        placeholderTextColor={'#ccc'}  // Establecer el color del marcador de posición
                        placeholder={'Confirmar contraseña'}  // Establecer marcador de posición
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}>
                    <Text
                                                 style = {styles.btText}> Registrarse </Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        width: 200,
        height: 40,
        fontSize: 20,
        color: '#fff',// El texto ingresado en el cuadro de entrada es blanco
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#66f',
        marginBottom: 8,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#66f',
        marginTop: 20,
    },
    btText: {
        color: '#fff',
        fontSize: 20,
    }
});
