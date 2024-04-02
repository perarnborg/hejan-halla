import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import HomeSceen from './screens/HomeScreen';
import GameSceen from './screens/GameScreen';

export default function App() {
  const [screen, setScreen] = useState('home');
  return (
    <>
      {screen === 'home' && <HomeSceen startGame={() => setScreen('game')} />}
      {screen === 'game' && <GameSceen goBack={() => setScreen('home')} />}
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
