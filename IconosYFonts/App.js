import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import { Ionicons } from 'react-native-vector-icons'; // Necesario para los iconos

// Fuentes
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Barriecito_400Regular } from '@expo-google-fonts/barriecito';
import { NunitoSans_400Regular } from '@expo-google-fonts/nunito-sans';  // Fuente similar a Geo
import { DMSerifText_400Regular } from '@expo-google-fonts/dm-serif-text';

// Pantallas
import RoboticaScreen from './screens/RoboticaScreen';
import DisneyScreen from './screens/DisneyScreen';
import AstetikScreen from './screens/AstetikScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Barriecito_400Regular,
    NunitoSans_400Regular,  // Cargamos la fuente de Robótica
    DMSerifText_400Regular,  // Cargamos la fuente de AsteTik
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* Pantalla de Robótica */}
        <Tab.Screen
          name="Robótica"
          component={RoboticaScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="smartphone" size={size} color={color} />
            ),
          }}
        />

        {/* Pantalla de Disney */}
        <Tab.Screen
          name="Disney"
          component={DisneyScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        {/* Pantalla de AsteTik */}
        <Tab.Screen
          name="AsteTik"
          component={AstetikScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="brush" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
