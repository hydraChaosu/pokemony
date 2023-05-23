import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>No page found</h1>
      <Link to="/">Back to main page</Link>
    </>
  );
};

export default NotFound;
