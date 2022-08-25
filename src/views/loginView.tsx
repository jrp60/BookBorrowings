import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

const LoginView = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const validateUser = () => {
    if (user === '' && password === '') {
      navigation.navigate('HomeView');
    } else {
      alert('Invalid user or password');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <CustomInput
            placeholder={'Usuario'}
            value={user}
            setValue={setUser}
          />
          <CustomInput
            placeholder={'Contraseña'}
            value={password}
            setValue={setPassword}
            secureTextEntry
          />

          <TouchableOpacity onPress={() => validateUser()}>
            <CustomButton />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 0,
    alignItems: 'center',
  },
  image: {
    width: '70%',
    maxWidth: 300,
    height: 160,
    backgroundColor: '#78C3F5',
    padding: 10,
    margin: 10,
  },
  input: {
    borderColor: '#78C3F5',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: '70%',
    maxWidth: 300,
  },
});

export default LoginView;
