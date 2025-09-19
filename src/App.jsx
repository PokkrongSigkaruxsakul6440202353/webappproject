import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoviesList from "./pages/moviesList";
import InsertMovies from "./pages/Insertmovies";
import ManageMovies from "./pages/Managemovies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moviesList" element={<MoviesList />} />
        <Route path="/insert" element={<InsertMovies />} />
        <Route path="/manage" element={<ManageMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;