import { Outlet } from "react-router-dom";
import "./Root.scss";
import Navigation from "../Navigation/Navigation";

export default function Root() {
  return (
    <div className="main">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
