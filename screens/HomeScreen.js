import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';

export default function HomeScreen({ startGame }) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={startGame} text="En knapp" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
