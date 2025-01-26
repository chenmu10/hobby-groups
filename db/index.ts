import { drizzle } from 'drizzle-orm/neon-http';
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL in .env")
}

const db = drizzle(process.env.DATABASE_URL);
