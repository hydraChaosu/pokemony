import PokeCard from "../../component/PokeCard";
import { useLoaderData } from "react-router-dom";
import "./PokeInfo.scss";
import Pagination from "../../component/Pagination";
import { useMemo } from "react";

const Pokeinfo = () => {
  const pokemonData: PokemonData = useLoaderData() as PokemonData;
  const pokemons = useMemo(() => {
    return pokemonData.results.map((data: Pokemon) => (
      <PokeCard key={data.name} {...data} />
    ));
  }, [pokemonData]);

  return (
    <div className="pokeinfo">
      {/* search */}
      {pokemons}
      <Pagination />
    </div>
  );
};

export default Pokeinfo;
