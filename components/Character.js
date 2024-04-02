import { Image } from 'expo-image';
import { forwardRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { useTween } from 'react-native-retween';

export default forwardRef(({ character = null, onPress }, ref) => {
  const { play, values, stop } = useTween(() => ({
    timing: {
      duration: 2000
    },
    from: {
      left: 20
    },
    to: {
      left: 400
    }
  }));

  useEffect(() => {
    if (character) {
      play();
    } else {
      stop();
    }

    return () => stop();
  }, [character]);

  return (
    <Animated.View style={[styles.container, values]} ref={ref}>
      {character && (
        <TouchableOpacity onPress={onPress}>
          <Image source={require(`../assets/characters/gubbe.svg`)} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 40,
    height: 40
  }
});
