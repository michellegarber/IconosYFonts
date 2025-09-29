import { StyleSheet, Text, View } from 'react-native';

export default function DisneyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla Disney con fuente DM Serif Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2AEBB', // Fondo de Disney
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'DMSerifText_400Regular',
    fontSize: 20,
    color: '#FFFFFF', // Texto blanco
  },
});
