"use server";

export interface Task {
  id: string;
  task: string;
  completed: boolean;
}

export async function createTask(task: string) {}

export async function getTasks() {
  return [
    { id: "1", task: "Do thing nr. 1", completed: false },
    { id: "2", task: "Do thing nr. 2", completed: false },
    { id: "3", task: "Do thing nr. 3", completed: true },
  ] as Task[];
}

export async function completeTask(id: Task["id"], completed: boolean) {}

export async function deleteTask(id: Task["id"]) {}
