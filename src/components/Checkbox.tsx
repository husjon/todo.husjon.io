"use client";

import { completeTask } from "../actions/tasks";
import { Task } from "../drizzle/schema/task";

export default function Checkbox({ task }: { task: Task }) {
  return (
    <input
      type="checkbox"
      className="my-auto size-5"
      defaultChecked={task.completed}
      onClick={() => {
        completeTask(task.id, !task.completed);
      }}
    />
  );
}
