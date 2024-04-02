import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

import { getCharacter, CHARACTER_DURATION } from '../services/characher-service';
import Character from '../components/Character';
import Button from '../components/Button';

let characterTimeout;

export default function GameScreen({ goBack }) {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    clearTimeout(characterTimeout);
    characterTimeout = setTimeout(enterNewCharacter, CHARACTER_DURATION);
    return () => clearTimeout(characterTimeout);
  }, []);

  function enterNewCharacter() {
    setCharacter(getCharacter());
    characterTimeout = setTimeout(exitCharacter, CHARACTER_DURATION);
  }

  function exitCharacter() {
    setCharacter(null);
    characterTimeout = setTimeout(enterNewCharacter, CHARACTER_DURATION);
  }

  function pressCharacter() {
    console.log('press character');
    exitCharacter();
    clearTimeout(characterTimeout);
  }

  return (
    <View style={styles.container}>
      <Character character={character} onPress={pressCharacter} />
      <Text>A game is active!</Text>
      <Button onPress={goBack} text="Tillbaka" />
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
