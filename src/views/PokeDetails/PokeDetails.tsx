import { useLoaderData, useNavigate } from "react-router-dom";
import "./PokeDetails.scss";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../component/LoadingSpinner";

const PokeDetails = () => {
  const pokemonDetails: PokemonDetails = useLoaderData() as PokemonDetails;
  const [showAbilityInfo, setShowAbilityInfo] = useState(false);
  const [currentAbility, setCurrentAbility] = useState(0);
  const [tooltip, setTooltip] = useState("");
  const navigate = useNavigate();

  const fetchPokemonAbilitiesDetailsInfo = async () => {
    const response = await fetch(
      pokemonDetails.abilities[currentAbility].ability.url
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };
  const { isLoading, isError, data, error } = useQuery({
    queryKey: [
      "pokemonAbility",
      pokemonDetails.name,
      pokemonDetails.abilities[currentAbility].ability.name,
    ],
    queryFn: fetchPokemonAbilitiesDetailsInfo,
  });

  const showAdditionalData = async (
    event: React.MouseEvent<HTMLLIElement>,
    abilityId: number
  ) => {
    setCurrentAbility(abilityId);
    if (data.effect_entries[0].language.name === "en") {
      setTooltip(data.effect_entries[0].effect);
    } else {
      setTooltip(data.effect_entries[1].effect);
    }
    setShowAbilityInfo(true);
  };

  return (
    <div>
      <h1>{pokemonDetails.name}</h1>
      <img src={pokemonDetails.sprites.front_default} alt="" />
      <img src={pokemonDetails.sprites.front_shiny} alt="" />
      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
      <ul>
        Stats:
        {pokemonDetails.stats.map((stats) => (
          <li key={`${stats.base_stat}${stats.stat.name}`}>
            {stats.stat.name}: {stats.base_stat}
          </li>
        ))}
      </ul>
      <ul>
        Abilities:
        {pokemonDetails.abilities.map((abilities, index) => (
          <li
            style={{ position: "relative", cursor: "pointer" }}
            key={abilities.ability.name}
            onMouseOver={(e) => showAdditionalData(e, index)}
            onMouseLeave={() => setShowAbilityInfo(false)}
          >
            {abilities.ability.name}
          </li>
        ))}
        {isLoading ? <LoadingSpinner /> : showAbilityInfo && <p>{tooltip}</p>}
      </ul>
      <ul>
        Types:
        {pokemonDetails.types.map((types) => (
          <li key={types.type.name}>{types.type.name}</li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default PokeDetails;
