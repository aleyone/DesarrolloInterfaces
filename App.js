import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

const estilos = 'florida';
var isAdmin = false;
const modulos2Dam = [
  {nombre: 'DIN', profesor: 'Manel', horas: 120},
  {nombre: 'ADA', profesor: 'Juanmi', horas: 120},
  {nombre: 'PMDM', profesor: 'Fran', horas: 100},
  {nombre: 'PSP', profesor: 'Fran', horas: 60},
  {nombre: 'SGE', profesor: 'Belén', horas: 100},
  {nombre: 'Inglés', profesor: 'Caterina', horas: 40},
  {nombre: 'EIE', profesor: 'Manuel', horas: 60},
];
const saludar = () => {
  return <Text>David Gil Pérez</Text>;
};
const datos = () => {
  return (
    <View style={estilos === 'florida' ? styles.florida : styles.upv}>
      <TextInput
        label="Texto fijo"
        placeholder="Empieza a escribir"
        placeholderTextColor={estilos === 'florida' ? 'white' : 'orange'}
        left={<TextInput.Icon name="eye" />}
      />
      <TextInput
        label="Texto fijo"
        placeholder="Empieza a escribir"
        placeholderTextColor={estilos === 'florida' ? 'white' : 'orange'}
        left={<TextInput.Icon name="eye" />}
      />
    </View>
  );
};
const informes = () => {
  return (
    <Button icon="format-list-bulleted" mode="contained">
      INFORMES
    </Button>
  );
};
class App extends Component {
  render() {
    return (
      <View>
        {saludar()}
        {datos()}
        {isAdmin && informes()}
        <ScrollView>
          {modulos2Dam.map((item, pos) => {
            return (
              <View
                key={pos}
                style={pos % 2 === 0 ? styles.pares : styles.impares}>
                <Text>{pos + 1}</Text>
                <Text>{item.nombre}</Text>
                <Text>{item.profesor}</Text>
                <Text>{item.horas}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  pares: {
    backgroundColor: '#F48FB1',
  },
  impares: {
    backgroundColor: '#F8BBD0',
  },
});
export default App;
