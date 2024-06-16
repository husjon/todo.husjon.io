"use client";

import { ReactNode } from "react";
import { BiSolidTrashAlt } from "react-icons/bi";
import { deleteTask } from "../../actions/tasks";
import { Task } from "../../drizzle/schema/task";

interface Button {
  children: ReactNode;
  onClick?: () => {} | void;
  className?: string;
}

export function Button({ children, onClick, className }: Button) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export function DeleteButton({ task }: { task: Task }) {
  return (
    <Button
      children={<BiSolidTrashAlt />}
      onClick={() => deleteTask(task.id)}
      className="rounded-sm bg-[#9B3E3E] p-1 hover:scale-110 hover:bg-[#BD4343]"
    />
  );
}
