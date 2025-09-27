import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Product, RootStackParamList } from "../App";
import { useEffect, useMemo, useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "ProductDetails">;
const productDetails = ({ route, navigation }: Props) => {
  const [products, setProdcuts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://67df90807635238f9aa9e8b6.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => setProdcuts(data));
  }, []);
  const selectedId = route.params?.selectedId ?? products[0]?.id;
  const product = useMemo(
    () => products.find((p) => p.id == selectedId) ?? products[0],
    [products, selectedId]
  );

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Không có sản phẩm nào</Text>
      </View>
    );
  }
  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={{ uri: product.image }}
              style={{ height: 400, width: 300 }}
              resizeMode="contain"
            />

            <Text style={{ fontSize: 18 }}>{product.name}</Text>
          </View>
          <View style={{ flexDirection: "row", padding: 20, gap: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <Image source={require("../assets/star.png")} />
              <Image source={require("../assets/star.png")} />
              <Image source={require("../assets/star.png")} />
              <Image source={require("../assets/star.png")} />
              <Image source={require("../assets/star.png")} />
            </View>
            <Text>(Xem {product.rate} đánh giá)</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              paddingLeft: 20,
              paddingBottom: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {product.price}
            </Text>
            <Text style={{ textDecorationLine: "line-through" }}>
              {product.price}
            </Text>
          </View>
          <View style={{ flexDirection: "row", paddingLeft: 20 }}>
            <Text style={{ color: "red" }}> Ở ĐÂU RẺ HƠN HOÀN TIỀN </Text>
            <Image source={require("../assets/Group 1.png")} />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 20,
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 1,
                width: "90%",
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
              onPress={() =>
                navigation.navigate("SelectColor", { selectedId: product.id })
              }
            >
              <Text>4 MÀU-CHỌN MÀU</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              width: "90%",
              backgroundColor: "red",
              height: 50,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              CHỌN MUA
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default productDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
