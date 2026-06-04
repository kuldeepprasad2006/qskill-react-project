import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-white text-2xl font-bold">
          QSkill Internship
        </h1>

        <div className="flex gap-8">

          <Link
            to="/"
            className={`text-white ${
              location.pathname === "/"
                ? "font-bold underline"
                : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/translator"
            className={`text-white ${
              location.pathname === "/translator"
                ? "font-bold underline"
                : ""
            }`}
          >
            Translator
          </Link>

          <Link
            to="/random"
            className={`text-white ${
              location.pathname === "/random"
                ? "font-bold underline"
                : ""
            }`}
          >
            Random Generator
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;