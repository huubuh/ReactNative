import React, { useEffect, useMemo, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import { useLocation, useNavigate } from "react-router-native";
import TaskItem from "../components/TaskItem";
import { getTasks, updateTask, deleteTask } from "../api/tasks";
import type { Task, NavState } from "../types";

const Home: React.FC = () => {
  const nav = useNavigate();
  const location = useLocation();
  const state = (location.state ?? {}) as NavState;
  const name = state?.name ?? "Guest";

  const [q, setQ] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getTasks(name, q);
      setTasks([...data].sort((a, b) => Number(a.done) - Number(b.done)));
    } finally {
      setLoading(false);
    }
  }, [name, q]);

  useEffect(() => {
    void load();
  }, [load]);

  const toggle = async (item: Task) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === item.id ? { ...t, done: !t.done } : t))
    );
    try {
      await updateTask(item.id, { done: !item.done });
    } catch {}
  };

  const onEdit = (item: Task) =>
    nav("/add", { state: { name, edit: item } as NavState });
  const onDelete = async (item: Task) => {
    setTasks((prev) => prev.filter((t) => t.id !== item.id));
    try {
      await deleteTask(item.id);
    } catch {}
  };

  const header = useMemo(
    () => (
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
    ),
    [name]
  );

  return (
    <View style={styles.container}>
      {header}

      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔎</Text>
        <TextInput
          placeholder="Search"
          value={q}
          onChangeText={setQ}
          onSubmitEditing={() => void load()}
          style={styles.searchInput}
          returnKeyType="search"
        />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(it) => it.id}
        refreshing={loading}
        onRefresh={() => void load()}
        renderItem={({ item }) => (
          <TaskItem
            item={item}
            onToggle={toggle}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )}
        contentContainerStyle={{ paddingTop: 8, paddingBottom: 100 }}
      />

      <Pressable
        style={styles.fab}
        onPress={() => nav("/add", { state: { name } as NavState })}
      >
        <Text style={styles.fabText}>＋</Text>
      </Pressable>
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
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d8dde6",
    paddingHorizontal: 12,
    borderRadius: 10,
    height: 44,
    marginVertical: 6,
  },
  searchIcon: { fontSize: 16, marginRight: 8 },
  searchInput: { flex: 1, fontSize: 16 },
  fab: {
    position: "absolute",
    bottom: 24,
    alignSelf: "center",
    backgroundColor: "#06b6d4",
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  fabText: { color: "#fff", fontSize: 32, fontWeight: "600", lineHeight: 36 },
});

export default Home;
