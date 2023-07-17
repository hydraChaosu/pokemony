import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./Pagination.scss";

const infoPerPage = 40;
const indexOfirstPage = 1;
const indexOfLastPage = 32;

const Pagination = () => {
  const { currentPage } = useParams();
  const [pageNumbers, setPageNumbers] = useState(
    Array(indexOfLastPage)
      .fill(0)
      .map((_, index) => index + 1)
  );

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

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

// pagging component

// q: how to use github copilot?
