import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Parse from 'parse/react-native';
import ModalBookView from './ModalBookView';

const ScannerTabView = () => {
  const [isbn, setIsbn] = useState('');
  const [showBottomContent, setShowBottomContent] = useState(false);
  const [bookData, setBookData] = useState({
    author: '',
    title: '',
    isbn: '',
    cover: '',
  });

  const readIsbn = async (isbn: string) => {
    setIsbn(isbn);
    console.log('ISBN leido: ', isbn);
    checkIfExists(isbn);
  };

  const checkIfExists = async (isbn: string) => {
    console.log('CHECKING....');
    console.log('ISBN: ', isbn);

    let query = new Parse.Query('book');
    query.equalTo('isbn', isbn);
    await query.find().then(
      object => {
        console.log('object: ', object[0]);

        //TODO: check
        setBookData({
          author: object[0].get('author'),
          title: object[0].get('title'),
          isbn: object[0].get('isbn'),
          cover: object[0].get('cover'),
        });

        console.log('author: ', object[0].get('author'));

        console.log('bookData in scanner: ', bookData);
        console.log('Show modal now:');

        showModal();

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

  const showModal = () => {
    setShowBottomContent(true);
  };

  //in new view
  /*
  async function fetchPersonById(id: string) {
    //create your Parse Query using the Person Class you've created
    let query = new Parse.Query('Person');
    //run the query to retrieve all objects on Person class, optionally you can add your filters
    let queryResult = await query.get(id);
    //pick the first result
    const currentPerson = queryResult;
    //access the Parse Object attributes
    console.log('person id: ', currentPerson.get('id'));
    console.log('person name: ', currentPerson.get('name'));
    console.log('person email: ', currentPerson.get('email'));
    setPerson(currentPerson);
  }
  */

  const createBottomContent = () => {
    console.log('CREATING BOTTOM CONTENT');

    return (
      <View>
        <ModalBookView bookData={bookData} isbn={isbn} />
      </View>
    );
  };
  //readIsbn('780194791830');

  useEffect(() => {
    console.log('USE EFFECT in ScannerTabView');
    //readIsbn('780194791830');
  });

  return (
    <QRCodeScanner
      onRead={e => readIsbn(e.data)}
      fadeIn={true}
      reactivate={true}
      reactivateTimeout={3000}
      showMarker={true}
      markerStyle={styles.markerStyle}
      cameraStyle={styles.cameraStyle}
      {...(showBottomContent && {
        bottomContent: createBottomContent(),
      })}
    />
  );
};

const styles = StyleSheet.create({
  markerStyle: {
    borderColor: '#5BB5F1',
    borderWidth: 2,
    borderRadius: 2,
  },
  cameraStyle: {
    height: '100%',
  },
});

export default ScannerTabView;
