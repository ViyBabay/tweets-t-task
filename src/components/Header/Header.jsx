import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink>Home</NavLink>
        <NavLink>Tweets</NavLink>
      </nav>
    </header>
  );
};
