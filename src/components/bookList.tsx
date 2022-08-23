/** @format */

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {ZoomIn} from 'react-native-reanimated';
import BookDetailView from '../views/bookDetailView';

var books = [
  {
    id: 0,
    image: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'hasan',
    subtitle: 'Pedro M.J.',
  },
  {
    id: 1,
    image: 'https://reactnative.dev/img/tiny_logo.png',
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
    image: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Sorot 2',
    subtitle: 'KL Munf',
  },
  {
    id: 5,
    image: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Almin Dubkal',
    subtitle: 'Pedro M.J.',
  },
];

const booksComponent = navigation => {
  return (
    <View style={styles.container}>
      {books.map((book, index) => (
        <TouchableOpacity
          key={book.id}
          onPress={() =>
            navigation.navigate('BookDetail', {
              screen: 'BookDetail',
              book: book,
              id: 'probando',
            })
          }>
          <View style={styles.rowContainer}>
            <View style={styles.imgContainer}>
              <Image source={{uri: book.image}} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{book.title}</Text>
              <Text style={styles.subtitle}>{book.subtitle}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const BookList = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {booksComponent(navigation)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomColor: '#222',
    borderBottomWidth: 1,
  },
  imgContainer: {flex: 20},
  textContainer: {
    flex: 80,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  image: {width: '100%', height: 160},
  title: {fontSize: 20, fontWeight: 'bold', marginTop: 5},
  subtitle: {fontSize: 16},
  separator: {
    marginVertical: 0,
    height: 1,
    width: '100%',
  },
});

export default BookList;
