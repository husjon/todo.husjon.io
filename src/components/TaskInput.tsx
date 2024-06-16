"use client";
import { createTask } from "../actions/tasks";

export default function TaskInput() {
  return (
    <form action={createTask} className="grid">
      <input
        className="rounded-md border border-neutral-800 px-3 py-2 text-lg outline-none focus:border-neutral-400 dark:bg-neutral-800"
        placeholder="Enter a task..."
        name="task"
      />
    </form>
  );
}
