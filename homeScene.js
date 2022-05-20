import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native';

export default class HomeScene extends Component {

    /**
           * Regrese a la interfaz de inicio de sesión
     */
    backToLogin = () => {
    }

    render() {
        return (
            <View
                style={styles.container}>
                <Text
                    style={styles.content}
                                 > ¡Acceso exitoso! ¡Esta es la página de inicio! </Text>
                <Button
                    onPress={this.backToLogin}  // Agregar evento de clic
                    style={styles.button}
                    title='Haga clic para volver para iniciar sesión'/>  // Establecer el título del botón
            </View>
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
    content: {
        fontSize: 40,
    },
});
