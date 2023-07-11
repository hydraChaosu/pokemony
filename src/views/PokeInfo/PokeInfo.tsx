import PokeCard from "../../component/PokeCard";
import { useLoaderData } from "react-router-dom";
import "./PokeInfo.scss";
import Pagination from "../../component/Pagination";

const Pokeinfo = () => {
  const pokemonData: PokemonData = useLoaderData() as PokemonData;
  const pokemons = pokemonData.results.map((data: Pokemon) => (
    <PokeCard key={data.name} {...data} />
  ));

  return (
    <div className="pokeinfo">
      {/* search */}
      {pokemons}
      <Pagination />
    </div>
  );
};

export default Pokeinfo;
