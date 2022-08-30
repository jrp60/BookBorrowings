import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const ScannerTabView = () => {
  const [isbn, setIsbn] = useState('');
  const getISBN = (isbn: string) => {
    console.log('ISBN leido: ', isbn);
    setIsbn(isbn);
  };

  return (
    <QRCodeScanner
      onRead={e => getISBN(e.data)}
      fadeIn={true}
      reactivate={true}
      reactivateTimeout={3000}
      showMarker={true}
      markerStyle={{
        borderColor: '#5BB5F1',
        borderWidth: 2,
        borderRadius: 2,
      }}
      topContent={
        <Text style={styles.centerText}>
          Sitúe el código de barras en el campo de la cámara
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
    textAlign: 'center',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default ScannerTabView;
