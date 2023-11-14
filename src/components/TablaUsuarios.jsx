import * as React from 'react';
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from 'react-native-paper';

const UsuariosList = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      onPressIn={() => setIsExpanded(!isExpanded)}
      style={[styles.card, isExpanded && { transform: [{ scale: 1.5 }] }]}
    >
      {/* <Card.Cover source={require("./images/image.jpg")} /> */}
      <Card.Title title="Card Title"/>
      <Card.Content>
        <Text variant="titleLarge">Card title</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
  },
});

export default UsuariosList;

