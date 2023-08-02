import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Header = styled.header`
  background-color: #ebd8ff;
  padding: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: #373737;
  text-decoration: none;
  padding: 10px;
`;
