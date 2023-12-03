import React from 'react'
import { View, StyleSheet } from 'react-native';
import { PaperProvider, Text, Card, Divider, Button, Portal, Modal, TextInput} from 'react-native-paper';

function PozoInfo({navigation}) {

  const navigateForm = () => {
    navigation.navigate('FormIny');
  }

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
            <Button buttonColor='#165589' style={styles.boton}  icon="table-plus" mode="contained" onPress={navigateForm}>
              Cargar Datos
            </Button>
          </Card.Content>
        </Card>
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

