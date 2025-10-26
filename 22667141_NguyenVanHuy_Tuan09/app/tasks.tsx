// app/tasks.tsx
import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter, useLocalSearchParams, useFocusEffect } from "expo-router";
import { getTasks, toggleTask, deleteTask, updateTask } from "../database/db";
import { useCallback } from "react";

export default function Tasks() {
  const router = useRouter();
  const { name } = useLocalSearchParams();
  const [tasks, setTasks] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const loadTasks = () => {
    setTasks(getTasks());
  };

  useEffect(() => {
    loadTasks();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTasks();
    }, [])
  );

  const handleToggle = (task: any) => {
    toggleTask(task.id, task.completed);
    loadTasks();
  };

  const handleEdit = (task: any) => {
    Alert.prompt(
      "Edit Task",
      "Update task title",
      (text) => {
        if (text?.trim()) {
          updateTask(task.id, text.trim());
          loadTasks();
        }
      },
      "plain-text",
      task.title
    );
  };

  const handleDelete = (id: number) => {
    Alert.alert("Delete", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          deleteTask(id);
          loadTasks();
        },
      },
    ]);
  };

  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <View style={styles.avatar} />
          <View>
            <Text style={styles.greeting}>Hi {name}</Text>
            <Text style={styles.subtitle}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      {/* Search */}
      <TextInput
        style={styles.search}
        placeholder="🔍 Search"
        value={search}
        onChangeText={setSearch}
      />

      {/* Task List */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <TouchableOpacity onPress={() => handleToggle(item)}>
              <View style={[styles.checkbox, item.completed && styles.checked]}>
                {item.completed ? <Text style={styles.check}>✓</Text> : null}
              </View>
            </TouchableOpacity>

            <Text style={[styles.taskText, item.completed && styles.done]}>
              {item.title}
            </Text>

            <View style={styles.actions}>
              <TouchableOpacity
                style={[styles.btn, { backgroundColor: "#F44336" }]}
                onPress={() => handleDelete(item.id)}
              >
                <Text>🗑️</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, { backgroundColor: "#FF9800" }]}
                onPress={() => handleEdit(item)}
              >
                <Text>✏️</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No tasks yet. Tap + to add one!</Text>
        }
      />

      {/* Add Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/add-task")}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  back: {
    fontSize: 28,
    marginRight: 20,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#9C27B0",
    marginRight: 15,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  search: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#4CAF50",
    borderRadius: 4,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: "#4CAF50",
  },
  check: {
    color: "#fff",
    fontWeight: "bold",
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  done: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  actions: {
    flexDirection: "row",
    gap: 5,
  },
  btn: {
    width: 35,
    height: 35,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  empty: {
    textAlign: "center",
    color: "#999",
    marginTop: 50,
    fontSize: 16,
  },
  fab: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#00BCD4",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  fabText: {
    fontSize: 32,
    color: "#fff",
  },
});
