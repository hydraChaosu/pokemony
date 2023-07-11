import { Link } from "react-router-dom";
import "./PokeCard.scss";

const PokeCard = ({ name, url }: Pokemon) => {
  const cleanUrl = url.split("/");
  const pokemonId = cleanUrl[cleanUrl.length - 2];

  return (
    <Link to={`/pokemon/${pokemonId}`} className="pokecard">
      <div className="pokecard__number">{pokemonId}</div>
      <div className="pokecard__image">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
          alt={`pokemon ${name}`}
        />
      </div>
      <div className="pokecard__info">
        <div className="pokecard__info-name">{name}</div>
      </div>
    </Link>
  );
};
export default PokeCard;
