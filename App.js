import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Calculadora from './components/Calculadora';
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inside}>
          <Text style={styles.text}>Calculadora IMC</Text>
          <Calculadora />
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
    flex: 0.9,
    backgroundColor: 'black',
    width: '80%',
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 15,
    borderWidth: 3,
    shadowRadius: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 15,
  },
});

export default App;
