/** @format */

import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import BookComponent from './BookComponent';

var books = [
  {
    id: 0,
    image: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'hasan',
    subtitle: 'Pedro M.J.',
  },
  {
    id: 1,
    image:
      'https://parsefiles.back4app.com/DnXMtxNJhNdaGUsqcSwUKpI7bMDY4uSkMWjGUU06/ce97710e048c47e42ede334f840c7977_TSLcover.jpg',
    title: 'erkan',
    subtitle: 'Antonio García',
  },
  {
    id: 2,
    image: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'veli tres',
    subtitle: 'Pedro M.J.',
  },
  {
    id: 3,
    image: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'diman',
    subtitle: 'Alfonso Mozambique Artiles',
  },
  {
    id: 4,
    image:
      'https://parsefiles.back4app.com/DnXMtxNJhNdaGUsqcSwUKpI7bMDY4uSkMWjGUU06/ce97710e048c47e42ede334f840c7977_TSLcover.jpg',
    title: 'Sorot 2',
    subtitle: 'KL Munf',
  },
  {
    id: 5,
    image:
      'https://parsefiles.back4app.com/DnXMtxNJhNdaGUsqcSwUKpI7bMDY4uSkMWjGUU06/ce97710e048c47e42ede334f840c7977_TSLcover.jpg',
    title: 'Almin Dubkal',
    subtitle: 'Pedro M.J.',
  },
];

const BookList = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        {books.map((book, index) => (
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
