import { Outlet } from "react-router-dom";
import "./Root.scss";
import Navigation from "../Navigation/Navigation";

export default function Root() {
  return (
    <div className="main">
      <div className="main__navigation">
        <Navigation />
      </div>
      <div className="main__outlet">
        <Outlet />
      </div>
    </div>
  );
}
