import { Dimensions } from 'react-native';

const defaultCharacterWidth = 40;

export const CHARACTER_DURATION = 3000;

export function getCharacter() {
  const character = 'gubbe';
  return {
    name: character,
    width: defaultCharacterWidth,
    height: 31
  };
}

export function getCharacterX(character) {
  const characterWidth = character?.width || defaultCharacterWidth;
  return {
    start: 0 - characterWidth,
    stop: Dimensions.get('window').width + characterWidth
  };
}

export function getCharacterY() {
  const windowHeight = Dimensions.get('window').width;
  const stopY = getRandomInteger(50, 90);
  return {
    start: parseInt(windowHeight * 0.2, 10),
    stop: stopY
  };
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
