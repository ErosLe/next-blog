import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-red-100 rounded-lg min-h-screen">
          <div className="flex flex-col justify-center p-8">
            <h1 className="text-4xl text-purple-700 font-bold mb-4">Welcome</h1>

            <p className="text-lg text-gray-700 mb-4">
              Massa urna magnis dignissim id euismod porttitor
            </p>

            <Link
              href="/blog/posts"
              className="text-purple-600     font-semibold     underline     underline-offset-4     hover:text-purple-800"
            >
              Go to Blog
            </Link>
          </div>
          <div className="relative flex justify-center itms center">
            <Image
            src="/image-desktop.jpeg"
            width={1000}
            height={760}
            className="hidden md:block z-10"
            alt="Screenshots of the dashboard project showing desktop version"
            />
            <Image
            src="/image-mobile.jpeg"
            width={1000}
            height={760}
            className="block md:hidden z-10"
            alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
