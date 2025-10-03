import { StyleSheet, Text, View } from 'react-native';

export default function DisneyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla Disney con fuente Barriecito</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2AEBB', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Barriecito_400Regular', //Fuente implementada
    fontSize: 20,
    color: '#FFFFFF', 
  },
});
