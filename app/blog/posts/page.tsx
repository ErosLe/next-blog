//import { posts } from "@/scripts/placeholder-data";
import { connectToDb } from "@/app/lib/data";
import { getPosts } from "@/app/lib/data";


export default async function Page() {
  const client = await connectToDb();
  const posts = await getPosts();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-white text-black">
      {client && (
  <p className="text-green-500">Connected to database</p>
)}
      <ul className="list-decimal list-inside space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <div className="font-semibold">{post.title}</div>
            <div className="text-gray-500">{post.date}</div>
            <div>{post.content}</div>
            <div className="text-sm text-gray-600">{post.user}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
