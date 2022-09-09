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
          <Image
            source={{uri: book.image}}
            style={styles.image}
            resizeMode="contain"
          />
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
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomColor: '#222',
    borderBottomWidth: 1,
  },
  textContainer: {
    flex: 80,
    paddingLeft: 10,
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  imgContainer: {width: '33%'},
  image: {width: '100%', height: 170},
  title: {fontSize: 20, fontWeight: 'bold', marginTop: 12},
  subtitle: {fontSize: 16},
});

export default BookComponent;
