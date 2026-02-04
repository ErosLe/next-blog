import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <>
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-none rounded-lg min-h-screen">
          <div className="flex flex-col justify-center p-8">
            <h1 className="text-4xl text-green-700 font-bold mb-4">About</h1>

            <p className="text-lg text-gray-700 mb-4">
              Massa urna magnis dignissim id euismod porttitor
            </p>

            <Link
              href="/"
              className="text-purple-600     font-semibold     underline     underline-offset-4     hover:text-purple-800"
              >
              Go to Blog
            </Link>
          </div>
        </div>
      </div>
    </main>
                </>
  );
}
