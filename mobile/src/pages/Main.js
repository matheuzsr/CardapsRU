import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function Main({ navigation }) {

    const localize = null;
    return (
        <>
            <Text style={styles.textTitulo}>Selecione o Campus</Text>
            <View styles={styles.viewFora}>
                <TouchableOpacity onPress={() => {
                    // Navegacao
                    navigation.navigate('Cardapio', { localize: 'http://ru.alegre.ufes.br/cardapio/rss' });
                }} style={styles.localizeButton}>
                    <Text style={styles.textButton} >Alegre</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    // Navegacao
                    navigation.navigate('Cardapio', { localize: 'http://ru.saomateus.alegre.ufes.br/cardapio/rss' });
                }} style={styles.localizeButton}>
                    <Text style={styles.textButton} >Sao Mateus</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    // Navegacao
                    navigation.navigate('Cardapio', { localize: 'http://ru.saomateus.alegre.ufes.br/cardapio/rss' });
                }} style={styles.localizeButton}>
                    <Text style={styles.textButton} >Vitoria</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    textTitulo: {
        marginTop: 100,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#c20407',
        fontWeight: 'bold',
        fontSize: 26.5,
    },
    localizeButton: {

        //tamanho
        top: 20,
        width: 150,
        height: 50,
        backgroundColor: '#C20407',
        borderRadius: 10,
        left: 125,
        marginTop: 50,

    },
    textButton: {
        marginTop: 12,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15.5,
    },
    viewFora: {
        top: 410,
        justifyContent: 'center',
        marginTop: 100,
        left: 100,
    },

});

export default Main;