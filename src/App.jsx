import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import "./App.scss";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <>
      <h1 className="text-[40px] text-center">포켓몬 도감</h1>
      <nav className="flex gap-[10px] justify-center">
        <Link to="/">Main</Link>
        <Link to="/detail/1">Detail</Link>
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <main className="flex justify-center">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:pokemonId" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
