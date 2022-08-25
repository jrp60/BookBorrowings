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
  const forgotPassword = () => {
    alert('Forgot password');
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

          <CustomButton
            onPress={validateUser}
            text="Login"
            style={styles.btnContainer}
          />

          <CustomButton
            onPress={forgotPassword}
            text="Recordar contraseña"
            style={styles.btnContainer}
            type="secondary"
          />
          <CustomButton
            onPress={() => navigation.navigate('Signup')}
            text="¿No tienes cuenta? Crear una"
            style={styles.btnContainer}
            type="secondary"
          />
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
  btnContainer: {
    margin: 10,
  },
});

export default LoginView;
