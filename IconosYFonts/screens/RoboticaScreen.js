import { StyleSheet, Text, View } from 'react-native';

export default function RoboticaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla Robótica con fuente Nunito Sans</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C467B', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'NunitoSans_400Regular', //Fuente implementada
    fontSize: 20,
    color: '#FFFFFF',
  },
});
