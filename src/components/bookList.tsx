/** @format */

import React from 'react';
import {ScrollView, StyleSheet, Image, Text, View} from 'react-native';

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
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  imgContainer: {flex: 20},
  textContainer: {
    flex: 80,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  logoBook: {width: '100%', height: 160},
  title: {fontSize: 20, fontWeight: 'bold', marginTop: 5},
  subtitle: {fontSize: 16},
  separator: {
    marginVertical: 0,
    height: 1,
    width: '100%',
  },
});

const booksComponent = books.map((item, index) => (
  <View key={index}>
    <View style={styles.rowContainer}>
      <View style={styles.imgContainer}>
        <Image style={styles.logoBook} source={{uri: item.image}} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  </View>
));

/* <View
      style={styles.separator}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"></View> */

export default function BookList() {
  return <ScrollView style={styles.container}>{booksComponent}</ScrollView>;
}

/*
<View style={styles.rowContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.logoBook}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{textInputComponents}</Text>
          <Text style={styles.subtitle}>
            React Native is an open source project created by Facebook for
            building native apps on the React framework.
          </Text>
        </View>
      </View> */
