// app/_layout.tsx
import { Stack } from "expo-router";
import { useEffect } from "react";
import { initDB } from "../database/db";

export default function RootLayout() {
  useEffect(() => {
    initDB();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="tasks" />
      <Stack.Screen name="add-task" />
    </Stack>
  );
}
