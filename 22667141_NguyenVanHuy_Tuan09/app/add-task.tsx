// app/add-task.tsx
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
import { addTask } from "../database/db";

export default function AddTask() {
  const router = useRouter();
  const [taskTitle, setTaskTitle] = useState("");

  const handleFinish = () => {
    if (taskTitle.trim()) {
      addTask(taskTitle.trim());
      router.back(); // Quay lại màn task list
    }
  };

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>ADD YOUR TASK</Text>

      <TextInput
        style={styles.input}
        placeholder="📋 Input your task"
        value={taskTitle}
        onChangeText={setTaskTitle}
        autoFocus
      />

      <TouchableOpacity
        style={[styles.button, !taskTitle && styles.buttonDisabled]}
        onPress={handleFinish}
        disabled={!taskTitle}
      >
        <Text style={styles.buttonText}>FINISH →</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Image 95.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  backText: {
    fontSize: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
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
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});
