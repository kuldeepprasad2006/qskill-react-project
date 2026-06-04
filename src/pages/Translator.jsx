import axios from "axios";
import { useState } from "react";

function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);

  const translateText = async () => {
    if (!text.trim()) {
      alert("Please enter text");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
        {
          from: "en",
          to: "hi",
          text: text,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
            "x-rapidapi-host": "google-translate113.p.rapidapi.com",
          },
        }
      );

      setTranslated(
        response.data.trans ||
          response.data.translation ||
          JSON.stringify(response.data)
      );
    } catch (error) {
      console.error(error);
      setTranslated("Translation failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-8">
        
        <h1 className="text-5xl font-bold text-center text-blue-700 mb-3">
          🌍 Language Translator
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Translate English text into Hindi instantly
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Input Section */}
          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-700">
              English Text
            </h2>

            <textarea
              rows="10"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type your text here..."
              className="w-full border-2 border-blue-200 rounded-xl p-4 focus:outline-none focus:border-blue-500 resize-none"
            />

            <button
              onClick={translateText}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              {loading ? "Translating..." : "Translate Now"}
            </button>
          </div>

          {/* Output Section */}
          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-700">
              Hindi Translation
            </h2>

            <div className="border-2 border-green-200 bg-green-50 rounded-xl p-4 min-h-[270px] text-lg">
              {translated || (
                <span className="text-gray-400">
                  Translation will appear here...
                </span>
              )}
            </div>

            {translated && (
              <button
                onClick={() =>
                  navigator.clipboard.writeText(translated)
                }
                className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition"
              >
                Copy Translation
              </button>
            )}
          </div>

        </div>

        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          <div className="bg-blue-50 p-4 rounded-xl">
            <h3 className="font-bold text-blue-600">⚡ Fast</h3>
            <p className="text-sm text-gray-500">
              Instant Translation
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded-xl">
            <h3 className="font-bold text-purple-600">🌎 Multi Language</h3>
            <p className="text-sm text-gray-500">
              API Powered
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="font-bold text-green-600">🔒 Secure</h3>
            <p className="text-sm text-gray-500">
              RapidAPI Integration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Translator;