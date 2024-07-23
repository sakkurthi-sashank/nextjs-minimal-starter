import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";
import { DB } from "./types";
import { env } from "../../env";

export const pool = new Pool({
  host: env.DATABASE_HOST,
  user: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  port: Number(env.DATABASE_PORT),
});

const dialect = new PostgresDialect({
  pool,
});

export const db = new Kysely<DB>({
  dialect,
});
