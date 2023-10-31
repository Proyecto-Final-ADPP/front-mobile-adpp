import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CosoHome from './src/views/HomeView';
import LoginForm from './src/views/LoginView';

export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Navigator>
        <Screen name="Login" component={LoginForm} options={{ title: 'Login', headerShown: false}} />
        <Screen name="Home" component={CosoHome} options={{ title: 'Inicio' }} />
      </Navigator>
    </NavigationContainer>
  );
}
