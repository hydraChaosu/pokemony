import { useEffect } from "react";
import PokeCard from "../../component/PokeCard";
import { useLoaderData } from "react-router-dom";

const Pokeinfo = () => {
  const pokemonData: PokemonData = useLoaderData() as PokemonData;

  useEffect(() => {
    console.log(pokemonData);
  }, []);

  const pokemons = pokemonData.results.map((data: Pokemon) => (
    <PokeCard key={data.name} {...data} />
  ));

  return (
    <>
      {pokemons}
      {/* Pagination */}
    </>
  );
};

export default Pokeinfo;
