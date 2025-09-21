import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
type Props = {
  title: string;
  shop: string;
  image: string;
};
const Product = ({ title, shop, image }: Props) => {
  return (
    <>
      <View style={style.container}>
        <Image source={{ uri: image }} style={{ height: 100, width: 100 }} />
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 18 }}> {title}</Text>
          <Text style={{ fontSize: 16 }}>Shop :{shop}</Text>
        </View>
        <TouchableOpacity style={style.button}>
          <Text style={{ color: "white", fontSize: 16 }}>Chat</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default Product;
const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderTopWidth: 1,
    borderColor: "grey",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    width: 80,
    height: 50,
  },
});
