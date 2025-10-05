import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
const BikeDetail = ({route }) =>{
const { bike } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <View style={{ backgroundColor: "#FFE1E6", borderRadius: 16, alignItems: "center", padding: 16 }}>
        <Image
          source={{ uri: bike.image }}
          style={{ width: "100%", height: 250, resizeMode: "contain", borderRadius: 12 }}
        />
      </View>

      <Text style={{ fontSize: 32, fontWeight: "800", marginTop: 16 }}>{bike.name}</Text>
      <View style={{flexDirection:"row",gap:20}}>
      <Text style={{ fontSize: 20, color: "#999", marginTop: 8 }}>${bike.discount}</Text>
       <Text style={{ fontSize: 20,textDecorationLine :"line-through", marginTop: 8 }}>${bike.price}</Text>
       </View>
      

      <Text style={{ fontSize: 20, fontWeight: "700", marginTop: 20 }}>Description</Text>
      <Text style={{ fontSize: 16, color: "#666", lineHeight: 24, marginTop: 8 }}>
       ${bike.description}
      </Text>

      <TouchableOpacity
        style={{
          position: "absolute",
          left: 20,
          right: 20,
          bottom: 24,
          height: 60,
          borderRadius: 30,
          backgroundColor: "#EE4D4D",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>Add to cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default BikeDetail;