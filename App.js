import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Calculadora from './components/Calculadora';

export default class App extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <Text styles={styles.inside}>
          Escribe los números de tu dni y yo te calculo la letra.
        </Text>
        <Calculadora />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inside: {
    flex: 1,
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    margin: 20,
  },
});
