// database/db.ts
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("tasks.db");

// Khởi tạo database
export const initDB = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      completed INTEGER DEFAULT 0
    );
  `);
};

// Thêm task
export const addTask = (title: string) => {
  db.runSync("INSERT INTO tasks (title) VALUES (?)", [title]);
};

// Lấy tất cả tasks
export const getTasks = () => {
  return db.getAllSync("SELECT * FROM tasks ORDER BY id DESC");
};

// Toggle complete
export const toggleTask = (id: number, completed: number) => {
  db.runSync("UPDATE tasks SET completed = ? WHERE id = ?", [
    completed ? 0 : 1,
    id,
  ]);
};

// Update task
export const updateTask = (id: number, title: string) => {
  db.runSync("UPDATE tasks SET title = ? WHERE id = ?", [title, id]);
};

// Xóa task
export const deleteTask = (id: number) => {
  db.runSync("DELETE FROM tasks WHERE id = ?", [id]);
};
