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

const Screen03 = () => {
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
            <Image
              source={require("../assets/lock.png")}
              style={{ width: 150, height: 150 }}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.texts}> FORGET {"\n"} PASSWORD </Text>
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
              Provide your account's email for which you want to reset your
              password
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
            <View style={styles.inputRow}>
              <Image
                source={require("../assets/email.png")}
                style={styles.icon}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="black"
                style={styles.input}
              />
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.texts}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};
export default Screen03;
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
  inputRow: {
    flexDirection: "row",
    width: 350,
    alignItems: "center",
    width: 350,
    height: 60,
    backgroundColor: "lightgray",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: "lightgray",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: "contain",
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
});
