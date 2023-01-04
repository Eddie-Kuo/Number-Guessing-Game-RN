import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../utils/colors';

function PrimaryButton({ children, onPress }) {
  return (
    // when building custom buttons managing multiple button containers allows for more customization and button pressing feedback without it looking weird or affecting other components since styles are not cascading - they're all separate

    // pressed property - boolean true if button is being pressed
    <View style={styles.buttonOutterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
