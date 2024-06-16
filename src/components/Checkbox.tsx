"use client";

import { Task, completeTask } from "../actions/tasks";

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
