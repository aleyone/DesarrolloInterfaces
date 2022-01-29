/* eslint-disable prettier/prettier */
export const clasificando = valor => {
  if (valor < 18.5) {
    return 'Peso insuficiente';
  } else if (valor >= 18.5 && valor <= 24.9) {
    return 'Normopeso';
  } else if (valor >= 25 && valor <= 26.9) {
    return 'Sobrepeso grado I';
  } else if (valor >= 27 && valor <= 29.9) {
    return 'Sobrepeso grado II (preobesidad)';
  } else if (valor >= 30 && valor <= 34.9) {
    return 'Obesidad de tipo I';
  } else if (valor >= 35 && valor <= 39.9) {
    return 'Obesidad de tipo II';
  } else if (valor >= 40 && valor <= 49.9) {
    return 'Obesidad de tipo III (mórbida)';
  } else if (valor >= 50) {
    return 'Obesidad de tipo IV (extrema)';
  }
};
