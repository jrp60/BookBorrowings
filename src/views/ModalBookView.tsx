import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import DropdownBorrowing from '../components/DropdownBorrowing';
import CustomButton from '../components/CustomButton';

const ModalBookView = ({bookData, isbn}) => {
  const [modalVisible, setModalVisible] = useState(false);
  //const [book, setBook] = useState(bookData);
  console.log('ISBN in modal: ', isbn);
  console.log('bookData in modal out: ', bookData);

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
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPressOut={() => {
            setModalVisible(false);
          }}>
          <View style={styles.modalView}>
            <View style={styles.imgContainer}>
              <Image source={{uri: bookData.cover}} style={styles.logoBook} />
            </View>
            <Text style={styles.title}>{bookData.title}</Text>
            <Text style={styles.author}>{bookData.author}</Text>
            <DropdownBorrowing />
            <CustomButton
              onPress={() => setModalVisible(!modalVisible)}
              text="Reservar"
              style={styles.btnContainer}
              type="secondary"
            />
          </View>
        </TouchableOpacity>
      </Modal>
      <CustomButton
        text="Ver libro"
        onPress={() => setModalVisible(true)}
        type="secondary"
        style={styles.buttonAbove}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {},
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
  buttonAbove: {
    marginTop: 10,
    height: 40,
    maxWidth: 900,
    width: 266,
    position: 'absolute',
    bottom: 70,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 18,
    marginTop: 5,
    marginVertical: 5,
  },
  author: {
    fontSize: 16,
    marginVertical: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 4,
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
});

export default ModalBookView;
