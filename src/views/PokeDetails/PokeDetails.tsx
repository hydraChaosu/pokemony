import { useLoaderData, useNavigate } from "react-router-dom";
import "./PokeDetails.scss";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "@/component/LoadingSpinner";
import Tooltip from "@/component/Tooltip";

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
    <div className="pokedetails">
      <h1 className="pokedetails__name">{pokemonDetails.name}</h1>
      <div className="pokedatils__image-container">
        <img
          className="pokedetails__image"
          src={pokemonDetails.sprites.front_default}
          alt=""
        />
        <img
          className="pokedetails__image"
          src={pokemonDetails.sprites.front_shiny}
          alt=""
        />
      </div>
      <div>
        <p className="pokedetails__info">
          Height: {pokemonDetails.height / 10} m
        </p>
        <p className="pokedetails__info">
          Weight: {pokemonDetails.weight / 10} kg
        </p>
      </div>
      <ul className="pokedetails__list">
        Stats:
        {pokemonDetails.stats.map((stats) => (
          <li
            className={`pokedetails__list-item ${stats.stat.name}`}
            key={`${stats.base_stat}${stats.stat.name}`}
          >
            {stats.stat.name}: {stats.base_stat}
          </li>
        ))}
      </ul>
      <ul className="pokedetails__list">
        Abilities:
        {pokemonDetails.abilities.map((abilities, index) => (
          <li
            key={abilities.ability.name}
            className="pokedetails__list-item ability"
            onMouseOver={(e) => showAdditionalData(e, index)}
            onMouseLeave={() => setShowAbilityInfo(false)}
          >
            <Tooltip
              content={tooltip}
              key={abilities.ability.name}
              isLoading={isLoading}
            >
              {abilities.ability.name}
            </Tooltip>
          </li>
        ))}
      </ul>
      <ul className="pokedetails__list">
        Types:
        {pokemonDetails.types.map((types) => (
          <li
            className={`pokedetails__list-item ${types.type.name}`}
            key={types.type.name}
          >
            {types.type.name}
          </li>
        ))}
      </ul>
      <button className="pokedetails__button" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};

export default PokeDetails;
