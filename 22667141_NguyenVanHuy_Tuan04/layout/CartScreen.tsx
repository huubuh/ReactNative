import { StyleSheet, View } from "react-native";
import CartItem from "../components/CartItem";
import Discount from "../components/Discount";
import GiftVoucher from "../components/GiftVoucher";
import PriceRow from "../components/PriceRow";
import CheckOut from "../components/CheckOut";

const CartScreen = () => {
  return (
      <View style={styles.container}>
        <View style={{flex:1}}>
        <CartItem />
        <Discount />
        <GiftVoucher />
        <PriceRow/>
        </View>
      <CheckOut />
      </View>
 
  );
};
export default CartScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
});
