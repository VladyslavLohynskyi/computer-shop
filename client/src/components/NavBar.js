import React, { useContext } from "react";
import { Context } from "..";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.setItem("token", "");
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          RazerX
        </NavLink>
        <Nav className="ml-auto">
          {user.user.role === "ADMIN" && (
            <Button
              variant="outline-light"
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Admin
            </Button>
          )}
          {user.isAuth && (
            <Button
              variant="outline-light"
              style={{ marginLeft: "4px" }}
              onClick={() => logOut()}
            >
              Exit
            </Button>
          )}
          {!user.isAuth && (
            <Button
              variant="outline-light"
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Auth
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
});

export default NavBar;
