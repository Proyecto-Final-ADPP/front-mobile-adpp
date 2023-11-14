import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import UsuariosList from '../components/TablaUsuarios';

const AdminUsers = () => {

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <PaperProvider>
      <Button style={styles.boton} onPress={showModal} mode='contained-tonal' icon="account-plus" buttonColor='#165589' textColor='#fff'>
        Registrar Nuevo Usuario
      </Button>
      <View style={styles.centerview}>

        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <View style={styles.modalView}>
              <Text variant='titleLarge' style={styles.textTitulo}>Registro</Text>
              <TextInput
                style={styles.input}
                activeOutlineColor='#165589'
                mode='outlined'
                label="DNI"
                placeholder="Ingrese su DNI"
                // value={dni}
                // onChangeText={dni => setDni(dni)}
                inputMode='numeric'
                right={<TextInput.Icon icon="card-text" />}
              />
              <TextInput
                style={styles.input}
                activeOutlineColor='#165589'
                mode='outlined'
                label="Apellido"
                placeholder="Ingrese el/los Apellido/s"
                // value={dni}
                // onChangeText={dni => setDni(dni)}
                right={<TextInput.Icon icon="account" />}
              />
              <TextInput
                style={styles.input}
                activeOutlineColor='#165589'
                mode='outlined'
                label="Nombres"
                placeholder="Ingrese el/los Nombre/s"
                // value={dni}
                // onChangeText={dni => setDni(dni)}
                right={<TextInput.Icon icon="account" />}
              />
              <TextInput
                style={styles.input}
                activeOutlineColor='#165589'
                mode='outlined'
                label="Correo Electrónico"
                placeholder="Ingrese el Correo Electrónico"
                // value={dni}
                // onChangeText={dni => setDni(dni)}
                inputMode='email'
                right={<TextInput.Icon icon="email" />}
              />
              <TextInput
                style={styles.input}
                activeOutlineColor='#165589'
                mode='outlined'
                label="Fecha de Nacimiento"
                placeholder="Ingrese la Fecha de Nacimiento"
                // value={dni}
                // onChangeText={dni => setDni(dni)}
                //inputMode='numeric'
                right={<TextInput.Icon icon="calendar" />}
              />
              <Button buttonColor='#165589' textColor='#fff' style={styles.boton}
              >Agregar Usuario</Button>
            </View>
          </Modal>
        </Portal>
      </View>

      <UsuariosList/>

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

});


export default AdminUsers;