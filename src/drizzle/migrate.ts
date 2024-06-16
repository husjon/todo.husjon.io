import "dotenv/config";

import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db, connection } from "./db";

async function doMigration() {
  await migrate(db, { migrationsFolder: "./src/drizzle/migrations" });
  await connection.end();
}

doMigration();
