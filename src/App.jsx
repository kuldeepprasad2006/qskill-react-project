import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Translator from "./pages/Translator";
import RandomGenerator from "./pages/RandomGenerator";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/random" element={<RandomGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;