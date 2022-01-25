import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Calculadora from './components/Calculadora';

export default class App extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <View styles={styles.inside}>
          <Text>Escribe los números de tu dni y yo te calculo la letra.</Text>
          <Calculadora />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inside: {
    flex: 0.7,
    backgroundColor: 'purple',
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
