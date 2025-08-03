import { NavLink } from "react-router-dom";

export const Header = () => {

  const getActiveNavStyle = ({isActive}) => {
    return {
      color : isActive ? "blue" : "",
    };
  }

  return (
    <header>
      <nav>
        <ul className="header-nav">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "Link-Active" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "black",
                };
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} style={getActiveNavStyle}>Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
