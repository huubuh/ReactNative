import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, FlatList, TouchableOpacity, Image,View  } from "react-native";
const BikeList = ({navigation}) =>{

const [data, setData] = useState([]);
const [filter, setFilter] = useState("All");
  useEffect(() => {
    fetch("https://67df90807635238f9aa9e8b6.mockapi.io/Bike")
      .then(res => res.json())
      .then(json => setData(json));
  }, []);
  const filteredData = filter === "All" ? data : data.filter(item => item.category === filter);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "800", color: "#FF3B30", marginBottom: 20 }}>
        The world’s Best Bike
      </Text>
 <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 20 }}>
        {["All", "Roadbike", "Mountain"].map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => setFilter(item)}
            style={{
              borderWidth: 1,
              borderColor: filter === item ? "#FF3B30" : "#ccc",
              backgroundColor: filter === item ? "#FFE6E6" : "#fff",
              borderRadius: 10,
              paddingVertical: 6,
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                color: filter === item ? "#FF3B30" : "#888",
                fontWeight: filter === item ? "700" : "400",
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
     <FlatList
        data={filteredData}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("BikeDetail", { bike: item })}
            style={{
              backgroundColor: "#FDF2EA",
              borderRadius: 16,
              padding: 12,
              marginBottom: 16,
              flex: 1,
              marginHorizontal: 4,
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowOffset: { width: 0, height: 4 },
              shadowRadius: 8,
              elevation: 2,
              justifyContent:"center",
              alignItems:"center"
            }}
          >
          <View style={{ position: "absolute", top: 10, left: 10 }}>
          <Image source={require("../assets/image/heart.png")} style={{ width: 20, height: 20 }} />
          </View>
            <Image
              source={{ uri: item.image }}
              style={{ width: "100%", height: 120, resizeMode: "contain" }}
            />
            <Text style={{ marginTop: 8, fontSize: 18, fontWeight: "600" }}>{item.name}</Text>
            <Text style={{ marginTop: 4, fontSize: 16 }}>
              <Text style={{ color: "#FFA552" }}>$ </Text>
              {item.price}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
export default BikeList;