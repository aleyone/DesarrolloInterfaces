/* eslint-disable prettier/prettier */
import {TextInput, Button} from 'react-native-paper';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Tipos from './Tipos';

class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {peso: 0, altura: 0, imc: 0};
    this.setPeso = this.setPeso.bind(this);
    this.setAltura = this.setAltura.bind(this);
    this.setIMC = this.setIMC.bind(this);
  }

  setPeso = numero => {
    this.setState({peso: numero});
  };

  setAltura = numero => {
    this.setState({altura: numero});
  };

  setIMC = () => {
    var alturaM = (this.state.altura / 100).toFixed(2);
    var imc_ = (this.state.peso / (alturaM * alturaM)).toFixed(2);
    this.setState({imc: imc_});
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          label="PESO (kg)"
          placeholder="Introduce tu peso"
          keyboardType="numeric"
          onChangeText={this.setPeso}
        />
        <TextInput
          style={styles.input}
          label="ALTURA (cm)"
          placeholder="Introduce tu altura"
          keyboardType="numeric"
          onChangeText={this.setAltura}
        />
        <View style={styles.button}>
          <Button onPress={this.setIMC}>CALCULAR</Button>
        </View>
        <View>
          <Text style={styles.texto}>
            Peso: {this.state.peso} Altura: {this.state.altura} IMC:{' '}
            {this.state.imc}
          </Text>
        </View>
        <View>
          {this.state.imc > 0 && <Tipos imc={this.state.imc} />}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    color: 'white',
    backgroundColor: 'lightgray',
    width: '60%',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: 'purple',
    margin: 10,
  },
  container: {
    flex: 1,
    marginBottom: 50,
    backgroundColor: '#F1F3AA',
    width: '90%',
    alignSelf: 'center',
    paddingTop: 20,
  },
  button: {
    marginTop: 60,
    borderWidth: 4,
    backgroundColor: '#AAE3F3',
    borderColor: 'blue',
    width: '50%',
    color: 'white',
    alignSelf: 'center',
    borderRadius: 8,
  },
  texto: {
    fontSize: 16,
    paddingTop: 25,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Calculadora;
