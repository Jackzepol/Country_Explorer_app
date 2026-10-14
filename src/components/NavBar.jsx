

import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Menu = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    font-weight: 600;
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <Logo>Explorador de paises</Logo>
      <Menu>
        <Link to="/">Inicio</Link>
        <Link to="/favorites">Favoritos</Link>
      </Menu>
    </Nav>
  );
}
