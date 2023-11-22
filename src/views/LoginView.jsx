//import React from 'react';
import { useState } from 'react';
import * as React from 'react';
import { ImageBackground, View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Card, Text } from 'react-native-paper';

import { loginCall } from '../utils/callsToServer';

const LoginForm = ({navigation}) => {
  const [dni, setDni] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePress = async () => {
      setError(null);

      const response = await loginCall(dni, pass);

      console.log(response)

      if (response) {
        navigation.navigate('Home');
      } else {
        setError('Los datos ingresados no son válidos');
      }
  }
  
  return(
    <ImageBackground
      source={require('../images/Petroleo-produccion-pozo-petrolero-1920-2.jpg')} // Ruta de la imagen de fondo
      style={styles.imageBackground}
      imageStyle={styles.imageStyle}
    >
      <View style={styles.container}>
      
        <Card style={styles.card}>
          <Card.Content>
            <Text variant='headlineSmall' style={styles.textTitulo}>Inicio de Sesión</Text>
          </Card.Content>
          <View style={styles.space}></View>
            <TextInput
              style={styles.input}
              activeOutlineColor='#165589'
              mode='outlined'
              label="DNI"
              placeholder="Ingrese su DNI"
              value={dni}
              onChangeText={dni => setDni(dni)}
              inputMode='numeric'
              right={<TextInput.Icon icon="account" />}
            />
            <View style={styles.space}></View>
            <TextInput
              style={styles.input}
              activeOutlineColor='#165589'
              mode="outlined"
              label="Contraseña"
              placeholder="Ingrese su contraseña"
              onChangeText={pass => setPass(pass)}
              secureTextEntry={!showPassword}
              right={
                <TextInput.Icon
                  icon={showPassword ? 'eye' : 'eye-off'}
                  onPress={togglePasswordVisibility}
                />
              }
            />
            <View style={styles.space}></View>

            <Button onPress={handlePress} buttonColor='#165589' textColor='#fff' style={styles.boton}
            >Ingresar</Button>
          {/* <Card.Actions>
          </Card.Actions> */}
          
        </Card>
        {
              error && (
                <View>
                  <View style={styles.space} />
                  <Card>
                    <Card.Content>
                      <Text variant="titleLarge">
                        { error }
                      </Text>
                    </Card.Content>
                  </Card>
                </View>
              )
            }
      </View>
    </ImageBackground>
  )
};

const styles = StyleSheet.create ( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
      flex: 1,
      resizeMode: 'cover', // Ajusta la imagen al tamaño del contenedor
      backgroundColor: '#292929',
  },
  imageStyle: {
      opacity: 0.5, // Valor de opacidad entre 0 y 1
  },
  card: {
    width: '80%', // Ajusta el ancho del Card según tus necesidades
    alignItems: 'center'
  },
  space: {
    height: 10,
  },
  textTitulo: {
    textAlign: 'center',
    color: '#165589',
    fontWeight:'bold'
  },
  input: {
    marginLeft: -25,
    marginRight: -25,
  },
  boton: {
    alignContent:'center',
    marginLeft:50,
    marginRight:50,
    marginVertical:10
  },
})

export default LoginForm;