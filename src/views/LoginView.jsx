//import React from 'react';
import { useState } from 'react';
import * as React from 'react';
import { ImageBackground, View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Card, Text } from 'react-native-paper';


const LoginForm = ({navigation}) => {

  const [dni, setDni] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePress = () => {
      navigation.navigate('Home');
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
            <Text variant="displaySmall">Inicio de Sesión</Text>
          </Card.Content>
          <View style={styles.space}></View>
            <TextInput
              activeOutlineColor='#165589'
              mode='outlined'
              label="DNI"
              placeholder="Ingrese su DNI"
              value={dni}
              onChangeText={dni => setDni(dni)}
              keyboardType="numeric"
              right={<TextInput.Icon icon="account" />}
            />
            <View style={styles.space}></View>
            <TextInput
              activeOutlineColor='#165589'
              mode="outlined"
              label="Contraseña"
              placeholder="Ingrese su contraseña"
              secureTextEntry={!showPassword}
              right={
                <TextInput.Icon
                  icon={showPassword ? 'eye' : 'eye-off'}
                  onPress={togglePasswordVisibility}
                />
              }
            />
            <View style={styles.space}></View>

          <Card.Actions>
            <Button>Cancel</Button>
            <Button onPress={handlePress} buttonColor='#165589'
            >Ingresar</Button>
          </Card.Actions>
        </Card>
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
} )

export default LoginForm;