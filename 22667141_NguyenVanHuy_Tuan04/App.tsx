
import { StyleSheet, Text, View } from 'react-native';
import CartScreen from './layout/CartScreen';
import PassWordGN from './layout/PassWordGN';

export default function App() {
  return (
    
    <View style={styles.container}>
     {/* <CartScreen/> */}
     <PassWordGN/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
