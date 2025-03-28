import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import "./App.scss";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorites = lazy(() => import("./pages/Favorites"));

function App() {
  const navigate = useNavigate();
  const ditpatch = useDispatch();

  useEffect(() => {
    ditpatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <>
      <h1 className="border-t-[30px] border-t-[red] bg-black text-white text-[40px] text-center">
        포켓몬 도감
      </h1>
      <nav className="py-[10px] border-b-[3px] border-b-black flex gap-[20px] justify-center">
        <Link to={"/"}>메인</Link>
        <Link to={"/favorites"}>찜목록</Link>
        <div>
          <input
            onChange={(e) => navigate(`/Search?pokemon=${e.target.value}`)}
            className="w-[120px] border-b border-[darkgary] px-2"
          />
          <span>🔍</span>
        </div>
      </nav>
      <main className="bg-[gray] flex flex-wrap gap-[20px] justify-center pt-[20px] pb-[20px]">
        <Suspense fallback={<div>로딩중...</div>}>
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/detail/:pokemonId"} element={<Detail />} />
            <Route path={"/search"} element={<Search />} />
            <Route path={"/favorites"} element={<Favorites />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
