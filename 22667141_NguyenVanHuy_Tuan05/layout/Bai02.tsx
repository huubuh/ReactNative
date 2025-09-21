import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type Product = {
  id: string;
  title: string;
  rate: string;
  price: string;
  discount: string;
  image: string;
};
const Bai02 = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://67df90807635238f9aa9e8b6.mockapi.io/products")
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
          <View
            style={{
              backgroundColor: "white",
              width: "60%",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 10,
            }}
          >
            <Image source={require("../assets/images/whh_magnifier.png")} />
            <TextInput
              placeholder="Dây cáp usb"
              placeholderTextColor={"gray"}
            />
          </View>

          <Image
            source={require("../assets/images/bi_cart-check.png")}
            style={{ width: 30, height: 30 }}
          />
          <Image source={require("../assets/images/Group 2.png")} />
        </View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={2}
          key={2}
          renderItem={({ item }) => (
            <View style={{ flex: 1, margin: 20 }}>
              <View>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: 110, resizeMode: "cover" }}
                />
              </View>
              <View>
                <Text>{item.title}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={{ uri: item.rate }}
                    style={{ width: 70, height: 14 }}
                  />
                  <Text>(15)</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 20 }}>
                  <Text style={{ fontWeight: "bold" }}>{item.price}</Text>
                  <Text style={{ color: "grey" }}>{item.discount}</Text>
                </View>
              </View>
            </View>
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
export default Bai02;
const style = StyleSheet.create({
  container: { flex: 1 },
});
