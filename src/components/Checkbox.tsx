"use client";

import { completeTask } from "../actions/tasks";
import { Task } from "../drizzle/schema/task";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { Button } from "./buttons/Buttons";

export default function Checkbox({ task }: { task: Task }) {
  return (
    <Button
      className="size-8"
      onClick={() => completeTask(task.id, !task.completed)}
    >
      {task.completed ? (
        <MdCheckBox className="size-full" />
      ) : (
        <MdCheckBoxOutlineBlank className="size-full" />
      )}
    </Button>
  );
}
