import React, { useContext } from "react";
import { Context } from "..";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          RazerX
        </NavLink>
        <Nav className="ml-auto">
          {user.user.role === "ADMIN" && (
            <Button variant="outline-light">Admin</Button>
          )}
          {user.isAuth && (
            <Button variant="outline-light" style={{ marginLeft: "4px" }}>
              Exit
            </Button>
          )}
          {!user.isAuth && <Button variant="outline-light">Auth</Button>}
        </Nav>
      </Container>
    </Navbar>
  );
});

export default NavBar;
