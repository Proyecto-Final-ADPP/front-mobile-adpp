import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/views/HomeView';
import LoginForm from './src/views/LoginView';
import AdminUsers from './src/views/UsersView';
import AdminPozos from './src/views/PozosView';
import PozoInfo from './src/views/PozoInfoView';
import RegisterUsers from './src/views/RegisterUserView';
import RegisterPozos from './src/views/RegisterPozoView';
import FormProductores from './src/views/FormProductorView';
import FormInyectores from './src/views/FormInyectorView';

export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Navigator>
        <Screen name="Login" component={LoginForm} options={{ title: 'Login', headerShown: false}} />
        <Screen name="Home" component={Home} options={{ title: 'Inicio' }} />
        <Screen name="Users" component={AdminUsers} options={{ title: 'Panel de Usuarios'}} />
        <Screen name="RegistroUsers" component={RegisterUsers} options={{ title: 'Registro de Usuario'}} />
        <Screen name="Pozo" component={AdminPozos} options={{ title: 'Administracion de Pozos'}} />
        <Screen name="RegistroPozos" component={RegisterPozos} options={{ title: 'Registro de Pozo'}} />
        <Screen name="InfoPozo" component={PozoInfo} options={{ title: 'Info Pozos'}} />
        <Screen name="FormProd" component={FormProductores} options={{ title: 'Carga de Datos Pozo Productor'}} />
        <Screen name="FormIny" component={FormInyectores} options={{ title: 'Carga de Datos Pozo Inyector'}} />
      </Navigator>
    </NavigationContainer>
  );
}
