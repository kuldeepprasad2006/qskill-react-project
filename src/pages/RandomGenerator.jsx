import { useState, useEffect, useCallback } from "react";

function RandomGenerator() {
  const [randomString, setRandomString] = useState("");

  const generateString = useCallback(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";

    for (let i = 0; i < 12; i++) {
      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setRandomString(result);
  }, []);

  useEffect(() => {
    generateString();
  }, [generateString]);

  const copyText = () => {
    navigator.clipboard.writeText(randomString);
    alert("Copied Successfully");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center p-6">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-3xl text-center">

        <h1 className="text-5xl font-bold text-purple-700 mb-6">
          🎲 Random String Generator
        </h1>

        <p className="text-gray-500 mb-8">
          Built using useState, useEffect and useCallback
        </p>

        <div className="bg-gray-100 rounded-xl p-6 text-2xl font-mono break-all mb-8">
          {randomString}
        </div>

        <div className="flex gap-4 justify-center">

          <button
            onClick={generateString}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl"
          >
            Generate
          </button>

          <button
            onClick={copyText}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
          >
            Copy
          </button>

        </div>

      </div>
    </div>
  );
}

export default RandomGenerator;