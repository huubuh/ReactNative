// app/index.tsx
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

export default function Welcome() {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Image 95.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>MANAGE YOUR{"\n"}TASK</Text>

      <TextInput
        style={styles.input}
        placeholder="✉️ Enter your name"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity
        style={[styles.button, !name && styles.buttonDisabled]}
        onPress={() => router.push({ pathname: "/tasks", params: { name } })}
        disabled={!name}
      >
        <Text style={styles.buttonText}>GET STARTED </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#9C27B0",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#00BCD4",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
