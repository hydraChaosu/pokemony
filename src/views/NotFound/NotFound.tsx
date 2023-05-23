import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>No page found</h1>
      <Link to="/" className="notFound-link">
        Back to main page
      </Link>
    </div>
  );
};

export default NotFound;
