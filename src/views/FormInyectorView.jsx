import React from 'react'
import { View, StyleSheet } from 'react-native';
import { PaperProvider, Text, Button, TextInput} from 'react-native-paper';

function FormInyectores() {

  return (
    <PaperProvider>
      <View style={styles.centerview}>
        <View style={styles.modalView}>
          <Text variant='titleLarge' style={styles.textTitulo}>Registro Diario</Text>
          <TextInput
            style={styles.input}
            activeOutlineColor='#165589'
            mode='outlined'
            label="Temperatura"
            placeholder="Ingrese la Temperatura"
            inputMode='numeric'
            right={<TextInput.Icon icon="table-edit" />}
          />
          <TextInput
            style={styles.input}
            activeOutlineColor='#165589'
            mode='outlined'
            label="Presión de Inyección"
            placeholder="Ingrese Presión de Inyección"
            inputMode='numeric'
            right={<TextInput.Icon icon="table-edit" />}
          />
          <TextInput
            style={styles.input}
            activeOutlineColor='#165589'
            mode='outlined'
            label="Observaciones"
            placeholder="Ingrese alguna Observacion"
            right={<TextInput.Icon icon="note-edit" />}
          />
          <Button buttonColor='#165589' textColor='#fff' style={styles.boton}
          >Agregar Datos</Button>
        </View>
      </View>
    </PaperProvider>
    

  )
}

const styles = StyleSheet.create({
  boton: {
    alignContent: 'center',
    marginLeft: 80,
    marginRight: 80,
    marginTop: 15,
    marginBottom: 8,
  },
  textTitulo: {
    textAlign: 'center',
    color: '#165589',
    fontWeight:'bold'},
  input: {
    marginTop: 8,
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
})
export default FormInyectores;
