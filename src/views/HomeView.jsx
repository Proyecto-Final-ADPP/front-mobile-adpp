import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
import { View } from 'react-native';
import { useState } from 'react';

const CosoHome = () => {

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (

      
    <Appbar.Header>
        <PaperProvider>
            <View>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} /> }>
                    <Menu.Item onPress={() => {}} title="Pozo 1" />
                    <Menu.Item onPress={() => {}} title="Pozo 2" />
                    <Divider />
                    <Menu.Item onPress={() => {}} title="Cerrar Sesión" />
                </Menu>
            </View>
       </PaperProvider>

        <Searchbar
        iconColor= '#165589'
        placeholder="Buscar"
        />
    </Appbar.Header>
  );
};

export default CosoHome;