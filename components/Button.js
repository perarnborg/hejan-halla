import { StyleSheet, Text, View, Button } from 'react-native';

export default function ButtonComponent({ text, onPress = () => {} }) {
  return <Button style={styles.button} onPress={onPress} title={text} />;
}

const styles = StyleSheet.create({
  button: {}
});
