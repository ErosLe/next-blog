import { posts } from '@/app/lib/placeholder-data.js';

export default function Component({ id, title, content, date }: { id: string, title: string, content: string, date: string }) {
    return (
        // <div key={id} className="border border-gray-200 p-4 my-4">
        //     <h2>{title}</h2>
        //     <p className="text-gray-500">{date}</p>
        //     <p>{content}</p>
        // </div>
        <div className= "flex h-full flex-col px-3 py-4 md:px-2 bg-white text-black">

         <ul className="list-decimal list-inside space-y-4">
      {posts.map((post) => (
          <li key={post.id}>
          
            title={post.title}
            content={post.content}
            date={post.date}
            user={post.user}
          
        </li>
      ))}
    </ul>
      </div>
    );
}
