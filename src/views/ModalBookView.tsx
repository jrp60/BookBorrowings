import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';
import DropdownBorrowing from '../components/DropdownBorrowing';
import CustomButton from '../components/CustomButton';

const ModalBookView = () => {
  const [modalVisible, setModalVisible] = useState(false);
  //const {book, id} = route.params;
  const author = 'Jorge Luis Borges';

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.imgContainer}>
              <Image
                source={require('./../../assets/images/logo.png')}
                style={styles.logoBook}
              />
            </View>
            <Text style={styles.title}>
              El libro de la selva de los vivos 2
            </Text>
            <Text style={styles.author}>{JSON.stringify(author)}</Text>
            <DropdownBorrowing />
            <CustomButton
              onPress={() => setModalVisible(!modalVisible)}
              text="Reservar"
              style={styles.btnContainer}
              type="secondary"
            />
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  imgContainer: {},
  textContainer: {
    marginTop: 10,
    padding: 0,
  },
  logoBook: {
    height: 120,
    maxHeight: 120,
    resizeMode: 'contain',
  },
  btnContainer: {
    marginTop: 10,
    height: 40,
    maxWidth: 900,
    width: 266,
    left: 2,
  },
  title: {
    fontSize: 18,
    marginTop: 5,
    marginVertical: 5,
    textAlign: 'center',
  },
  author: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    paddingVertical: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 4,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ModalBookView;
