import { getTasks } from "../actions/tasks";
import { Task } from "../drizzle/schema/task";
import { DeleteButton } from "./buttons/Buttons";
import Checkbox from "./Checkbox";

export default async function TaskList() {
  const tasks = await getTasks();

  return (
    <div className="grid gap-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      {tasks.length === 0 && (
        <div className="grid rounded-md px-3 py-2 dark:bg-neutral-800">
          No tasks yet, try adding one using the field above.
        </div>
      )}
    </div>
  );
}

function TaskItem({ task }: { task: Task }) {
  return (
    <div className="grid gap-1 rounded-md px-3 py-2 dark:bg-neutral-800">
      <div className="grid grid-cols-[1fr_auto]">
        <span className="text-xl">{task.task}</span>
        <Checkbox task={task} />
      </div>
      <div className="flex">
        <DeleteButton task={task} />
      </div>
    </div>
  );
}
