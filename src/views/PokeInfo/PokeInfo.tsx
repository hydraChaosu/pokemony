import { useEffect } from "react";
import PokeCard from "../../component/PokeCard";
import { useLoaderData } from "react-router-dom";
import "./PokeInfo.scss";

const Pokeinfo = () => {
  const pokemonData: PokemonData = useLoaderData() as PokemonData;

  useEffect(() => {
    console.log(pokemonData);
  }, []);

  const pokemons = pokemonData.results.map((data: Pokemon) => (
    <PokeCard key={data.name} {...data} />
  ));

  return (
    <div className="pokeinfo">
      {/* search */}
      {pokemons}
      {/* Pagination */}
    </div>
  );
};

export default Pokeinfo;
