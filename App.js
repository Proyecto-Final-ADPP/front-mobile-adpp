import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/views/HomeView';
import LoginForm from './src/views/LoginView';
import AdminUsers from './src/views/UsersView';

export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Navigator>
        <Screen name="Login" component={LoginForm} options={{ title: 'Login', headerShown: false}} />
        <Screen name="Home" component={Home} options={{ title: 'Inicio' }} />
        <Screen name="Users" component={AdminUsers} options={{ title: 'Panel de Usuarios'}} />
      </Navigator>
    </NavigationContainer>
  );
}
