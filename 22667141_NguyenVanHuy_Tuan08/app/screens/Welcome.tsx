import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { useNavigate } from "react-router-native";
import type { NavState } from "../types";

const Welcome: React.FC = () => {
  const [name, setName] = useState<string>("");
  const nav = useNavigate();

  const go = () => {
    if (!name.trim()) return;
    nav("/home", { state: { name } as NavState });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={require("../../assets/images/Image 95.png")}
          resizeMode="contain"
          style={styles.logoImg}
        />
      </View>

      <Text style={styles.title}>MANAGE YOUR{"\n"}TASK</Text>

      <View style={styles.inputBox}>
        <Text style={styles.inputIcon}>✉️</Text>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
      </View>

      <Pressable onPress={go} style={styles.btn}>
        <Text style={styles.btnText}>GET STARTED →</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logoBox: {
    width: 260,
    height: 260,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 8,
    marginBottom: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImg: { width: "95%", height: "95%" },
  title: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "900",
    color: "#7d5fff",
    marginBottom: 24,
    letterSpacing: 1,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d8dde6",
    paddingHorizontal: 12,
    borderRadius: 12,
    height: 46,
    width: "100%",
    marginBottom: 18,
  },
  inputIcon: { fontSize: 16, marginRight: 8 },
  input: { flex: 1, fontSize: 16 },
  btn: {
    marginTop: 6,
    backgroundColor: "#06b6d4",
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 24,
    alignSelf: "center",
    width: "70%",
    alignItems: "center",
  },
  btnText: { color: "#fff", fontWeight: "800", letterSpacing: 0.5 },
});

export default Welcome;
