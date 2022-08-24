/** @format */

import {StyleSheet, TextInput, View} from 'react-native';
import BookList from '../components/BookList';
import React from 'react';
import BookDetailView from './BookDetailView';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const LibraryTabView = ({navigation}) => {
  const [book, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={book}
        placeholder="Busca un libro"
      />
      <BookList navigation={navigation}></BookList>
    </View>
  );
};

const LibraryTabView1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Biblioteca" component={LibraryTabView} />
      <Stack.Screen
        name="BookDetail"
        component={BookDetailView}
        options={{title: 'Tteee'}}
      />
    </Stack.Navigator>
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

export default LibraryTabView1;
