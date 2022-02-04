/* eslint-disable prettier/prettier */
//import {TextInput, Button} from 'react-native-paper';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Tipos from './Tipos';
import {Input, Button} from 'react-native-elements';

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
        <Text style={styles.title}>Datos</Text>
        <Input
          label="PESO (Kg)"
          placeholder="Introduce peso"
          keyboardType="numeric"
          onChangeText={this.setPeso}
          labelStyle={{color: 'blue', fontWeight: 'bold'}}
        />
        <Input
          label="ALTURA (cm)"
          placeholder="Introduce altura"
          keyboardType="numeric"
          onChangeText={this.setAltura}
          labelStyle={{color: 'blue', fontWeight: 'bold'}}
        />

        <View>
          <Button onPress={this.setIMC} title="Calcular IMC" />
        </View>
        <View>
          <Text style={styles.texto}>
            Peso: {this.state.peso} Altura: {this.state.altura} IMC:{' '}
            {this.state.imc}
          </Text>
        </View>
        <View>{this.state.imc > 0 && <Tipos imc={this.state.imc} />}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 360,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    width: '95%',
    alignSelf: 'center',
    paddingTop: 10,
  },
  texto: {
    fontSize: 16,
    marginTop: 3,
    color: 'red',
    textAlign: 'left',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    color: 'red',
    paddingLeft: 20,
    fontWeight: 'bold',
  },
});

export default Calculadora;
