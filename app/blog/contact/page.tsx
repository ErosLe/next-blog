import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-red-100 rounded-lg min-h-screen">
          <div className="flex flex-col justify-center p-8">
            <h1 className="text-4xl text-purple-700 font-bold mb-4">
              Contact
            </h1>

            <p className="text-lg text-gray-700 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, architecto natus,
              cumque laborum, error consequuntur eaque expedita numquam eveniet quas sunt
              possimus eligendi minus omnis sapiente sequi cum magni distinctio?
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Get in Touch
            </h2>

            <ul className="list-square pl-6 space-y-2 mb-6">
              <li>
                Email:{" "}
                <a
                  href="mailto:contact@example.com"
                  className="text-purple-600 underline underline-offset-4 hover:text-purple-800"
                >
                  contact@example.com
                </a>
              </li>
              <li>
                Website:{" "}
                <a
                  href="https://www.example.com"
                  className="text-purple-600 underline underline-offset-4 hover:text-purple-800"
                >
                  www.example.com
                </a>
              </li>
            </ul>

            <Link
              href="/"
              className="text-purple-600 font-semibold underline underline-offset-4 hover:text-purple-800 w-fit"
            >
              Go to Blog
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
