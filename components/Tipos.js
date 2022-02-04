/* eslint-disable prettier/prettier */
import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {clasificando} from '../Utils/utils';

class Tipos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.textResult}>Resultado</Text>
        <Text
          style={
            (this.props.imc < 27 && styles.verde) ||
            (this.props.imc >= 27 &&
              this.props.imc <= 39.9 &&
              styles.naranja) ||
            (this.props.imc >= 40 && styles.rojo)
          }>
          {clasificando(this.props.imc)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  verde: {
    fontSize: 16,
    marginTop: 3,
    color: 'green',
    textAlign: 'left',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  naranja: {
    fontSize: 16,
    marginTop: 3,
    color: 'orange',
    textAlign: 'left',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  rojo: {
    fontSize: 16,
    marginTop: 3,
    color: 'red',
    textAlign: 'left',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  textResult:{
    paddingLeft: 5,
    color: 'black',
    fontSize: 16,
  },
});

export default Tipos;
