import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div>
        <p>pokemon app</p>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to={`/pokemondle`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              pokemondle
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/pokeinfo`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              pokeinfo
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}
