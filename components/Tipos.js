/* eslint-disable prettier/prettier */
import {Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {clasificando} from '../Utils/utils';

class Tipos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text
        style={
          (this.props.imc < 27 && styles.verde) ||
          (this.props.imc >= 27 && this.props.imc <= 39.9 && styles.naranja) ||
          (this.props.imc >= 40 && styles.rojo)
        }>
        {clasificando(this.props.imc)}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  verde: {
    fontSize: 16,
    paddingTop: 25,
    color: 'green',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  naranja: {
    fontSize: 16,
    paddingTop: 25,
    color: 'orange',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  rojo: {
    fontSize: 16,
    paddingTop: 25,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Tipos;
