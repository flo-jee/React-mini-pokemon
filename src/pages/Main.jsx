import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Main() {
  const pokemonData = useSelector((state) => state.pokemon);
  return (
    <div>
      {pokemonData.data.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </div>
  );
}

const CardContainer = styled.section``;
const Card = ({ pokemon }) => {
  return (
    <CardContainer>
      <img src={pokemon.front} />
      <div>{pokemon.name}</div>
    </CardContainer>
  );
};
