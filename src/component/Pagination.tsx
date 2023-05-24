import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PokeInfo.scss";

const infoPerPage = 40;
const totalPages = 32;

const Pagination = () => {
  const { currentPage } = useParams();

  useEffect(() => {
    console.log();
  }, []);

  return <div className="pagination"></div>;
};

export default Pagination;
