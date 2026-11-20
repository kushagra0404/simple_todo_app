export interface TodoTask {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoSection {
  id: string;
  title: string;
  tasks: TodoTask[];
  collapsed: boolean;
}
