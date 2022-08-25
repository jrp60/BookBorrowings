import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

interface CustomInputInterface {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
}

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry = false,
}: CustomInputInterface) => {
  return (
    <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    borderColor: '#78C3F5',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    width: '80%',
    maxWidth: 300,
  },
});

export default CustomInput;
