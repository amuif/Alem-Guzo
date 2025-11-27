import { drizzle as neonDrizzle } from 'drizzle-orm/neon-http';
import { drizzle } from 'drizzle-orm/node-postgres';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';
import { env } from '$env/dynamic/private';
import { Pool } from 'pg';

let db
if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

if (process.env.NODE_ENV === 'production') {
  const client = neon(env.DATABASE_URL);
  db = neonDrizzle(client, { schema });
} else {
    const pool = new Pool({
    connectionString: env.DATABASE_URL,
  });
  db = drizzle(pool, { schema });
}
export const dbExport = db

