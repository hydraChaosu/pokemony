import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Pagination.scss";

const infoPerPage = 40;
const indexOfirstPage = 1;
const indexOfLastPage = 33;

const Pagination = () => {
  const [pageNumbers, setPageNumbers] = useState(
    Array(indexOfLastPage)
      .fill(indexOfirstPage)
      .map((_, index) => index + 1)
  );

  return (
    <nav className="pagination">
      <ul className="pagination__list">
        {pageNumbers.map((number) => (
          <li className="pagination__item" key={number}>
            <NavLink to={`/pokeinfo/${number}`} className="pagination__link">
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
