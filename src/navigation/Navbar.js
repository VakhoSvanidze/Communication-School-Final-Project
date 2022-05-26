import { NavLink } from "react-router-dom";
import ROUTES from "../config/routes";
import "./Navbar.css";
function Navbar() {
  return (
    <header>
      <h1 className="logo-heading">CyberShamans</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to={ROUTES.SIGN_UP}
              className={({ isActive }) => (isActive ? "active-item" : null)}
            >
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.SEARCH}
              className={({ isActive }) => (isActive ? "active-item" : null)}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.DASHBOARD}
              className={({ isActive }) => (isActive ? "active-item" : null)}
            >
              Main Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;