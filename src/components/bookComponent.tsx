import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';

const BookComponent = ({navigation, book}) => {
  return (
    <TouchableOpacity
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
  );
};

const styles = StyleSheet.create({
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
});

export default BookComponent;
