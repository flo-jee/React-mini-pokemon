import { useDispatch, useSelector } from "react-redux";
import { Card } from "../component/Card";
import { fetchMultiplePokemonById } from "../RTK/thunk";
import { useEffect } from "react";

export default function Main() {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon.data);
  const loading = useSelector((state) => state.pokemon.loading);
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(10));
  }, [dispatch]);

  return (
    <>
      {pokemonData.data.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
