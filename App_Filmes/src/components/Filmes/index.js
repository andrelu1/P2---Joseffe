import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function Filmes(props) {
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{props.data.nome}</Text>
        <Image source={{uri: props.data.foto}} style={styles.capa} />

        <View style={styles.areaBotao}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() =>
              props.mostrarSinopse(props.data.nome, props.data.sinopse)
            }>
            <Text style={styles.botaoTexto}>Sinopse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    padding: 15,
  },
  capa: {
    height: 250,
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -40,
  },
  botao: {
    width: 100,
    backgroundColor: '#09a6ff',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  botaoTexto: {
    textAlign: 'center',
    color: '#fff',
  },
});

export default Filmes;