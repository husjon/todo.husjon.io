import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { TaskTable } from "./schema/task";

export const connection = postgres(process.env.DATABASE_URL as string);

export const db = drizzle(connection, {
  // logger: true,
  schema: {
    task: TaskTable,
  },
});
