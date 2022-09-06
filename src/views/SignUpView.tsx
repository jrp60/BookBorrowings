import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

const SignUpView = ({navigation}) => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const validatePassword = () => {
    if (password !== passwordConfirm) {
      alert('Las contraseñas no coinciden');
    } else {
      return true;
    }
  };

  const signUpValidation = () => {
    if (user == '' && email == '' && password == '' && passwordConfirm == '') {
      if (validatePassword()) {
        //TODO - Sign up values
        navigation.navigate('HomeView');
      }
    } else {
      alert('Rellena todos los campos');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.goBackBtn}>
            <Ionicons name="chevron-back-outline" size={30} color="#5BB5F1" />
          </Pressable>
          <Text style={styles.title}>Crear Cuenta</Text>
          <CustomInput
            placeholder={'Usuario'}
            value={user}
            setValue={setUser}
          />
          <CustomInput
            placeholder={'Correo'}
            value={email}
            setValue={setEmail}
          />
          <CustomInput
            placeholder={'Contraseña'}
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <CustomInput
            placeholder={'Confirmar contraseña'}
            value={passwordConfirm}
            setValue={setPasswordConfirm}
            secureTextEntry
          />

          <CustomButton
            onPress={signUpValidation}
            text="Registrar"
            style={styles.btnContainer}
          />

          <CustomButton
            onPress={() => navigation.goBack()}
            text="¿Tienes cuenta? Accede"
            style={styles.btnContainer}
            type="tertiary"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  goBackBtn: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingHorizontal: 10,
    paddingVertical: 4,
    width: 40,
  },
  container: {
    margin: 10,
    marginTop: 0,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 26,
    marginTop: 2,
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

export default SignUpView;
