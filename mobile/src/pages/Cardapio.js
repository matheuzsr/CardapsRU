import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from 'native-base';

function Cardapio({ navigation }) {

  const localize = navigation.getParam('localize');

  //async function jsonCardapio() {
  //  const response = await axios.get(`{localize}`);
  // arq = response.data;
  // tipo= typeof arq
  // console.log(tipo)
  // }

  return (
    <>
      <View>
        <Header title="Welcome to React Native" />
        <Text>teste</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({

  front: {
    justifyContent: 'center',
    marginTop: 100,
    left: 180,
  }
});

export default Cardapio;