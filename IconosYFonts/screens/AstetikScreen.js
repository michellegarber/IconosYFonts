import { StyleSheet, Text, View } from 'react-native';

export default function AstetikScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla AsteTik con fuente DM Serif Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B8C4A9', // Fondo de AsteTik
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'DMSerifText_400Regular',
    fontSize: 20,
    color: '#FFFFFF', // Texto blanco
  },
});
