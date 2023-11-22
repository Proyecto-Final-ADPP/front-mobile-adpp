import React from 'react'
import { View, StyleSheet } from 'react-native';
import { TouchableRipple,PaperProvider, Text, Card, Divider, Button, Portal, Modal, TextInput} from 'react-native-paper';

function PozoInfo() {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <PaperProvider>
      <View style={{ padding: 20 }}>
      <Card>
        <Card.Content>
          <Text style={styles.textTitulo} variant="displaySmall">Pozo 1</Text>
          <Divider />
          
          <Text style={{ marginTop: 20 }}  variant="headlineSmall">Tipo de Pozo: Productor</Text>
          <Text style={{ marginTop: 15 }} variant="headlineSmall">Sistema de produccion: Gas lift inverso </Text>
          <Divider />
          <Button buttonColor='#165589' style={styles.boton}  icon="table-plus" mode="contained" onPress={showModal}>
            Cargar Datos
          </Button>
        </Card.Content>
      </Card>
      <View style={styles.centerview}>

        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <View style={styles.modalView}>
              <Text variant='titleLarge' style={styles.textTitulo}>Registro Diario</Text>
              <TextInput
                style={styles.input}
                activeOutlineColor='#165589'
                mode='outlined'
                label="Temperatura"
                placeholder="Ingrese la Temperatura"
                // value={dni}
                // onChangeText={dni => setDni(dni)}
                //inputMode='text'
                inputMode='numeric'
                right={<TextInput.Icon icon="table-edit" />}
              />
              <TextInput
                style={styles.input}
                activeOutlineColor='#165589'
                mode='outlined'
                label="Presión Directa"
                placeholder="Ingrese Presión Directa"
                // value={dni}
                // onChangeText={dni => setDni(dni)}
                inputMode='numeric'
                right={<TextInput.Icon icon="table-edit" />}
              />
              <TextInput
                style={styles.input}
                activeOutlineColor='#165589'
                mode='outlined'
                label="Presión Anular"
                placeholder="Ingrese Presión Anular"
                // value={dni}
                // onChangeText={dni => setDni(dni)}
                inputMode='numeric'
                right={<TextInput.Icon icon="table-edit" />}
              />
              <TextInput
                style={styles.input}
                activeOutlineColor='#165589'
                mode='outlined'
                label="Dosificación de Químicos"
                placeholder="Ingrese Dosificación de Químicos"
                // value={dni}
                // onChangeText={dni => setDni(dni)}
                //inputMode='email'
                right={<TextInput.Icon icon="flask" />}
              />
              <TextInput
                style={styles.input}
                activeOutlineColor='#165589'
                mode='outlined'
                label="Observaciones"
                placeholder="Ingrese alguna Observacion"
                // value={dni}
                // onChangeText={dni => setDni(dni)}
                //inputMode='numeric'
                right={<TextInput.Icon icon="note-edit" />}
              />
              <Button buttonColor='#165589' textColor='#fff' style={styles.boton}
              >Agregar Datos</Button>
            </View>
          </Modal>
        </Portal>
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
export default PozoInfo

