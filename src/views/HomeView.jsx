import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Searchbar, Icon } from 'react-native-paper';
import { Menu, Divider, PaperProvider, SegmentedButtons } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import CardPozo from '../components/CardPozo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AdminUsers from './UsersView';
import TablaUsuarios from '../components/TablaUsuarios';

const Home = ({ navigation }) => {

  const [visible, setVisible] = useState(false);

  const [value, setValue] = useState('');

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const navigateUsers = () => {
    navigation.navigate('Users');
  }
  const navigatePozos = () => {
    navigation.navigate('Pozo');
  }

  const Tab = createBottomTabNavigator();

  return (
    <PaperProvider>
      <Appbar.Header mode='center-aligned'>
        <Appbar.Content title="Bienvenid@" />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}>
          <Menu.Item onPress={navigateUsers} title="Administrar Usuarios" />
          <Menu.Item onPress={navigatePozos} title="Administrar Pozos" />
          <Divider />
          <Menu.Item onPress={() => { }} title="Cerrar Sesión" />
        </Menu>
      </Appbar.Header>
      <View style={styles.space}></View>

      <View style={{ padding: 20 }}>

        <Searchbar
          iconColor='#165589'
          placeholder="Buscar"
        />

        <View style={styles.space}></View>

        <SegmentedButtons onPress={() => console.log('Pressed')}
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: 'todos',
              label: 'Todos',
            },
            {
              Value: 'productor',
              label: 'Productores',
            },
            {
              value: 'inyector',
              label: 'Inyectores',
            }
            
          ]}
        />

        <CardPozo  navigation={navigation}/>
        <CardPozo navigation={navigation}/>

        {/* <Tab.Navigator>
        <Tab.Screen name="Panel Usuarios" component={AdminUsers}  options={{
          tabBarLabel: 'Panel Usuarios',
          tabBarIcon: ({ color, size }) => {
            return <Icon name='home' size={size} color={color} />;
          },
        }}
      />
        <Tab.Screen name="Settings" component={AdminUsers} options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
        />
      </Tab.Navigator> */}
      </View>

    </PaperProvider>

  );
};

const styles = StyleSheet.create({
  space: {
    height: 10,
  },
});

export default Home;