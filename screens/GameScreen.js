import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import react from 'react';

// exclude parameter so phone cant guess the correct number right at the start
function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  //round down then add min so lowest will still be the min

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <Text></Text>
      <View>
        <Text>Higher or Lower?</Text>
        {/* higher and lower buttons */}
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
