import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <main className="mx-auto grid gap-4 p-4 lg:w-4/5 xl:w-3/5 2xl:w-2/5">
      <TaskInput />
      <TaskList />
    </main>
  );
}
