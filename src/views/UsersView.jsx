import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import UsuariosList from '../components/TablaUsuarios';
import RegisterUsers from './RegisterUserView';
import { Picker } from '@react-native-picker/picker';
import { registerCall, rolCall } from '../utils/callsToServer';


const AdminUsers = ({ navigation }) => {

  const navigateRegisterUsers = () => {
    navigation.navigate('RegistroUsers');
  }

  return (
    <PaperProvider>
      <Button style={styles.boton} onPress={navigateRegisterUsers} mode='contained-tonal' icon="account-plus" buttonColor='#165589' textColor='#fff'>
        Registrar Nuevo Usuario
      </Button>
      <View>
        <UsuariosList/>
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
    marginTop: 8,
  },
  boton: {
    alignContent:'center',
    marginLeft:80,
    marginRight:80,
    marginTop:15,
    marginBottom:8,
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


export default AdminUsers;