import { Outlet } from "react-router";

import { Header, Nav, StyledNavLink } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/users">Tweets</StyledNavLink>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
};
