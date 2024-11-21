import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-8 sm:p-20">
      {/* Header */}
      <header className="w-full max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to My Website... or more like a place where I can visually express my learnings!</h1>
        <p className="text-lg text-gray-600">
          Hi, I’m Anirudh Chaudhary! This is where I showcase my work, share my thoughts, and more.
        </p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-8 items-center w-full max-w-3xl">
        <section className="w-full text-center">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            I’m a curious individual, passionate about anything and everything! Currently I am studying pursuing my Masters at the University of California, Berkeley in Electrical Engineering and Computer Science. 
            Check out my work and feel free to connect!
          </p>
        </section>

        <section className="w-full text-center">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="list-disc list-inside text-left">
            <li>
              <a
                href="#"
                className="text-blue-500 hover:underline"
              >
                Project 1
              </a> - A brief description of your project.
            </li>
            <li>
              <a
                href="#"
                className="text-blue-500 hover:underline"
              >
                Project 2
              </a> - A brief description of your project.
            </li>
          </ul>
        </section>

        <section className="w-full text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            Feel free to reach out at{" "}
            <a
              href="mailto:tellanichau@example.com"
              className="text-blue-500 hover:underline"
            >
              tellanichau@gmail.com
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-3xl mt-12 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Anirudh Chaudhary. All rights reserved.</p>
      </footer>
    </div>
  );
}
