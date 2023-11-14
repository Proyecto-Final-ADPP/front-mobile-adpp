import React from 'react'
import { TouchableRipple, Text, Card } from 'react-native-paper';
import { StyleSheet } from 'react-native';


function CardPozo() {
  return (
    <TouchableRipple
    style={styles.card}
    onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 0, 0, .32)"
    >
        <Card>
        <Card.Content>
            <Text variant="titleLarge">Pozo 1</Text>
            <Text variant="bodyMedium">Description</Text>
        </Card.Content>
        </Card>
    </TouchableRipple>
  )
}

const styles = StyleSheet.create({
    card: {
      marginTop: 10,
    },
  });
  

export default CardPozo
