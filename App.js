import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Calculadora from './components/Calculadora';
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Calculadora IMC</Text>
        <View style={styles.inside}>
          <Calculadora />
        </View>
        <View style={styles.vista}>
          <Text style={styles.text2}>Created for 2nd DAM</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3AFF2',
    alignContent: 'center',
  },
  inside: {
    height: 370,
    backgroundColor: 'black',
    width: '95%',
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  text: {
    color: 'red',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  text2: {
    marginTop: 5,
    color: 'gray',
    padding: 10,
    fontSize: 15,
  },
  vista: {
    flex: 0.2,
  },
});

export default App;
