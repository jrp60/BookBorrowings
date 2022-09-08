import React from 'react';
import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Parse from 'parse/react-native';

const DropdownBorrowing = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [users, setUsers] = useState([{}]);

  var placeholder = 'Selecciona a un usuario';
  var disabled = false;
  //TODO : change users to books
  // if (users.length === 0) {
  //   placeholder = 'No hay libros disponibles';
  //   disabled = true;
  // }

  const getUsers = async () => {
    console.log('geting users....');

    let query = new Parse.Query('user');
    await query.findAll().then(
      //let queryResult = await query.findAll().then(
      object => {
        console.log('object: ', object);
        setUsers(
          object.map(user =>
            //console.log('username: ', user.get('username')),
            //console.log('id: ', user.id),
            ({label: user.get('username'), value: user.id, key: user.id}),
          ),
        );
      },
      error => {
        console.log('ERROR: ', error);
        disabled = true;
        placeholder = 'Error cargando los usuarios';
        if (error.code === 101) {
          placeholder = 'No hay libros disponibles';

          console.log('No existe');
          alert('No existen usuarios en la base de datos');
        }
        return false;
      },
    );
    console.log('After check');
  };

  useState(() => {
    getUsers();
  });

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={users}
      disabled={disabled}
      disabledStyle={{
        opacity: 0.3,
      }}
      placeholder={placeholder}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setUsers}
      //activityIndicatorColor="red"
      containerStyle={{
        maxWidth: '95%',
        marginTop: 16,
        marginBottom: 16,
        marginLeft: '2%',
      }}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default DropdownBorrowing;
