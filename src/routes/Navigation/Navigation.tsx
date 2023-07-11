import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import "css.gg/icons/css/pokemon.css";

export default function Navigation() {
  return (
    <>
      <div className="navigation__logo">
        <i className="gg-pokemon"></i>
      </div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <NavLink to="/pokemondle" className="navigation__link">
              Pokemondle
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink to="/pokeinfo/0" className="navigation__link">
              Pokeinfo
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink to="/pokemail" className="navigation__link">
              Pokemail
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
