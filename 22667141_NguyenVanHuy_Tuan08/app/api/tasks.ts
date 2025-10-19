import axios from "axios";
import type { Task } from "../types";

const http = axios.create({
  baseURL: "https://67df90807635238f9aa9e8b6.mockapi.io",
});

export async function getTasks(userName: string, q = ""): Promise<Task[]> {
  const { data } = await http.get<Task[]>("/task", { params: { userName } });
  const list = data ?? [];

  return q
    ? list.filter((t) => t.title.toLowerCase().includes(q.toLowerCase()))
    : list;
}

export async function createTask(payload: Omit<Task, "id">): Promise<Task> {
  const { data } = await http.post<Task>("/task", payload);
  return data;
}

export async function updateTask(
  id: string,
  payload: Partial<Task>
): Promise<Task> {
  const { data } = await http.put<Task>(`/task/${id}`, payload);
  return data;
}

export async function deleteTask(id: string): Promise<Task> {
  const { data } = await http.delete<Task>(`/task/${id}`);
  return data;
}
