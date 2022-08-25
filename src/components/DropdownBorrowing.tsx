import React from 'react';
import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownBorrowing = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [users, setUsers] = useState([
    {label: 'Antonio Garcia', value: '1'},
    {label: 'Juan Francisco Baeza', value: '2'},
  ]);

  var placeholder = 'Selecciona a un usuario';
  var disabled = false;
  //TODO : change users to books
  if (users.length === 0) {
    placeholder = 'No hay libros disponibles';
    disabled = true;
  }

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
