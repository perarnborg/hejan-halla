import { Dimensions } from 'react-native';
import SimpleTween from 'react-native-simple-tween';
const elementSize = 20;
const duration = 2000;

export function tweenCharacter(element) {
  if (!element) {
    return;
  }
  const windowWidth = Dimensions.get('window').width;
  const tweenX = new SimpleTween({ x: 0 - elementSize }, { x: windowWidth + elementSize }, duration);
  tweenX.setEasing(SimpleTween.Easing.Linear.None);
  tweenX.onUpdate((values) => {
    console.log('update values', values);
    if (!element.style) {
      return;
    }
    element.style.left = values.x;
  });
  const windowHeight = Dimensions.get('window').height;
  const toY = getRandomPercentage() * windowHeight;
  const tweenY = new SimpleTween({ y: 50 }, { y: toY }, duration);
  tweenY.setEasing(SimpleTween.Easing.Sinusoidal.Out);
  tweenY.onUpdate((values) => {
    if (!element.style) {
      return;
    }
    element.style.bottom = values.y;
  });
  tweenX.start();
  tweenY.start();
}

function getRandomPercentage() {
  return Math.floor(Math.random() * 51) + 50;
}
