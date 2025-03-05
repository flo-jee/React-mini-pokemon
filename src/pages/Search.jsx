import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectpokemonByRegExp } from "../RTK/selector";
import { Card } from "../component/Card";

useSearchParams;
export default function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("pokemon");
  const reg = getRegExp(param);

  const pokemon = useSelector(selectpokemonByRegExp(reg));

  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
