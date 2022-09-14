import React, {useEffect, useState} from 'react';
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
import Parse from 'parse/react-native';

const ModalBookView = ({bookData, isbn}) => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log('ISBN in modal: ', isbn);
  console.log('bookData in modal out: ', bookData);
  const [book, setBook] = useState<Parse.Object>();

  const getBook = async (isbn: string) => {
    let query = new Parse.Query('book');
    query.equalTo('isbn', isbn);
    await query.find().then(
      object => {
        console.log('object: ', object[0]);

        setBook(object[0]);

        console.log('book in modal: ', book);
        console.log('Show modal now:');

        if (object.length == 0) {
          console.log('NO existe el libro');

          alert('No existe');
        }
        if (object.empty) {
          console.log('No existe 2');
          alert('No existe');
        }
        if (object == null) {
          console.log('No existe 3');
          alert('No existe');
        }
      },
      error => {
        console.log('ERROR: ', error);
        if (error.code === 101) {
          console.log('No existe');
          alert('No existe el libro seleccionado en la base de datos');
        }
        return false;
      },
    );
    console.log('After check');
  };

  const createCopy = () => {
    console.log('Creating copy');

    let copy = new Parse.Object('copy');
    copy.set('book', book);
    copy.set('ubication', 'probando');
    copy.set('incorporatedAt', new Date());
    copy.save().then(
      object => {
        console.log('copy created: ', object);
      },
      error => {
        console.log('ERROR saving copy: ', error);
        return false;
      },
    );
  };

  const createBorrowing = () => {
    let borrowing = new Parse.Object('borrowings');
    //TODO: probar con .put y no .set
    borrowing.set('isbn', 'test');
    borrowing.save().then(
      borrowing => {
        console.log('book saved: ', borrowing);
      },
      error => {
        console.log('ERROR saving book: ', error);
      },
    );
  };

  useEffect(() => {
    getBook(isbn);
  }, [isbn]);

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
              <Image
                source={{uri: bookData.cover.url()}}
                style={styles.logoBook}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.title}>{bookData.title}</Text>
            <Text style={styles.author}>{bookData.author}</Text>
            <DropdownBorrowing />
            <CustomButton
              onPress={() => {
                setModalVisible(!modalVisible);
                createCopy();
                //createBorrowing();
              }}
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
  imgContainer: {
    //flex: 0.5,
    width: 200,
    height: 240,
    marginBottom: 16,
  },
  logoBook: {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    //margin: 10,
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
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 35,
    paddingVertical: 40,
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
