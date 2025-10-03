import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';   //Import libreria de fonts
import { Ionicons } from '@expo/vector-icons';   //Import libreria de icons

// Fuentes que vamos a usar
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Barriecito_400Regular } from '@expo-google-fonts/barriecito';
import { NunitoSans_400Regular } from '@expo-google-fonts/nunito-sans';  
import { DMSerifText_400Regular } from '@expo-google-fonts/dm-serif-text';

// Pantallas
import RoboticaScreen from './screens/RoboticaScreen';
import DisneyScreen from './screens/DisneyScreen';
import AstetikScreen from './screens/AstetikScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({ //Cargamos las fuentes de todas las screens
    Roboto_400Regular,
    Barriecito_400Regular,  
    NunitoSans_400Regular,  
    DMSerifText_400Regular,  
  });

  if (!fontsLoaded) return null; 

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, 
        }}
      >
        {/* Pantalla de Robótica */}
        <Tab.Screen
          name="Robótica"
          component={RoboticaScreen}
          options={{
            tabBarIcon: ({ color, size }) => ( 
              <Ionicons name="game-controller-outline" size={size} color={color} /> //Icon robotica (control de play)
            ),
          }}
        />

        {/* Pantalla de Disney */}
        <Tab.Screen
          name="Disney"
          component={DisneyScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="flower-outline" size={size} color={color} /> //Icon disney (flor)
            ),
          }}
        />

        {/* Pantalla de AsteTik */}
        <Tab.Screen
          name="AsteTik"
          component={AstetikScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="brush" size={size} color={color} /> //Icon astetik pincel)
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
