import { View, Image, StyleSheet, Text } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../utils/colors';

function GameOverScreen({ roundsNumber, userNumber, startNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title> GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/gameover.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your number is <Text style={styles.highlight}>{userNumber}</Text> and it
        took your phone <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the right number
      </Text>
      <PrimaryButton onPress={startNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary800,
  },
});
