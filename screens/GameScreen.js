import { StyleSheet, Text, View } from 'react-native';

export default function GameScreen({ goBack }) {
  return (
    <View style={styles.container}>
      <Text>A game is active!</Text>
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
