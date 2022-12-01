import React from 'react';
import {StyleSheet,View,Text,FlatList,ActivityIndicator,Button, Modal} from 'react-native';
import API from './src/services/api';

import Filmes from './src/components/Filmes';
const App: () => React$Node = () => {
 
  const [filmes, setFilmes] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalTitulo, setModalTitulo] = React.useState('');
  const [modalConteudo, setModalConteudo] = React.useState('');

  React.useEffect(() => {
    (async () => {
      const response = await API.get('/r-api/?api=filmes');
      setFilmes(response.data);
      setLoading(false);
    })();
  }, []);

  const mostrarSinopse = (titulo, conteudo) => {
    setModalTitulo(titulo);
    setModalConteudo(conteudo);
    setModalOpen(true);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Filmes data={item} mostrarSinopse={mostrarSinopse} />
        )}
      />

      <Modal animationType="slide" visible={modalOpen}>
        <View style={styles.areaModal}>
          <Text style={styles.textoModalTitulo}>{modalTitulo}</Text>
          <Text style={styles.textoModalConteudo}>{modalConteudo}</Text>
          <Button title="Fechar" onPress={() => setModalOpen(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  areaModal: {
    backgroundColor: '#292929',
    flex: 1,
    shadowRadius: 5,
    borderRadius: 5,
  },
  textoModalTitulo: {
    color: '#fff',
    fontSize: 28,
    backgroundColor: '#000',
    padding: 18,
  },
  textoModalConteudo: {
    fontSize: 18,
    color: '000',
    padding: 10,
  },
});

export default App;
