"use server";

import { revalidatePath } from "next/cache";
import { db } from "../drizzle/db";
import { Task, TaskTable } from "../drizzle/schema/task";
import { eq } from "drizzle-orm";

export async function createTask(formData: FormData) {
  const task = formData.get("task") as string;
  if (!task) return;

  await db.insert(TaskTable).values({
    task,
  });

  revalidatePath("/");
}

export async function getTasks() {
  try {
    return await db.query.task.findMany();
  } catch {
    return [];
  }
}

export async function completeTask(id: Task["id"], completed: boolean) {
  await db
    .update(TaskTable)
    .set({
      completed,
    })
    .where(eq(TaskTable.id, id));

  revalidatePath("/");
}

export async function deleteTask(id: Task["id"]) {
  await db.delete(TaskTable).where(eq(TaskTable.id, id));

  revalidatePath("/");
}
