import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import PozosList from '../components/TablaPozos';

const AdminPozos = ({navigation}) => {

  const navigateRegisterPozo = () => {
    navigation.navigate('RegistroPozos');
  }

  return (
    <PaperProvider>
      <Button style={styles.boton} onPress={navigateRegisterPozo} mode='contained-tonal' icon="account-plus" buttonColor='#165589' textColor='#fff'>
        Registrar Nuevo Pozo
      </Button>
      <View>
        <PozosList/>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  textTitulo: {
    textAlign: 'center',
    color: '#165589',
    fontWeight:'bold'},
  input: {
    marginTop: 5,
  },
  boton: {
    alignContent:'center',
    marginLeft:80,
    marginRight:80,
    marginTop:15,
    marginBottom:-5,
  },
  centerview: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  modalView: {
    margin: 10,
    backgroundColor: '#DBE9F5',
    borderRadius: 20,
    padding: 10,
    //alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  containerPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#165589',
    //paddingHorizontal: 10,
    marginVertical: 10,
    marginBottom: 0,
    backgroundColor: 'white'
  },
});


export default AdminPozos;