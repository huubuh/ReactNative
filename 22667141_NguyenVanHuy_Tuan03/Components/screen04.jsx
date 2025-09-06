import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen04 = () => {
  return (
    <>
      <LinearGradient
        colors={["#d7f7f9", "#d7f7f9", "#00c6ff"]}
        locations={[0, 0.8, 1]} // 70% trên nhạt, 30% dưới đậm
        style={[styles.container]}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 70 }}>CODE</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.texts}> VERIFICATION </Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
                padding: 10,
              }}
            >
              Enter ontime password sent on ++849092605798
            </Text>
          </View>
          <View
            style={{
              flex: 3,
              gap: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.otpRow}>
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <TextInput
                    key={i}
                    maxLength={1}
                    keyboardType="number-pad"
                    style={styles.otpInput}
                  />
                ))}
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.texts}>VERIFY CODE</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};
export default Screen04;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: "#e3c000",
    borderColor: "#e3c000",
    width: 350,
  },
  texts: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  otpInput: {
    width: 50,
    height: 50,

    borderWidth: 1,
    borderColor: "black",
    textAlign: "center", // chữ số căn giữa
    fontSize: 20,
  },
});
