import React from 'react'
import { View } from 'react-native';
import { TouchableRipple, Text, Card, Divider,Button } from 'react-native-paper';

function PozoInfo() {
  return (
    <View style={{ padding: 20 }}>
      <Text variant="displaySmall">Pozo 1</Text>
      <Divider />
      <Text style={{ marginTop: 20 }} variant="headlineMedium">Tipo de Pozo: Productor</Text>
      <Text style={{ marginTop: 15 }} variant="headlineMedium">Sistema de produccion: Gas lift inverso </Text>
      <Divider />
      <Button style={{marginTop: 15 }} icon="bell" mode="contained" onPress={() => console.log('Pressed')}>
        Cargar Datos
      </Button>
    </View>

  )
}

export default PozoInfo