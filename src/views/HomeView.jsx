import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { Menu, Divider, PaperProvider, SegmentedButtons } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

const CosoHome = () => {

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (

    <PaperProvider>
      <Appbar.Header mode='center-aligned'>
        <Appbar.Content title="Bienvenid@" />
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} /> }>
            <Menu.Item onPress={() => {}} title="Pozo 1" />
            <Menu.Item onPress={() => {}} title="Pozo 2" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Cerrar Sesión" />
        </Menu>
      </Appbar.Header>
      <Searchbar
      iconColor= '#165589'
      placeholder="Buscar"
      />

      <View style={styles.space}></View>

      <SegmentedButtons
        buttons={[
          {
            //value: 'productor',
            label: 'Productores',
          },
          {
            //value: 'inyector',
            label: 'Inyectores',
          },
        ]}
      />

    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  space: {
    height: 10,
  },
});

export default CosoHome;