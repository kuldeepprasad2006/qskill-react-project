import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
      <div className="max-w-5xl text-center px-6">

        <h1 className="text-6xl font-bold text-gray-800 mb-6">
          QSkill Internship Project
        </h1>

        <p className="text-xl text-gray-600 mb-10">
          React • Tailwind CSS • RapidAPI • React Router
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              🌍 Translator App
            </h2>

            <p className="text-gray-600 mb-6">
              Translate English text into different languages using RapidAPI.
            </p>

            <Link
              to="/translator"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
              Open Translator
            </Link>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              🎲 Random Generator
            </h2>

            <p className="text-gray-600 mb-6">
              Generate random strings using React Hooks.
            </p>

            <Link
              to="/random"
              className="bg-purple-600 text-white px-6 py-3 rounded-xl"
            >
              Open Generator
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;