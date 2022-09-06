import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface CustomButtonInterface {
  onPress: () => void;
  text: string;
  style?: any;
  type?: 'primary' | 'secondary' | 'tertiary';
}

const CustomButton = ({
  onPress,
  text,
  style,
  type = 'primary',
}: CustomButtonInterface) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.touchableStyle, styles[`touchable_${type}`]]}>
        <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '80%',
    margin: 10,
  },
  touchable_primary: {
    backgroundColor: '#89CFFD',
  },
  touchable_secondary: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
  },
  touchable_tertiary: {
    backgroundColor: '#fff',
  },
  touchableStyle: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  text: {},
  text_primary: {
    color: '#fff',
    fontSize: 20,
  },
  text_secondary: {
    color: '#000',
  },
  text_tertiary: {
    color: '#333',
  },
});

export default CustomButton;
