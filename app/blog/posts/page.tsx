import { posts } from "@/app/lib/placeholder-data";

export default function Page() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-white text-black">
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
