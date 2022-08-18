/** @format */

import {StyleSheet, Text, View} from 'react-native';
//import MySearchBar from "../components/Searchbar";
import BookList from '../components/bookList';
import React from 'react';
// <MySearchBar></MySearchBar>

const libraryTabView = () => {
  return (
    <View style={styles.container}>
      <BookList></BookList>
    </View>
  );
};

/* SEPARATOR ARRIBA DE BOOKLIST Y ABAJO DEL BUSCADOR
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      */

/*<EditScreenInfo path="/screens/TabOneScreen.tsx" />*/

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
  separator: {
    marginVertical: 0,
    height: 1,
    width: '100%',
  },
});

export default libraryTabView;
