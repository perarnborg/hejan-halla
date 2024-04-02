import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect, useRef } from 'react';

// import { tweenCharacter } from '../services/characher-service';
import Character from '../components/Character';

let characterTimeout;

export default function GameScreen({ goBack }) {
  const [character, setCharacter] = useState(null);
  const characterRef = useRef(null);

  useEffect(() => {
    clearTimeout(characterTimeout);
    characterTimeout = setTimeout(enterNewCharacter, 1000);
    return () => clearTimeout(characterTimeout);
  }, [characterRef]);

  function enterNewCharacter() {
    setCharacter('gubbe');
    console.log(characterRef.current);
    characterTimeout = setTimeout(exitCharacter, 2000);
  }

  function exitCharacter() {
    setCharacter(null);
    characterTimeout = setTimeout(enterNewCharacter, 1000);
  }

  function pressCharacter() {
    console.log('press character');
    exitCharacter();
    clearTimeout(characterTimeout);
  }

  return (
    <View style={styles.container}>
      <Character character={character} ref={characterRef} onPress={pressCharacter} />
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
