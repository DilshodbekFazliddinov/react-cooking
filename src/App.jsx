import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "./hooks/useThemeHook";

// pages
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
// components
import Navbar from "./components/NavbarList";
import ColorHunt from "./components/ColorHunt";

// hoojks
import { useFetch } from "./hooks/useFetch";

function App() {
  const { mode } = useTheme();
  const [url, setUrl] = useState("http://localhost:3000/recipes");
  const { data, error, isPending } = useFetch(url);
  return (
    <div className={`App font-inter ${mode}`}>
      <Router>
        <Navbar />
        <ColorHunt />
        <Routes>
          <Route path="/" element={data && <Home data={data} />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
