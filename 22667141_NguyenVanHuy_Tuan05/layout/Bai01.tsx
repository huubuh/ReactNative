import { useState, useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Product from "../components/Product";
type ProductItem = {
  id: string;
  title: string;
  shop: string;
  image: string;
};
const Bai01 = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  useEffect(() => {
    fetch("https://67df90807635238f9aa9e8b6.mockapi.io/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <SafeAreaView style={style.container}>
        <View
          style={{
            backgroundColor: "#1ba9ff",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Image
            source={require("../assets/images/arrow-left-outlined.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={{ fontSize: 18, color: "white" }}>Chat</Text>
          <Image
            source={require("../assets/images/cart.png")}
            style={{ width: 30, height: 30 }}
          />
        </View>
        <Text style={{ padding: 20, backgroundColor: "lightgrey" }}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với Shop!
        </Text>
        <FlatList
          style={{ flex: 1, backgroundColor: "lightgrey" }}
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Product title={item.title} shop={item.shop} image={item.image} />
          )}
        />

        <View
          style={{
            backgroundColor: "#1ba9ff",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Image
            source={require("../assets/images/menu.png")}
            style={{ width: 30, height: 30 }}
          />
          <Image
            source={require("../assets/images/home.png")}
            style={{ width: 30, height: 30 }}
          />
          <Image
            source={require("../assets/images/back.png")}
            style={{ width: 30, height: 30 }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
export default Bai01;
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
