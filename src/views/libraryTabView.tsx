/** @format */

import {StyleSheet, TextInput, View} from 'react-native';
//import MySearchBar from "../components/Searchbar";
import BookList from '../components/bookList';
import React from 'react';
// <MySearchBar></MySearchBar>

const LibraryTabView = () => {
  const [book, onChangeText] = React.useState('Useless Text');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={book}
        placeholder="Busca un libro"
      />
      <BookList></BookList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

export default LibraryTabView;
