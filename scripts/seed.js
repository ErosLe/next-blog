import { neon } from "@neondatabase/serverless";
import { posts } from "./placeholder-data.js";

async function seedPosts(sql) {
  try {
    // Enable UUID generation (needed for uuid_generate_v1mc)
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create table if it doesn't exist
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS posts (
        id UUID DEFAULT uuid_generate_v1mc() PRIMARY KEY,
        author VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL UNIQUE,
        content TEXT NOT NULL,
        date TEXT NOT NULL
      );
    `;

    console.log(`Created "posts" table`);

    // Insert rows
    const insertedPosts = await Promise.all(
      posts.map((post) => {
        return sql`
          INSERT INTO posts (id, title, content, date, author)
          VALUES (${post.id}, ${post.title}, ${post.content}, ${post.date}, ${post.user})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedPosts.length} posts articles`);

    return { createTable, posts: insertedPosts };
  } catch (error) {
    console.error("Error seeding posts:", error);
    throw error;
  }
}

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is missing. Check your .env/.env.local and seed script dotenv config.");
  }

  const sql = neon(process.env.DATABASE_URL);
  await seedPosts(sql);
}

main().catch((err) => {
  console.error("An error occurred while attempting to seed the database:", err);
  process.exitCode = 1;
});
