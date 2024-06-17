import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { TaskTable } from "./schema/task";

export const connection = new Pool({
  connectionString: process.env.DATABASE_URL as string,
});

export const db = drizzle(connection, {
  // logger: true,
  schema: {
    task: TaskTable,
  },
});
