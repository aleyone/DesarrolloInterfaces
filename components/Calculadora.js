/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Alert, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
const letras = [
  'T',
  'R',
  'W',
  'A',
  'G',
  'M',
  'Y',
  'F',
  'P',
  'D',
  'X',
  'B',
  'N',
  'J',
  'Z',
  'S',
  'Q',
  'V',
  'H',
  'L',
  'C',
  'K',
  'E',
  'T',
];

class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {letra: '', dni: '', visible: false};
  }

  letterCalc = numero => {
    var pos = numero % 23;
    this.setState({letra: letras[pos]});
    return <Text>{this.state.letra}</Text>;
  };
  takeNumber = numero => {
    this.setState({dni: numero});
    if (numero.length === 8) {
      this.setState({visible: true});
      this.letterCalc(numero);
    } else this.setState({visible: false});
  };

  render() {
    return (
      <View>
        <TextInput
          label="DNI"
          placeholder="Escribe tu DNI"
          left={<TextInput.Icon name="pencil" />}
          keyboardType="numeric"
          maxLength={8}
          editable
          onChangeText={this.takeNumber}
        />
        {this.state.visible && <Text>Tu letra es la {this.state.letra}</Text>}
        <Text>{this.state.dni}</Text>
      </View>
    );
  }
}

export default Calculadora;
