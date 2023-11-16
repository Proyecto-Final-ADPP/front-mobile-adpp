import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import PozosList from '../components/TablaPozos';

const AdminPozos = () => {

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  const [selectedTipo, setSelectedTipo] = useState('');

  const handleChangeTipo = (itemTipo) => {
    setSelectedTipo(itemTipo);
  };

  const [selectedSistema, setSelectedSistema] = useState('');

  const handleChangeSistema = (itemSistema) => {
    setSelectedSistema(itemSistema);
  };

  return (
    <PaperProvider>
      <Button style={styles.boton} onPress={showModal} mode='contained-tonal' icon="account-plus" buttonColor='#165589' textColor='#fff'>
        Registrar Nuevo Pozo
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
                label="Nombre"
                placeholder="Ingrese el nombre del pozo"
                // value={dni}
                // onChangeText={dni => setDni(dni)}
                //inputMode='numeric'
                right={<TextInput.Icon icon="card-text" />}
              />
              <View style={styles.containerPicker}>
                <Picker
                  selectedValue={selectedTipo}
                  onValueChange={(itemTipo) => handleChangeTipo(itemTipo)}
                >
                  <Picker.Item label="Tipo de pozo" value="" />
                  <Picker.Item label="Productor" value="productor" />
                  <Picker.Item label="Inyector" value="inyector" />
                </Picker>
              </View>
              <View style={styles.containerPicker}>
                <Picker
                  selectedValue={selectedSistema}
                  onValueChange={(itemSistema) => handleChangeSistema(itemSistema)}
                >
                  <Picker.Item label="Sistema de produccion" value="" />
                  <Picker.Item label="Gas lift inverso" value="productor" />
                  <Picker.Item label="Gas lift convencional" value="inyector" />
                  <Picker.Item label="Bombeo mecanico-AIB" value="inyector" />
                </Picker>
              </View>
              <TextInput
                style={styles.input}
                activeOutlineColor='#165589'
                mode='outlined'
                label="Fecha de inicio"
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