import { Image } from 'expo-image';
import { forwardRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing } from 'react-native-reanimated';

export default forwardRef(({ character = null, onPress }, ref) => {
  const config = {
    duration: 2000
  };

  const characterX = useSharedValue(0);

  const characterStyleX = useAnimatedStyle(() => {
    return {
      left: withTiming(characterX.value, config)
    };
  });

  useEffect(() => {
    if (character) {
      characterX.value = 400;
    } else {
      characterX.value = 0;
    }

    return () => (characterX.value = 0);
  }, [character]);

  return (
    <Animated.View style={[styles.container, characterStyleX]} ref={ref}>
      {character && (
        <TouchableOpacity onPress={onPress}>
          <Image source={require(`../assets/characters/gubbe.svg`)} style={{ width: 40, height: 31 }} />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 40,
    height: 31
  }
});
