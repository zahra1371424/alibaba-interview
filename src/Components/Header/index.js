import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { getStorage, setStorage } from "../../utility/localstorage";
import { getTheme } from "../../utility/util";
import "./header.style.scss";

function Header() {
  const themeClasses = getTheme();
  return (
    <>
      <Navbar className="navbar-area ">
        <Container>
          <Navbar.Brand href="/" className="title">
            Where in the world?
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <button
              className="change-theme"
              onClick={() => {
                const theme = getStorage("theme");
                const secondary_theme =
                  theme && theme === themeClasses[0]
                    ? themeClasses[1]
                    : themeClasses[0];
                document.body.classList.remove(
                  themeClasses[0],
                  themeClasses[1]
                );
                document.body.classList.add(secondary_theme);
                setStorage("theme", secondary_theme);
              }}
            >
              <i className="fa fa-moon-o px-2"></i>
              Dark Mode
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Header;
