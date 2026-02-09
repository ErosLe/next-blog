import { neon } from "@neondatabase/serverless";

export async function connectToDb() {
  try {
    const client = neon(process.env.DATABASE_URL!);
    return client;
  } catch (error) {
    console.error("Database connection error:", error);
  }
}
export async function getPosts() {
  const sql = await connectToDb();
  if (!sql) return [];

  const result = await sql`
    SELECT id, title, content, date, author
    FROM posts
    ORDER BY date DESC
    LIMIT 3;
  `;

  return result;
}


