import React, { useEffect, useMemo, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, Product } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "SelectColor">;

export default function SelectColor({ route, navigation }: Props) {
  const { selectedId } = route.params;

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedVariantId, setSelectedVariantId] = useState<
    string | undefined
  >(selectedId);

  useEffect(() => {
    fetch("https://67df90807635238f9aa9e8b6.mockapi.io/products")
      .then((r) => r.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  const product = useMemo(
    () =>
      products.find((p) => p.id === (selectedVariantId ?? selectedId)) ??
      products[0],
    [products, selectedVariantId, selectedId]
  );

  const colors = ["blue", "red", "black", "silver"];

  const pick = (c: string) => {
    const v = products.find(
      (p) => (p.color || "").toLowerCase() === c.toLowerCase()
    );
    if (v) setSelectedVariantId(v.id);
  };

  const done = () => {
    if (!selectedVariantId) return;
    navigation.navigate({
      name: "ProductDetails",
      params: { selectedId: selectedVariantId },
      merge: true,
    });
  };

  return (
    <View style={s.container}>
      {product && (
        <View
          style={{ padding: 12, backgroundColor: "#fff", flexDirection: "row" }}
        >
          {product.image ? (
            <Image
              source={{ uri: product.image }}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
          ) : null}
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 8 }}>
              {product.name}
            </Text>
            <Text>Màu: {product.color}</Text>
            <Text style={{ fontSize: 18, fontWeight: "700", marginTop: 4 }}>
              {product.price}
            </Text>
          </View>
        </View>
      )}

      <Text style={{ fontSize: 16, fontWeight: "700", margin: 12 }}>
        Chọn một màu bên dưới :
      </Text>

      <View style={{ gap: 14, alignItems: "center" }}>
        {colors.map((c) => (
          <TouchableOpacity
            key={c}
            style={[
              s.colorBox,
              { backgroundColor: mapColor(c) },
              products
                .find((p) => p.id === selectedVariantId)
                ?.color?.toLowerCase() === c && s.active,
            ]}
            onPress={() => pick(c)}
          />
        ))}
      </View>

      <View style={{ padding: 12, marginTop: "auto" }}>
        <TouchableOpacity style={s.doneBtn} onPress={done}>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>
            XONG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function mapColor(c: string) {
  switch (c.toLowerCase()) {
    case "red":
      return "red";
    case "black":
      return "black";
    case "blue":
      return "#1f48a8";
    case "silver":
      return "#cfefff";
    default:
      return "#ddd";
  }
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eee" },
  colorBox: {
    width: 110,
    height: 60,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#bbb",
  },
  active: { borderColor: "#3a6ae0", borderWidth: 3 },
  doneBtn: {
    backgroundColor: "#4663d8",
    height: 46,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
