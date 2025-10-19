export interface Task {
  id: string;
  title: string;
  done: boolean;
  userName: string;
}

export interface NavState {
  name: string;
  edit?: Task;
}
