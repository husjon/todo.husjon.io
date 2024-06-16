"use server";

import { revalidatePath } from "next/cache";
import { db } from "../drizzle/db";
import { Task, TaskTable } from "../drizzle/schema/task";

export async function createTask(formData: FormData) {
  const task = formData.get("task") as string;
  if (!task) return;

  await db.insert(TaskTable).values({
    task,
  });

  revalidatePath("/");
}

export async function getTasks() {
  return [
    { id: "1", task: "Do thing nr. 1", completed: false },
    { id: "2", task: "Do thing nr. 2", completed: false },
    { id: "3", task: "Do thing nr. 3", completed: true },
  ] as Task[];
}

export async function completeTask(id: Task["id"], completed: boolean) {}

export async function deleteTask(id: Task["id"]) {}
