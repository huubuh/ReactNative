import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
const Start = ({ navigation }) => {
  return (
    <>
      <View style={style.container}>
        <View
          style={{
            height: "10%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
              width: "55%",
            }}
          >
            A premium online store for sporter and their stylish choice
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f8e6e5",
            borderRadius: 50,
            margin: 10,
            height: "50%",
          }}
        >
          <View style={{ padding: 50, aspectRatio: 1.1 }}>
            <Image
              source={require("../assets/image/bifour_-removebg-preview.png")}
              style={{ width: 200, height: 200, resizeMode: "contain" }}
            />{" "}
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              width: "40%",
              textAlign: "center",
            }}
          >
            POWER BIKE SHOP
          </Text>{" "}
        </View>

        <View style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              margin: 20,
              borderRadius: 40,
              height: 70,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("BikeList")}
          >
            <Text style={{ color: "white", fontSize: 28 }}>Get Started</Text>{" "}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default Start;
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
