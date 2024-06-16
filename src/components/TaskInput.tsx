"use client";

import Link from "next/link";
import { BiCog, BiLeftArrowAlt } from "react-icons/bi";
import { createTask } from "../actions/tasks";
import { usePathname } from "next/navigation";

export default function TaskInput() {
  const path = usePathname();
  const settingsMenu = path === "/settings";

  return (
    <form action={createTask} className="grid grid-cols-[1fr_auto] gap-3">
      <div className="grid rounded-md border border-neutral-800 text-lg outline-none focus:border-neutral-400 dark:bg-neutral-800">
        {!settingsMenu ? (
          <input
            placeholder="Enter a task..."
            name="task"
            className="bg-transparent px-4 py-2"
          />
        ) : (
          <span className="px-4 py-2 text-xl font-medium">Settings</span>
        )}
      </div>
      <Link
        className="m-0 flex rounded-md border border-neutral-800 px-3 py-2 text-lg outline-none focus:border-neutral-400 dark:bg-neutral-800 [&>*]:hover:scale-110"
        href={settingsMenu ? "/" : "/settings"}
      >
        {settingsMenu ? (
          <BiLeftArrowAlt className="size-6 self-center" />
        ) : (
          <BiCog className="size-6 self-center" />
        )}
      </Link>
    </form>
  );
}
