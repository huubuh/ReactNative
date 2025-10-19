import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  Alert,
} from "react-native";
import { useLocation, useNavigate } from "react-router-native";
import { createTask, updateTask } from "../api/tasks";
import type { NavState } from "../types";

const AddJob: React.FC = () => {
  const nav = useNavigate();
  const location = useLocation();
  const state = (location.state ?? {}) as NavState;
  const name = state?.name ?? "Guest";
  const editing = state?.edit;

  const [title, setTitle] = useState<string>(editing?.title ?? "");

  const save = async () => {
    if (!title.trim()) return;
    try {
      if (editing) {
        await updateTask(editing.id, { title });
      } else {
        await createTask({ title, done: false, userName: name });
      }
      nav("/home", { state: { name } as NavState });
    } catch {
      Alert.alert("Error", "Cannot save task right now.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.hi}>Hi {name}</Text>
          <Text style={styles.sub}>Have a great day ahead</Text>
        </View>
        <Pressable onPress={() => nav(-1)}>
          <Text style={{ fontSize: 18 }}>←</Text>
        </Pressable>
      </View>

      <Text style={styles.title}>
        {editing ? "EDIT YOUR JOB" : "ADD YOUR JOB"}
      </Text>

      <View style={styles.inputBox}>
        <Text style={styles.inputIcon}>🧾</Text>
        <TextInput
          placeholder="input your job"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
      </View>

      <Pressable onPress={() => void save()} style={styles.btn}>
        <Text style={styles.btnText}>{editing ? "SAVE" : "FINISH"} →</Text>
      </Pressable>

      <View style={{ alignItems: "center", marginTop: 24 }}>
        <Image
          source={require("../../assets/images/Image 95.png")}
          style={{ width: 180, height: 180, opacity: 0.9 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 18 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 12,
    gap: 12,
  },
  avatar: { width: 52, height: 52, borderRadius: 26 },
  hi: { fontSize: 20, fontWeight: "800", color: "#2f3948" },
  sub: { fontSize: 12, color: "#7b8596" },
  title: {
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 1,
    color: "black",
    marginTop: 8,
    marginBottom: 16,
    textAlign: "center",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d8dde6",
    paddingHorizontal: 12,
    borderRadius: 10,
    height: 46,
    marginVertical: 8,
  },
  inputIcon: { fontSize: 16, marginRight: 8 },
  input: { flex: 1, fontSize: 16 },
  btn: {
    marginTop: 14,
    backgroundColor: "#06b6d4",
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 24,
    alignSelf: "center",
    width: "70%",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "800",
    letterSpacing: 0.5,
    fontSize: 20,
  },
});

export default AddJob;
