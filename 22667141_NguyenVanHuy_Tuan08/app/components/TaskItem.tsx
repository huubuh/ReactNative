import React, { memo } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import type { Task } from "../types";

interface Props {
  item: Task;
  onToggle: (item: Task) => void;
  onEdit: (item: Task) => void;
  onDelete: (item: Task) => void;
}

const TaskItem: React.FC<Props> = ({ item, onToggle, onEdit, onDelete }) => {
  return (
    <View style={styles.row}>
      <Pressable onPress={() => onToggle(item)} style={styles.left}>
        <View style={[styles.checkbox, item.done && styles.checkboxDone]} />
        <Text
          style={[styles.title, item.done && styles.titleDone]}
          numberOfLines={1}
        >
          {item.title}
        </Text>
      </Pressable>

      <View style={styles.actions}>
        <Pressable onPress={() => onEdit(item)} style={styles.iconBtn}>
          <Text style={styles.icon}>✏️</Text>
        </Pressable>
        <Pressable onPress={() => onDelete(item)} style={styles.iconBtn}>
          <Text style={styles.icon}>🗑️</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eef1f4",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 2,
  },
  left: { flex: 1, flexDirection: "row", alignItems: "center", gap: 10 },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#6ad39d",
    backgroundColor: "transparent",
  },
  checkboxDone: { backgroundColor: "#6ad39d" },
  title: { fontSize: 16, color: "#2d3340", fontWeight: "600" },
  titleDone: { textDecorationLine: "line-through", color: "#8a93a3" },
  actions: { flexDirection: "row", gap: 10, marginLeft: 12 },
  iconBtn: { padding: 6, borderRadius: 10, backgroundColor: "#ffffffcc" },
  icon: { fontSize: 16 },
});

export default memo(TaskItem);
