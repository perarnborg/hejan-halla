import { Image } from 'expo-image';
import { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing } from 'react-native-reanimated';

import { getCharacterX, getCharacterY, CHARACTER_DURATION } from '../services/characher-service';

export default ({ character = null, onPress }) => {
  const config = {
    duration: CHARACTER_DURATION
  };

  const characterX = useSharedValue(0);

  const characterStyleX = useAnimatedStyle(() => {
    return {
      left: withTiming(characterX.value, config)
    };
  });

  useEffect(() => {
    const x = getCharacterX(character);
    if (character) {
      characterX.value = x.stop;
    } else {
      characterX.value = x.start;
    }

    return () => (characterX.value = x.start);
  }, [character]);

  return (
    <Animated.View style={[styles.container, characterStyleX]}>
      {character && (
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require('../assets/characters/gubbe.svg')}
            style={{ width: character.width, height: character.height }}
          />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 40,
    height: 31
  }
});
