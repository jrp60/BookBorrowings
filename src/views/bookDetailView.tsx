import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {useState} from 'react';
import DropdownBorrowing from '../components/DropdownBorrowing';

const BookDetailView = ({navigation, route}) => {
  const {book, id} = route.params;

  useEffect(() => {
    navigation.setOptions({title: JSON.stringify(book.title)});
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={styles.logoBook}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>El libro de la selva de los vivos</Text>
        <Text style={styles.author}>{JSON.stringify(id)}</Text>
        <DropdownBorrowing />
        <ScrollView>
          <Text style={styles.tag}>Fecha de publicación</Text>
          <Text style={styles.subtitle}>26-01-2000</Text>
          <Text style={styles.tag}>Descripción</Text>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            repellat ab voluptatem corporis eligendi dolore! Facere pariatur
            accusamus, quas perspiciatis maxime nobis expedita enim laudantium
            dolor ducimus voluptatibus sit illo.
          </Text>
          <Text style={styles.tag}>Editorial</Text>
          <Text style={styles.subtitle}>
            Editorial de la selva de los vivos
          </Text>
          <Text style={styles.tag}>Edición</Text>
          <Text style={styles.subtitle}>1era edición</Text>
          <Text style={styles.tag}>ISBN</Text>
          <Text style={styles.subtitle}>123456789</Text>
          <Text style={styles.tag}>Páginas</Text>
          <Text style={styles.subtitle}>100</Text>
          <Text style={styles.tag}>Idioma</Text>
          <Text style={styles.subtitle}>Español</Text>
          <Text style={styles.tag}>Categoría</Text>
          <Text style={styles.subtitle}>Ciencia</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  imgContainer: {},
  textContainer: {
    marginTop: 10,
    padding: 10,
  },
  logoBook: {
    //width: "100%",
    //width: 100,
    height: 160,
    maxHeight: 160,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginVertical: 5,
  },
  author: {
    fontSize: 15,
    //marginTop: 5,
    marginVertical: 10,
  },
  tag: {
    fontSize: 12,
    marginTop: 8,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginLeft: 6,
  },
  subtitle: {
    fontSize: 12,
    color: '#111',
    marginLeft: 6,
    //height: 300,
  },
});

export default BookDetailView;
