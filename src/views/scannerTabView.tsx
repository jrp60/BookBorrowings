import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Parse from 'parse/react-native';
import ModalBookView from './ModalBookView';

const ScannerTabView = () => {
  const [isbn, setIsbn] = useState('');
  const [showBottomContent, setShowBottomContent] = useState(false);
  const getISBN = (isbn: string) => {
    console.log('ISBN leido: ', isbn);
    setIsbn(isbn);
  };

  const checkIfExists = async (isbn: string) => {
    console.log('CHECKING....');

    let query = new Parse.Query('book');
    query.equalTo('isbn', isbn);
    await query.find().then(
      //let queryResult = await query.findAll().then(
      object => {
        console.log('object: ', object);
        // navigate ?
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

  const readIsbn = async (isbn: string) => {
    setIsbn(isbn);
    console.log('ISBN leido: ', isbn);
    setShowBottomContent(true);
    /*if(await checkIfExists(isbn)) {
      console.log('El libro ya existe');
    }*/
    checkIfExists(isbn);
    showModal();
  };

  const showModal = () => {
    setShowBottomContent(true);
  };

  const [person, setPerson] = useState(new Parse.Object('Person'));
  async function fetchPerson() {
    //create your Parse Query using the Person Class you've created
    let query = new Parse.Query('Person');
    //run the query to retrieve all objects on Person class, optionally you can add your filters
    let queryResult = await query.findAll().then(
      objects => {
        //pick the first result
        const currentPerson = objects[0];
        //access the Parse Object attributes
        console.log('person id: ', currentPerson.get('objectId'));
        console.log('person name: ', currentPerson.get('name'));
        console.log('person email: ', currentPerson.get('email'));
        setPerson(currentPerson);
      },
      error => {
        //The query returned an error
        console.log('error', error);
      },
    );
  }

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

  const openBook = () => {
    console.log('ISBN: ', isbn);
    console.log('person: ', person);
    console.log('And now fetch!');
    fetchPerson();
  };

  useEffect(() => {
    console.log('USE EFFECT 2!!');
    readIsbn('780194791830');
    console.log('And now fetch!');
    //fetchPerson();
  }, []);

  return (
    <QRCodeScanner
      onRead={e => readIsbn(e.data)}
      fadeIn={true}
      reactivate={true}
      reactivateTimeout={3000}
      showMarker={true}
      markerStyle={{
        borderColor: '#5BB5F1',
        borderWidth: 2,
        borderRadius: 2,
      }}
      topContent={
        <Text style={styles.centerText}>
          Sitúe el código de barras en el campo de la cámara
        </Text>
      }
      {...(showBottomContent && {
        bottomContent: (
          <View>
            <TouchableOpacity style={styles.buttonTouchable} onPress={openBook}>
              <Text style={styles.buttonText}>Ver Libro</Text>
            </TouchableOpacity>
            <ModalBookView />
          </View>
        ),
      })}
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
    textAlign: 'center',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default ScannerTabView;
