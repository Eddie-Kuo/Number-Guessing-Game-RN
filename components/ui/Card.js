import { View, StyleSheet } from 'react-native';
import Colors from '../../utils/colors';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}
export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    // how to create box shadow on ios devices
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
