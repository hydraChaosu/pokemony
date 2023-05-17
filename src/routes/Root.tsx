import { NavLink, Outlet } from "react-router-dom";
import "./Root.scss";

export default function Navigation() {
  return (
    <>
      <div className="navigation__logo">
        <p>Pokemon App</p>
      </div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <NavLink to="/pokemondle" className="navigation__link">
              Pokemondle
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink to="/pokeinfo" className="navigation__link">
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
      <div className="navigation__outlet">
        <Outlet />
      </div>
    </>
  );
}
