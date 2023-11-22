import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import UsuariosList from '../components/TablaUsuarios';
import { Picker } from '@react-native-picker/picker';
import { registerCall, rolCall } from '../utils/callsToServer';


const AdminUsers = () => {
  const [dni, setDni] = useState("");
  const [pass, setPass] = useState("");
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('Tue Nov 21 2023 10:29:34 GMT-0300');
  const [selectedRol, setSelectedRol] = useState('');

  const [roles, setRoles] = useState([]);
  
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  const handleSubmit = async() => {
    const data = {
      names: nombres,
      lastNames: apellidos,
      username: dni,
      birthDay: birthdate,
      dni: dni,
      email: email,
      password: pass,
      role: selectedRol,
    }

    const respuesta = await registerCall(data);

    if (respuesta) {
      console.log(respuesta)
      hideModal()
    } else {
      console.log('No se pudo registrar :(')
    }
  }

  const getRoles = async () => {
    const respuesta = await rolCall();

    if (respuesta) {
      setRoles(respuesta);
    }
  }

  useEffect(() => {
    getRoles();
  }, [])

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
                placeholder="Ingrese el DNI"
                value={dni}
                onChangeText={dni => setDni(dni)}
                inputMode='numeric'
                right={<TextInput.Icon icon="card-text" />}
              />
              <TextInput
                style={styles.input}
                activeOutlineColor='#165589'
                mode='outlined'
                label="Contraseña"
                placeholder="Ingrese la contraseña"
                value={pass}
                onChangeText={value => setPass(value)}
                inputMode='text'
                secureTextEntry={true}
                right={<TextInput.Icon icon="email" />}
              />
              <TextInput
                style={styles.input}
                activeOutlineColor='#165589'
                mode='outlined'
                label="Apellido"
                placeholder="Ingrese el/los Apellido/s"
                value={apellidos}
                onChangeText={value => setApellidos(value)}
                right={<TextInput.Icon icon="account" />}
              />
              <TextInput
                style={styles.input}
                activeOutlineColor='#165589'
                mode='outlined'
                label="Nombres"
                placeholder="Ingrese el/los Nombre/s"
                value={nombres}
                onChangeText={value => setNombres(value)}
                right={<TextInput.Icon icon="account" />}
              />
              <TextInput
                style={styles.input}
                activeOutlineColor='#165589'
                mode='outlined'
                label="Correo Electrónico"
                placeholder="Ingrese el Correo Electrónico"
                value={email}
                onChangeText={value => setEmail(value)}
                inputMode='email'
                right={<TextInput.Icon icon="email" />}
              />
              <TextInput
                style={styles.input}
                activeOutlineColor='#165589'
                mode='outlined'
                label="Fecha de Nacimiento"
                placeholder="Ingrese la Fecha de Nacimiento"
                value={birthdate}
                onChangeText={value => setBirthdate(value)}
                //inputMode='numeric'
                right={<TextInput.Icon icon="calendar" />}
              />
              <View style={styles.containerPicker}>
                <Picker
                  selectedValue={selectedRol}
                  onValueChange={(itemRol) => setSelectedRol(itemRol)}
                >
                  {
                    roles.map((rol, key) => (
                      <Picker.Item key={key} label={rol.role} value={rol._id} />
                    ))
                  }
                </Picker>
              </View>
              <Button onPress={handleSubmit} buttonColor='#165589' textColor='#fff' style={styles.boton}
              >Agregar Usuario</Button>
            </View>
          </Modal>
        </Portal>
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