import "dotenv/config";

import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

async function doMigration() {
  const connection = new Pool({
    connectionString: process.env.DATABASE_URL as string,
    max: 1,
  });

  const db = drizzle(connection);

  await migrate(db, { migrationsFolder: "./src/drizzle/migrations" });

  await connection.end();
}

doMigration();
