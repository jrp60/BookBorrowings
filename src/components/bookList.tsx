/** @format */

import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import BookComponent from './BookComponent';
import Parse from 'parse/react-native';

const BookList = ({navigation}) => {
  const [books, setBooksData] = useState([]);

  const get5Books = () => {
    let query = new Parse.Query('book');
    query.limit(5);
    query.find().then(
      object => {
        console.log('last 5 books: ', object);
        setBooksData(object.map(book => book.toJSON()));
        console.log('books: ', books);
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
    console.log('after get5Books: ', books);
  };

  useEffect(() => {
    get5Books();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        {books &&
          books.map((book, index) => (
            <BookComponent navigation={navigation} book={book} key={index} />
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default BookList;
