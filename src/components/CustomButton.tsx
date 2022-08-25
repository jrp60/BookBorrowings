import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const CustomButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 0,
    alignItems: 'center',
    //backgroundColor: '#89CFFD',
    backgroundColor: '#78C3F5',
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CustomButton;
